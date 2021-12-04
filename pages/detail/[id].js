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