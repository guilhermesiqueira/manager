import { css } from "styled-components";

const typography = css`
  body {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    span {
      color: ${({ theme }) => theme.colors.darkGray};
    }

    h1 {
      font-size: 36px;
      font-weight: 700;
      line-height: 160%;
    }

    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 170%;
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
      line-height: 170%;
    }

    h4 {
      font-size: 16px;
      font-weight: 700;
      line-height: 170%;
    }

    h5 {
      font-size: 14px;
      font-weight: 600;
      line-height: 170%;
    }

    h6 {
      font-size: 12px;
      font-weight: 600;
      line-height: 170%;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 170%;
    }
  }
`;

export default typography;
