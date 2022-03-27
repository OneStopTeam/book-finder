import { extendTheme } from "@chakra-ui/react";
import { useRecoilBridgeAcrossReactRoots_UNSTABLE } from "recoil";

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
    grey: "rgba(41, 38, 38, 0.8)",
  },
});

export default theme;
