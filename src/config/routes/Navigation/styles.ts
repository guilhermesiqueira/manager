import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  theme: any;
  enabled: boolean;
};

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    align-self: flex-end;
    background-color: ${theme.colors.white};
    box-shadow: 0px 4px 12px ${theme.colors.darkShadow};

    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px 50px 0px 50px;
      width: 80px;
      height: 100%;
      align-self: flex-start;
      justify-content: flex-start;
      min-height: 100vh;
      background: ${theme.colors.white};
      box-shadow: 0px 4px 12px ${theme.colors.darkShadow};
    }
  `}
`;

export const Title = styled.p`
  ${({ theme, enabled }: Props) => css`
    color: ${enabled ? theme.colors.darkGray : theme.colors.mediumGray};
    text-decoration: none;
    font-size: 12px;
  `}
`;

export const StyledLink = styled(Link)`
  ${() => css`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 12px;
  `}
`;

export const Icon = styled.img`
  ${() => css`
    height: 24px;
  `}
`;
