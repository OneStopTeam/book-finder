import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";

import Search from "../src/components/Search";
import { keywordState } from "../src/atom";
import SearchedBook from "../src/components/Books/SearchedBook";
import { fetchResult } from "../src/fetching";

export default function Result() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  // keyword로 구글 도서 정보 가져오기
  const { data, isLoading, isError } = useQuery(keyword, () =>
    fetchResult(keyword)
  );

  if (isError) {
    return (
      <Error message="도서 정보를 가져오지 못했습니다. 다시 시도해 주세요 😂" />
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
            <Flex alignItems="center" justifyContent="center" wrap="wrap">
              {data.map((book) => (
                <SearchedBook book={book} />
              ))}
            </Flex>
          ) : (
            <Center>도서 정보가 없습니다.</Center>
          )}
        </Box>
      </Flex>
    );
  }
}
