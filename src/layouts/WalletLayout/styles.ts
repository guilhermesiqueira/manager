import styled from "styled-components";
import ButtonSecondary from "components/atomics/Buttons/ButtonSecondary";

export const Container = styled.div`
  width: 100%;
  min-width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(80)};
  padding-left: 15%;
  background: ${({ theme }) => theme.colors.neutral[50]};
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.defaultShadow};
`;

export const BodyContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const walletContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(20)};
  margin-right: ${({ theme }) => theme.spacing(8)};
`;
export const WalletButton = styled(ButtonSecondary)``;

export const Treasure = styled.img`
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const TreasureButton = styled.button`
  margin-left: 6%;
  border: 1px solid ${({ theme }) => theme.colors.brand.primary[300]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.neutral10};
`;
