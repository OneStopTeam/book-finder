import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

import theme from "../src/theme";
import Fonts from "../src/theme/Font";
import Layout from "../src/components/Layout/Layout";

// Create a client
const queryClient = new QueryClient();

export default function App({ Component }) {
  return (
    <RecoilRoot>
      <Fonts />
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component />
          </Layout>
        </QueryClientProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}
