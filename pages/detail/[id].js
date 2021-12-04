import { Flex, Button, Box, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

import useGetBook from "../../src/hooks/useGetBook";

export default function Detail() {
  const {
    query: { id },
  } = useRouter();
  const { bookData, isLoading, isError, getBookData } = useGetBook();

  useEffect(() => {
    getBookData(id);
  }, [id]);

  const BuyButton = ({ buyLink }) => {
    if (buyLink) {
      return (
        <Link href={buyLink}>
          <Button m={1}>구매하기</Button>
        </Link>
      );
    } else {
      return <Button m={1}>구매하기</Button>;
    }
  };

  const PreviewButton = ({ previewLink }) => {
    if (previewLink) {
      return (
        <Link href={previewLink}>
          <Button m={1}>미리보기</Button>
        </Link>
      );
    } else {
      <Button m={1}>미리보기</Button>;
    }
  };

  const showData = () => {
    if (bookData !== null) {
      return (
        <Box>
          <Flex borderRdius="15" justify="center" direction="column">
            <Flex direction="row" p={20} m="1rem" justify="center">
              <Box>
                <Image
                  boxShadow="md"
                  borderRadius="1rem"
                  src={bookData.volumeInfo.imageLinks.thumbnail}
                  p={1}
                />
                <Flex m={2} justify="center">
                  <BuyButton buyLink={bookData.saleInfo.buyLink} />
                  <PreviewButton
                    previewLink={bookData.volumeInfo.previewLink}
                  />
                </Flex>
              </Box>
              <Box m={3}>
                <Text fontSize="2rem" fontWeight="bolder">
                  {bookData.volumeInfo.title}
                </Text>
                <Text m={1} color="#868e96">
                  {bookData.volumeInfo.authors || "알 수 없음"}
                  {bookData.volumeInfo.publisher || " 알 수 없음"} |{" "}
                  {bookData.volumeInfo.publishedDate || " 날짜 없음"}
                </Text>
                <Box m={2}>
                  <Text m={1}>책소개</Text>
                  <Box h="17rem" maxW="40rem" overflow="auto">
                    {bookData.volumeInfo.description || "없음"}
                  </Box>
                </Box>
              </Box>
            </Flex>
            <RelatedBook author={authors} />
          </Flex>
        </Box>
      );
    } else {
      return <Text>Nothing...</Text>;
    }
  };

  return isError ? (
    <Text>**Error**</Text>
  ) : isLoading ? (
    <Text>Loading...</Text>
  ) : (
    showData()
  );
}
