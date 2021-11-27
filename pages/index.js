import { useState } from "react";

import { Flex, Image } from "@chakra-ui/react";

import bgImage from "../assets/book-bg.jpg";
import Result from "../src/components/Result";
import Search from "../src/components/Search";
import Recommend from "../src/components/Recommend";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [first, setFirst] = useState(true);

  return (
    <Flex direction="column" align="center" pos="relative">
      <Image src={bgImage.src} w="100%" maxH="2xs" objectFit="cover" />
      <Search
        setFirst={setFirst}
        setBooks={setBooks}
        setIsLoading={setIsLoading}
      />
      {first ? <Recommend /> : <Result books={books} isLoading={isLoading} />}
    </Flex>
  );
}
