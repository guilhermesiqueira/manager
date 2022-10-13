import styled from "styled-components";
import { Pie } from "react-chartjs-2";

export const Container = styled.div`
  width: 256px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 16px;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  text-align: left;
  background: ${({ theme }) => theme.colors.neutral10};
`;

export const MainText = styled.div`
  padding-bottom: 16px;
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
  color: ${({ theme }) => theme.colors.green30};
`;

export const SecondaryRightValue = styled.div`
  color: ${({ theme }) => theme.colors.gray30};
`;

export const Graph = styled(Pie)`
  padding: 32px 16px 0;
`;
