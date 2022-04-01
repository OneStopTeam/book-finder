import { useEffect } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";

import Search from "../src/components/Search";
import { keywordState, pageState } from "../src/atom";
import SearchedBook from "../src/components/Books/SearchedBook";
import { fetchResult } from "../src/fetching";
import useWindowDimensions from "../src/hooks/useWindowDimensions";
import Pagination from "../src/components/Pagination";
import useGetNumberOfData from "../src/hooks/useGetNumberOfData";

export default function Result() {
  const router = useRouter();
  const keyword = useRecoilValue(keywordState); // 검색어
  const startIndex = useRecoilValue(pageState); // start index for fetching
  // keyword로 구글 도서 정보 가져오기
  const {
    data,
    isLoading: resultIsLoading,
    isError,
  } = useQuery([startIndex, keyword], () => fetchResult(startIndex, keyword));
  const { height: windowHeight } = useWindowDimensions();
  // 검색 결과 개수 구하기
  const { numberOfData, isLoading: numberIsLoading } =
    useGetNumberOfData(keyword);

  const isLoading = resultIsLoading || numberIsLoading;

  // 검색어가 없으면 홈으로 이동
  useEffect(() => {
    if (keyword === "") {
      router.push("/");
    }
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
            ' 검색 결과&nbsp;
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
      {numberOfData && (
        <Pagination numberOfPages={Math.ceil(numberOfData / 20)} />
      )}
    </Flex>
  );
}
