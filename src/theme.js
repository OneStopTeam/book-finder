import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#FAFFFF",
        color: "#292626",
      },
    },
  },
  colors: {
    black: "#292626",
    accent: "#F74900",
    white: "#FAFFFF",
  },
});
