import { Flex, Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import styled from "styled-components";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

export default function Search() {
  return (
    <Flex w="80%" maxW="800" mt="10%" pos="relative">
      <Input
        p={5}
        placeholder="검색어를 입력하세요"
        borderRadius="10"
        boxShadow="md"
      />
      <IconButton
        pos="absolute"
        right="0"
        aria-label="Search database"
        icon={<SearchIcon />}
      />
    </Flex>
  );
}
