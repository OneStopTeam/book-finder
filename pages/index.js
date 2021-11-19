import { useState } from "react";

import { Flex, Image } from "@chakra-ui/react";

import bgImage from "../assets/book-bg.jpg";
import Result from "../src/components/Result";
import Search from "../src/components/Search";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Flex direction="column" align="center">
      <Image src={bgImage.src} w="100%" maxH="250" objectFit="cover" />
      <Search setBooks={setBooks} setIsLoading={setIsLoading} />
      <Result books={books} isLaoding={isLoading} />
    </Flex>
  );
}
