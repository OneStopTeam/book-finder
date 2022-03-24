import { Flex } from "@chakra-ui/react";

import Search from "src/components/Search";
import Error from "../src/components/Error";

export default function Home() {
  return (
    <Flex direction="column" align="center" pos="relative" w="100%">
      <Search />
      <Error message="Error message" />
    </Flex>
  );
}
