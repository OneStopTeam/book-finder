import axios from "axios";

import { useState } from "react";

import { Input, IconButton, FormControl } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import styled from "styled-components";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Search() {
  const [keyword, setKeyword] = useState("");

  const searchBooks = async () => {
    if (keyword) {
      const books = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
      );
      const {
        data: { items },
      } = books;
      const {
        volumeInfo: { title },
      } = items[0];
      console.log(title);
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
      maxWidth="800"
      marginTop="10%"
      alignItems="center"
      method="get"
    >
      <Input
        p={5}
        value={keyword}
        placeholder="검색어를 입력하세요"
        borderRadius="10"
        boxShadow="md"
        onChange={(event) => handleChange(event)}
        onKeyPress={(event) => pressEnter(event)}
      />
      <IconButton
        right="0"
        aria-label="Search database"
        icon={<SearchIcon />}
        onClick={() => clickButton()}
      />
    </FormControl>
  );
}
