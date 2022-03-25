import { Flex } from "@chakra-ui/react";

import Search from "../src/components/Search";

export default function Home() {
  return (
    <Flex direction="column" align="center" w="100%">
      <Search />
    </Flex>
  );
}
