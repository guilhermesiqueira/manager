import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";
import {
  defaultButtonTextLarge,
  defaultParagraphMedium,
} from "./typography/default";
import { typography } from "./typography/typography";

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

    #root {
      display: flex;
    }

    #launcher {
      display: none !important;
    }
  
  button {
    ${defaultButtonTextLarge}
    :hover {
      cursor: pointer;
    }

  }
  
  tbody td,
  tbody th {
    ${defaultParagraphMedium}
    line-height: 20px;
  }

  input {
    font-size: 14px;
  }
  
  a {
    position: relative;
  }
`;

export default GlobalStyle;
