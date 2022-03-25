import { Divider, Flex, Grid, Text } from "@chakra-ui/react";
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

  return (
    <Flex
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Search />
      {!isLoading && data && (
        <Flex
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            display="flex"
            alignItems="center"
            w="100%"
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
              {data.length}
            </Text>
            )
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {data.map((book) => (
              <SearchedBook book={book} />
            ))}
          </Grid>
        </Flex>
      )}
    </Flex>
  );
}
