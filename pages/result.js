import { Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";

import Search from "src/components/Search";
import { keywordState } from "../src/atom";
import SearchedBook from "../src/components/Books/SearchedBook";
import { fetchResult } from "../src/fetching";

export default function Result() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const { data, isLoading, isError } = useQuery(keyword, () =>
    fetchResult(keyword)
  );

  return (
    <>
      <Search />
      {!isLoading && data && (
        <>
          <Text>{data.length}개의 책이 검색됐어요</Text>
          {data.map((book) => (
            <SearchedBook book={book} />
          ))}
        </>
      )}
    </>
  );
}
