import { Flex } from "@chakra-ui/react";

import Result from "../src/components/Result";
import Search from "../src/components/Search";

export default function Home() {
  return (
    <Flex direction="column" align="center">
      <Search />
      <Result />
    </Flex>
  );
}
