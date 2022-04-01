import { Circle, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { pageState } from "../atom";

export default function Pagination({ numberOfPages }) {
  const router = useRouter();
  const setStartIndex = useSetRecoilState(pageState);
  const [pageArr, setPageArr] = useState(Array(numberOfPages).fill(0)); // pagination 반복을 줄이기 위한 array
  const [currentPage, setCurrentPage] = useState("1");

  // page 번호 설정
  const clickPage = (event) => {
    const page = event.target.textContent;
    setStartIndex((page - 1) * 20);
    setCurrentPage(page);
    router.push(`/result?page=${page}`);
  };

  return (
    <HStack spacing={3} mb="2rem">
      {pageArr.map((element, index) => {
        // 현재 페이지
        if (`${index + 1}` === currentPage) {
          return (
            <Circle
              _hover={{ cursor: "pointer" }}
              size="2.5rem"
              border="2px"
              color="white"
              borderColor="accent"
              bg="accent"
              onClick={(event) => clickPage(event)}
            >
              {index + 1}
            </Circle>
          );
        }

        return (
          <Circle
            _hover={{ cursor: "pointer" }}
            size="2.5rem"
            border="2px"
            color="black"
            borderColor="accent"
            onClick={(event) => clickPage(event)}
          >
            {index + 1}
          </Circle>
        );
      })}
    </HStack>
  );
}
