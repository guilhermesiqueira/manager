import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { Text } from "components/atomics/AuxiliarText/styles";

export const Container = styled.div`
  width: 256px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 16px;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  text-align: left;
  background: ${({ theme }) => theme.colors.white};
`;

export const MainText = styled.div`
  padding-bottom: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const MainValue = styled(Text)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Teste = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SecondaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const SecondaryLeftValue = styled.h6`
  color: ${({ theme }) => theme.colors.green};
`;

export const SecondaryRightValue = styled.h6`
  color: ${({ theme }) => theme.colors.gray};
`;

export const Graph = styled(Pie)`
  padding: 32px 16px 0;
`;
