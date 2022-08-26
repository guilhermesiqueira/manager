import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.xLightGray};
  padding-left: 15%;
  box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.lightShadow};
`;

export const BodyContainer = styled.div``;

export const Settings = styled.img`
  ${() => css`
    cursor: pointer;
  `}
`;
