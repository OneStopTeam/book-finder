import { Circle, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { pageState } from "../atom";
import Chevron from "./Buttons/Chevron";

export default function Pagination({ numberOfPages }) {
  const router = useRouter();
  const setStartIndex = useSetRecoilState(pageState);
  const [pageArr, setPageArr] = useState(Array(numberOfPages).fill(0)); // pagination 반복을 줄이기 위한 array
  const [currentPage, setCurrentPage] = useState("1");
  const [isNextPage, setIsNextPage] = useState(false);

  // 선택한 page로 이동
  const movePage = (page) => {
    setStartIndex((page - 1) * 20);
    setCurrentPage(page);
    router.push(`/result?page=${page}`);
  };

  // pagination 생성
  const createPages = () => {
    if (pageArr.length < 5) {
      return pageArr;
    }
    if (isNextPage) {
      return pageArr.slice(5);
    } else {
      return pageArr.slice(0, 5);
    }
  };

  // 이전 or 다음 버튼 클릭 시 page 버튼 변경
  const changePages = (where) => {
    const page = where === "next" ? "6" : "5";
    setIsNextPage(where === "next" ? true : false);
    movePage(page);
  };

  return (
    <HStack spacing={3} mb="2rem">
      {/* 이전 페이지 버튼 */}
      {isNextPage && (
        <Chevron
          direction="left"
          size="3rem"
          onClick={() => changePages("before")}
        />
      )}

      {/* 페이지 버튼 */}
      {createPages().map((element, index) => {
        const pageNumber = isNextPage ? index + 6 : index + 1;
        return (
          <Circle
            _hover={{ cursor: "pointer" }}
            size="2.5rem"
            border="2px"
            color={`${pageNumber}` === currentPage ? "white" : "black"}
            borderColor="accent"
            bg={`${pageNumber}` === currentPage ? "accent" : "transparent"}
            onClick={(event) => movePage(event.target.textContent)}
          >
            {pageNumber}
          </Circle>
        );
      })}

      {/* 다음 페이지 버튼 */}
      {!isNextPage && pageArr.length > 5 && (
        <Chevron
          direction="right"
          size="3rem"
          onClick={() => changePages("next")}
        />
      )}
    </HStack>
  );
}
