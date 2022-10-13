import styled from "styled-components";

export const Container = styled.div`
  display: block;
`;

export const Card = styled.div`
  width: 256px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 16px;
  text-align: left;
`;

export const MainContent = styled.div``;

export const MainValue = styled.p``;

export const SecondaryContent = styled.div``;

export const SecondaryValue = styled.div``;
