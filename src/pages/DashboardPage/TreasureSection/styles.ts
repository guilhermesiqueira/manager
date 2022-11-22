import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
`;

export const Card = styled.div`
  width: 728px;
  border-radius: 16px;
  box-sizing: border-box;
  text-align: left;
  background: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.neutral10};
`;

export const MainContent = styled.div``;

export const MainValue = styled.p``;

export const SecondaryContent = styled.div``;

export const SecondaryValue = styled.div``;
