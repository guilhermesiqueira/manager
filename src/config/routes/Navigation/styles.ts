import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  theme: any;
  enabled: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  align-self: flex-end;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.dark_shadow};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 50px 0px 50px;
    width: 80px;
    height: 100%;
    align-self: flex-start;
    justify-content: flex-start;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.dark_shadow};
  }
`;

export const Title = styled.p`
  ${({ theme, enabled }: Props) => css`
    color: ${enabled ? theme.colors.dark_gray : theme.colors.gray};
    text-decoration: none;
  `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 12px;
`;

export const Icon = styled.img`
  height: 24px;
`;
