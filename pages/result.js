import { Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import Search from "src/components/Search";
import { valueState } from "../src/atom";
import SearchedBook from "../src/components/Books/SearchedBook";

export default function Result() {
  const [value, setValue] = useRecoilState(valueState);

  return (
    <>
      <Search />
      <Text>{books.length}개의 책이 검색됐어요</Text>
    </>
  );
}
