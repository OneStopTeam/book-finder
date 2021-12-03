import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
