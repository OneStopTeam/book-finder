import { Input, IconButton, FormControl } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Search({ searchBook, handleChange }) {
  const pressEnter = (event) => {
    const { key } = event;
    if (key === "Enter") {
      searchBook();
    }
  };

  const clickButton = () => {
    searchBook();
  };

  return (
    <FormControl
      id="keyword"
      display="flex"
      width="80%"
      maxWidth="70rem"
      alignItems="center"
      pos="absolute"
      top={{
        base: "11rem",
        md: "15rem",
        xl: "15rem",
      }}
    >
      <Input
        p={6}
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
        onClick={clickButton}
      />
    </FormControl>
  );
}
