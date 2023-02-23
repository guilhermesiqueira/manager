import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { defaultBodyXsRegular } from "styles/typography/default";

export const Container = styled.div`
  width: 256px;
  padding: ${({ theme }) => theme.spacing(24)};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 16px;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  text-align: left;
  background: ${({ theme }) => theme.colors.neutral10};
`;

export const MainText = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(16)};
  color: ${({ theme }) => theme.colors.gray40};
`;

export const MainValue = styled.span`
  ${defaultBodyXsRegular}

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray40};
`;

export const TreasureTitle = styled.h3`
  font-weight: 700;
  font-weight: 600;
  font-size: 14px;
`;

export const Teste = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SecondaryText = styled.span`
  ${defaultBodyXsRegular}

  color: ${({ theme }) => theme.colors.gray40};
`;

export const SecondaryLeftValue = styled.h6`
  color: ${({ theme }) => theme.colors.brand.primary[300]};
`;

export const SecondaryRightValue = styled.h6`
  color: ${({ theme }) => theme.colors.gray30};
`;

export const Graph = styled(Pie)`
  padding: ${({ theme }) => theme.spacing(32, 16, 0)};
`;

export const CausesSection = styled.div`
  padding: ${({ theme }) => theme.spacing(12, 16)};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const CauseCard = styled.div`
  width: 25%;
  margin-bottom: ${({ theme }) => theme.spacing(20)};
  display: flex;
  flex-direction: column;
`;

export const CauseTitle = styled.h6`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const CauseValue = styled.h5`
  color: ${({ theme }) => theme.colors.brand.primary[300]};
`;
