import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.spacing(80, 0, 80)};
  text-transform: uppercase;
`;
