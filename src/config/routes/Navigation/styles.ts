import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  theme: any;
  enabled: boolean;
};

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-around;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.darkShadow};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    width: 80px;
    height: 100%;
    min-height: 100vh;
    padding: 50px 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    justify-content: flex-start;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.darkShadow};
  }
`;

export const Title = styled.p`
  text-decoration: none;
  color: ${({ theme, enabled }: Props) =>
    enabled ? theme.colors.darkGray : theme.colors.gray};
`;

export const StyledLink = styled(Link)`
  margin-bottom: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const Icon = styled.img`
  height: 24px;
`;
