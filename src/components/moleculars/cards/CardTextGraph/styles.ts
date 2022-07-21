import styled, { css } from "styled-components";
import { Pie } from "react-chartjs-2";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    width: 256px;
    box-sizing: border-box;
    position: absolute;
    background: ${theme.colors.ribonWhite};
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 16px;
    text-align: left;
    padding: 16px;
  `}
`;

export const MainText = styled.div`
  ${({ theme }) => css`
    font-family: "Inter";
    color: ${theme.colors.ribonBlack};
  `}
`;

export const MainValue = styled.p`
  ${({ theme }) => css`
    font-weight: 700;
    color: ${theme.colors.ribonBlack};
  `}
`;

export const SecondaryText = styled.div`
  ${({ theme }) => css`
    font-family: "Inter";
    color: ${theme.colors.ribonBlack};
  `}
`;

export const SecondaryLeftValue = styled.div`
  ${({ theme }) => css`
    font-family: "Inter";
    color: ${theme.colors.ribonBlue};
    font-weight: 700;
  `}
`;

export const SecondaryRightValue = styled.div`
  ${({ theme }) => css`
    font-family: "Inter";
    color: ${theme.colors.darkGray};
    font-weight: bold;
  `}
`;

export const Graph = styled(Pie)`
  ${() => css`
    font-family: "Inter";
  `}
`;
