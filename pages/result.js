import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";

import Search from "../src/components/Search";
import { keywordState } from "../src/atom";
import SearchedBook from "../src/components/Books/SearchedBook";
import { fetchResult } from "../src/fetching";
import useWindowDimensions from "../src/hooks/useWindowDimensions";

export default function Result() {
  const keyword = useRecoilValue(keywordState);
  // keyword로 구글 도서 정보 가져오기
  const { data, isLoading, isError } = useQuery(keyword, () =>
    fetchResult(keyword)
  );
  const { height: windowHeight } = useWindowDimensions();

  if (isError) {
    return (
      <Error message="Error: 도서 정보를 가져오지 못했습니다. 다시 시도해 주세요 😂" />
    );
  }

  if (isLoading) {
    return <Center>Loading...</Center>;
  } else {
    return (
      <Flex
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Search />
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
            ' 검색 결과 (
            <Text color="accent" as="b">
              {data ? data.length : "0"}
            </Text>
            )
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
      </Flex>
    );
  }
}
