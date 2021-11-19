import { useState } from "react";

import { Flex } from "@chakra-ui/react";

import Result from "../src/components/Result";
import Search from "../src/components/Search";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Flex direction="column" align="center">
      <Search setBooks={setBooks} setIsLoading={setIsLoading} />
      <Result books={books} isLaoding={isLoading} />
    </Flex>
  );
}
