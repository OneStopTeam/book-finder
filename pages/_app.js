import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import "../src/styles.css";

export default function App({ Component }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Component />
      </ChakraProvider>
    </RecoilRoot>
  );
}
