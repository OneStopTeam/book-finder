import { Flex, Button, Box, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Result from "src/components/Result";
import useSearchBooks from "../../src/hooks/useSearchBooks";
import Search from "../../src/components/Search";
import { useEffect } from "react";
import bookCover from "../../public/img/book-cover.png";
import RelatedBook from "../../src/components/RelatedBook";
import useGetBook from "../../src/hooks/useGetBook";

export default function Detail() {
  const router = useRouter();
  const {
    query: {
      title,
      buylink,
      preview,
      thumbnail,
      date,
      publisher,
      authors,
      description,
    },
  } = router;

  const BuyButton = () => {
    return (
      <Link href={buylink}>
        <Button m={1}>구매하기</Button>
      </Link>
    );
  };

  const PreviewButton = () => {
    return (
      <Link href={preview}>
        <Button m={1}>미리보기</Button>
      </Link>
    );
  };
  console.log(authors);
  return (
    <Flex direction="column">
      <Box>
        <Flex borderRdius="15" justify="center" direction="column">
          <Flex direction="row" p={20} m="1rem" justify="center">
            <Box>
              <Image
                h="15rem"
                src={thumbnail}
                borderRadius="15"
                boxShadow="md"
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
                {authors} |{publisher} |{date}
              </Text>
              <Box m={2}>
                <Text m={1}>책소개</Text>
                <Box h="17rem" maxW="40rem" overflow="auto">
                  {description ? (
                    <Text>{description}</Text>
                  ) : (
                    <Text>책 설명이 없습니다</Text>
                  )}
                </Box>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <RelatedBook author={authors} />
    </Flex>
  );
}
