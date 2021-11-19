import axios from "axios";

import { useState } from "react";

import { Input, IconButton, FormControl } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import styled from "styled-components";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Search({ setFirst, setBooks, setIsLoading }) {
  const [keyword, setKeyword] = useState("");

  const searchBooks = async () => {
    setFirst(false);
    setIsLoading(true);
    if (keyword) {
      const books = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
      );
      const {
        data: { items },
      } = books;
      setBooks(items);
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  };

  const pressEnter = (event) => {
    const { key } = event;
    if (key === "Enter") {
      searchBooks();
      setKeyword("");
    }
  };

  const clickButton = () => {
    searchBooks();
    setKeyword("");
  };

  return (
    <FormControl
      id="keyword"
      display="flex"
      width="80%"
      maxWidth="70rem"
      alignItems="center"
      pos="absolute"
      top="15rem"
    >
      <Input
        p={6}
        value={keyword}
        placeholder="검색어를 입력하세요"
        boxShadow="md"
        bgColor="white"
        focusBorderColor="orange.600"
        onChange={(event) => handleChange(event)}
        onKeyPress={(event) => pressEnter(event)}
      />
      <IconButton
        boxShadow="md"
        size="lg"
        colorScheme="orange"
        aria-label="Search database"
        icon={<SearchIcon />}
        onClick={() => clickButton()}
      />
    </FormControl>
  );
}
