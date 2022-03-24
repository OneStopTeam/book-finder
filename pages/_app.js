import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import theme from "../src/theme";

export default function App({ Component }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component />
      </ChakraProvider>
    </RecoilRoot>
  );
}
