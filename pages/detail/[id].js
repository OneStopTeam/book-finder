import { Text, Icon, Flex, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import useGetBook from "../../src/hooks/useGetBook";
import Description from "../../src/components/Description";
import RelatedBook from "../../src/components/RelatedBook";
import Navigation from "../../src/components/Navigation";

export default function Detail() {
  const [more, setMore] = useState(0);
  const {
    query: { id },
  } = useRouter();
  const { bookData, isLoading, isError, getBookData } = useGetBook();

  useEffect(() => {
    getBookData(id);
  }, [id]);

  const showData = () => {
    if (bookData !== null) {
      return (
        <>
          <Navigation />
          <Description bookData={bookData} />
          <Flex maxW="80%" justify="center" direction="column">
            <Flex alignItems="center">
              <Heading fontSize="2rem" minW="7rem" textColor="#F74900">
                책소개
              </Heading>
              <hr style={{ borderColor: "#F74900", width: "100%" }} />
            </Flex>
            {more ? (
              <>
                <Flex mt={5} justify="center" ml="2rem" mr="2rem">
                  {bookData.volumeInfo.description}
                </Flex>
                <Flex cursor="pointer" justify="end" alignItems="center">
                  <Text onClick={() => setMore(0)}>접기</Text>
                  <Icon as={ChevronUpIcon} color="#F74900" w={5} h={5} />
                </Flex>
              </>
            ) : (
              <>
                <Flex mt={5} justify="center" ml="2rem" mr="2rem">
                  {bookData.volumeInfo.description.slice(0, 500)} ...
                </Flex>
                <Flex cursor="pointer" justify="end" alignItems="center">
                  <Text onClick={() => setMore(1)}>더보기</Text>
                  <Icon as={ChevronDownIcon} color="#F74900" w={5} h={5} />
                </Flex>
              </>
            )}
            <Flex alignItems="center" mt={3} mb={5}>
              <Heading fontSize="2rem" minW="9rem" textColor="#F74900">
                연관도서
              </Heading>
              <hr style={{ borderColor: "#F74900", width: "100%" }} />
            </Flex>
            <RelatedBook author={bookData.volumeInfo.authors} />
          </Flex>
        </>
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
