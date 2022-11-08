import styled from "styled-components";

export const Container = styled.div`
  display: block;
`;

export const Card = styled.div`
  width: 728px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  text-align: left;
  background: ${({ theme }) => theme.colors.neutral10};
`;

export const MainContent = styled.div``;

export const MainValue = styled.p``;

export const SecondaryContent = styled.div``;

export const SecondaryValue = styled.div``;
