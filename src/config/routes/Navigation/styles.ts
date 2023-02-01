import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  theme: any;
  enabled: boolean;
};

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: ${({ theme }) => theme.zindex.navbar};
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-around;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.neutral10};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.defaultShadow};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    width: 80px;
    height: 100%;
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing(48, 48, 0)};
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    justify-content: flex-start;
    background: ${({ theme }) => theme.colors.neutral10};
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.defaultShadow};
  }
`;

export const Title = styled.p`
  line-height: 20px;
  text-decoration: none;
  color: ${({ theme, enabled }: Props) =>
    enabled ? theme.colors.gray40 : theme.colors.gray30};
`;

export const StyledLink = styled(Link)`
  margin-bottom: ${({ theme }) => theme.spacing(12)};
  padding: ${({ theme }) => theme.spacing(12)};
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const Icon = styled.img`
  height: 24px;
`;
