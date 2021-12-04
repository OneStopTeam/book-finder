<<<<<<< HEAD
import { Flex,Button, Box, Text, Spinner, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link"
import { useEffect, useState } from "react";
import Search from "../../src/components/Search";


export default function Detail() {
<Search

      />
    const router = useRouter();
  const {
    query: { title, buylink,preview,img,date,publisher,authors,description},
  } = router;

    const BuyButton = () => {
      return (
        <Link href={buylink}>
          <Button m={1}>구매하기</Button>
        </Link>
      );
    };
    console.log(authors);  
    const PreviewButton = () => {
      return (
        <Link href={preview}>
          <Button m={1}>미리보기</Button>
        </Link>
      );
    };
console.log(img);
    return (
        <Box>
          <Flex borderRdius="15" justify="center" direction="column">
            <Flex direction="row" p={20} m="1rem" justify="center">
              <Box>
                <Image
                  boxShadow="md"
                  borderRadius="1rem"
                  src={img}
                  p={1}
                />
                <Flex m={2} justify="center">
                  <BuyButton />
                  <PreviewButton />
                </Flex>
              </Box>
              <Box m={3}>
                <Text fontSize="2rem" fontWeight="bolder">
                  {title}
                </Text>
                <Text m={1} color="#868e96">
                  {authors}
                  {publisher} |
                  {date}
                </Text>
                <Box m={2}>
                  <Text m={1}>책소개</Text>
                  <Box h="17rem" maxW="40rem" overflow="auto">
                    {description}
                  
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
      );
  
}
=======
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useGetBook from "../../src/hooks/useGetBook";

export default function Detail() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const { bookData, isLoading, getBookData } = useGetBook();

  useEffect(() => {
    getBookData(id);
  }, [id]);

  // const {
  //   volumeInfo: { title },
  // } = bookData;

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <Flex direction="column" align="center" pos="relative" w="100%">
      <Text fontSize="xl" fontWeight="bold" color="orange.600" mb={2}>
        Book: {bookData && bookData.volumeInfo.title}
      </Text>
    </Flex>
  );
}
>>>>>>> 22fc909de6a5195d1c5a3d9b8998b4bf04f17695
