import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#FAFFFF",
        color: "#292626",
      },
      // styles for the `a`
    },
  },
  colors: {
    black: "#292626",
    accent: "#F74900",
    white: "#FAFFFF",
  },
});
