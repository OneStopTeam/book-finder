import { useEffect, useState } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import axios from "axios";

import Search from "../src/components/Search";
import { keywordState, pageState } from "../src/atom";
import SearchedBook from "../src/components/Books/SearchedBook";
import { fetchResult } from "../src/fetching";
import useWindowDimensions from "../src/hooks/useWindowDimensions";
import Pagination from "../src/components/Pagination";

export default function Result() {
  const router = useRouter();
  const keyword = useRecoilValue(keywordState); // 검색어
  const startIndex = useRecoilValue(pageState); // start index for fetching
  const [numberOfData, setNumberOfData] = useState(0);
  // keyword로 구글 도서 정보 가져오기
  const { data, isLoading, isError } = useQuery([startIndex, keyword], () =>
    fetchResult(startIndex, keyword)
  );
  const { height: windowHeight } = useWindowDimensions();

  useEffect(async () => {
    let count = 0; // 검색 결과 개수

    for (let i = 0; count < 400; i++ * 40) {
      const {
        data: { items },
      } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}&startIndex=${i}&maxResults=40&key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      // items이 더 이상 없으면 종료
      if (!items) break;

      count += items.length;
    }

    setNumberOfData(count);
  }, [keyword]);

  useEffect(() => {
    // 검색어가 없으면 홈으로 이동
    if (keyword === "") {
      router.push("/");
    }
    // 해당 페이지로 이동
    router.push(`/result?page=${startIndex}`);
  }, [startIndex]);

  if (isError) {
    return (
      <Error message="Error: 도서 정보를 가져오지 못했습니다. 다시 시도해 주세요 😂" />
    );
  }

  return (
    <Flex
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Search />

      {isLoading ? (
        <Center my={windowHeight * 0.4} color="grey">
          Loading...
        </Center>
      ) : (
        <Box w="90%" maxW="55rem">
          <Text
            display="flex"
            alignItems="center"
            my="2rem"
            fontSize="xl"
            as="b"
          >
            '
            <Text color="accent" as="b">
              {keyword}
            </Text>
            ' 검색 결과 &nbsp;
            <Text color="accent" as="b">
              ({numberOfData})
            </Text>
          </Text>
          {data ? (
            // 검색 결과가 있으면
            <Flex alignItems="center" justifyContent="center" wrap="wrap">
              {data.map((book) => (
                <SearchedBook book={book} />
              ))}
            </Flex>
          ) : (
            // 검색 결과가 없으면
            <Center my={windowHeight * 0.4} color="grey">
              도서 정보가 없습니다.
            </Center>
          )}
        </Box>
      )}
      {data && <Pagination numberOfPages={Math.ceil(numberOfData / 20)} />}
    </Flex>
  );
}
