import { Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import Search from "src/components/Search";
import { bookState } from "../src/atom";

export default function Result() {
  const [books, setBooks] = useRecoilState(bookState);

  return (
    <>
      <Search />
      <Text>{books.length}개의 책이 검색됐어요</Text>
    </>
  );
}
