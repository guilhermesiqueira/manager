import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";
import {
  defaultBodyMdSemibold,
  defaultBodySmRegular,
} from "./typography/default";
import { typography } from "./typography/typography";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${typography}

  * {
    margin: ${({ theme }) => theme.spacing(0)};
    padding: ${({ theme }) => theme.spacing(0)};
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
    ${defaultBodyMdSemibold}
    :hover {
      cursor: pointer;
    }

  }
  
  tbody td,
  tbody th {
    ${defaultBodySmRegular}
    line-height: 20px;
  }

  input {
    font-size: 14px;
  }
`;

export default GlobalStyle;
