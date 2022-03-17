import { Text, Image, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useGetBook from "../../src/hooks/useGetBook";
import bgImage from "assets/book-bg.jpg";
import Description from "../../src/components/Description";
import Search from "../../src/components/Search";
export default function Detail() {
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
        <Flex direction="column" align="center" pos="relative" w="100%">
          <Image
            opacity={0.8}
            src={bgImage.src}
            w="100%"
            maxH="2xs"
            objectFit="cover"
          />
          <Description bookData={bookData} />
        </Flex>
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
