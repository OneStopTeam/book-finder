import { Circle, HStack } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { pageState } from "../atom";

export default function Pagination({ numberOfPages }) {
  const router = useRouter();
  const setStartIndex = useSetRecoilState(pageState);
  const [pageArr, setPageArr] = useState(Array(numberOfPages).fill(0)); // pagination 반복을 줄이기 위한 array
  const [currentPage, setCurrentPage] = useState("1");
  const [isNextPage, setIsNextPage] = useState(false);

  // page 번호 설정
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
    setIsNextPage(where === "next" ? true : false);
    const page = where === "next" ? "6" : "5";
    movePage(page);
  };

  return (
    <HStack spacing={3} mb="2rem">
      {/* 이전 페이지 버튼 */}
      {isNextPage && (
        <ChevronLeftIcon
          boxSize="3rem"
          color="accent"
          _hover={{ cursor: "pointer" }}
          onClick={() => changePages("before")}
        />
      )}
      {createPages().map((element, index) => {
        const pageNumber = isNextPage ? index + 6 : index + 1;
        // 현재 페이지 스타일 지정
        if (`${pageNumber}` === currentPage) {
          return (
            <Circle
              _hover={{ cursor: "pointer" }}
              size="2.5rem"
              border="2px"
              color="white"
              borderColor="accent"
              bg="accent"
              onClick={(event) => movePage(event.target.textContent)}
            >
              {pageNumber}
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
            onClick={(event) => movePage(event.target.textContent)}
          >
            {pageNumber}
          </Circle>
        );
      })}

      {/* 다음 페이지 버튼 */}
      {!isNextPage && pageArr.length > 5 && (
        <ChevronRightIcon
          boxSize="3rem"
          color="accent"
          _hover={{ cursor: "pointer" }}
          onClick={() => changePages("next")}
        />
      )}
    </HStack>
  );
}
