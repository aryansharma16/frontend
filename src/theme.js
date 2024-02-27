import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "light", // Corrected typo: initialColorMode instead of intialColorMode
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        color: "black", // Set default text color to white
        bg: "gray.800", // Set default background color to dark gray
      },
    },
  },
};

export default extendTheme(theme);
