import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {},
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

export default theme;
