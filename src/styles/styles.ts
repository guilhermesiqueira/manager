import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  padding: ${({ theme }) => theme.spacing(24)};
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 16px;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  text-align: left;
  background: ${({ theme }) => theme.colors.neutral10};
`;

export const MainText = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(16)};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray40};
`;

export const MainValue = styled.p`
  color: ${({ theme }) => theme.colors.gray40};
`;

export const Teste = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SecondaryText = styled.div`
  color: ${({ theme }) => theme.colors.gray40};
`;

export const SecondaryLeftValue = styled.div`
  color: ${({ theme }) => theme.colors.brand.primary[300]};
`;

export const SecondaryRightValue = styled.div`
  color: ${({ theme }) => theme.colors.gray30};
`;
