import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
