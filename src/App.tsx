import RoutesComponent from "config/routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AuthenticationProvider from "contexts/authenticationContext";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <AuthenticationProvider>
            <RoutesComponent />
          </AuthenticationProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
