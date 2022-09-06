import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";
import typography from "./typography";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${typography}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    :focus {
      outline: none;
    }
  }

    html,
    body,
    #root {
      min-height: 100vh;
    }

    body {
      font-family: ${({ theme }) => theme.font};
    }

    #root {
      display: flex;
    }

    #launcher {
      display: none !important;
    }
  
  button {
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;

    :hover {
      cursor: pointer;
    }
  }


`;

export default GlobalStyle;
