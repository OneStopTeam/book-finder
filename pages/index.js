import { useState } from "react";
import { Flex, Image } from "@chakra-ui/react";

import useSearchBooks from "../src/hooks/useSearchBooks";
import bgImage from "assets/book-bg.jpg";
import Result from "src/components/Result";
import Search from "src/components/Search";
import Recommend from "src/components/Recommend";

export default function Home() {
  const { first, books, isLoading, searchBook, handleChange } =
    useSearchBooks();

  return (
    <Flex direction="column" align="center" pos="relative">
      <Image src={bgImage.src} w="100%" maxH="2xs" objectFit="cover" />
      <Search searchBook={searchBook} handleChange={handleChange} />
      {first ? <Recommend /> : <Result books={books} isLoading={isLoading} />}
    </Flex>
  );
}
