import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { Text } from "components/atomics/AuxiliarText/styles";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 256px;
  box-sizing: border-box;
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 16px;
  text-align: left;
  padding: 24px;
`;

export const MainText = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  padding-bottom: 16px;
`;

export const MainValue = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGray};
  text-transform: uppercase;
`;

export const Teste = styled.div`
  display: flex;
  width: 100%;
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
  padding: 32px 16px 0px 16px;
`;
