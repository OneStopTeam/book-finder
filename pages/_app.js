import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import theme from "../src/theme";
import Layout from "../src/components/Layout/Layout";

export default function App({ Component }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
