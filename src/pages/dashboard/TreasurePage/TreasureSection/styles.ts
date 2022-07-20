import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: grid;
    box-sizing: border-box;

    position: absolute;

    background: ${theme.colors.ribonWhite};

    border: 1px solid ${theme.colors.lightGray};
    border-radius: 16px;
  `}
`;

export const Title = styled.h1`
  ${() => css``}
`;

export const Subtitle = styled.div`
  ${() => css``}
`;

export const CausesCardContainer = styled.div``;

export const FooterText = styled.h5`
  ${() => css``}
`;
