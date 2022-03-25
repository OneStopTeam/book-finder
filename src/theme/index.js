import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
  },

  fonts: {
    body: "SuncheonR",
    heading: "Jal_Haru",
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

export default theme;
