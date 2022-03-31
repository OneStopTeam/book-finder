import { Circle, HStack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { pageState } from "../atom";

export default function Pagination({ numberOfPages }) {
  const [startIndex, setStartIndex] = useRecoilState(pageState);

  // page 번호 설정
  const clickPage = (event) => {
    setStartIndex((event.target.textContent - 1) * 20);
  };

  return (
    <HStack>
      <Circle
        _hover={{ cursor: "pointer" }}
        size="3rem"
        border="2px"
        color="black"
        borderColor="accent"
        onClick={(event) => clickPage(event)}
      >
        1
      </Circle>
      <Circle
        _hover={{ cursor: "pointer" }}
        size="3rem"
        border="2px"
        color="black"
        borderColor="accent"
        onClick={(event) => clickPage(event)}
      >
        2
      </Circle>
      <Circle
        _hover={{ cursor: "pointer" }}
        size="3rem"
        border="2px"
        color="black"
        borderColor="accent"
        onClick={(event) => clickPage(event)}
      >
        3
      </Circle>
    </HStack>
  );
}
