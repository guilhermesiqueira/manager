import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Card = styled.div`
  width: 256px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 16px;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  text-align: left;
  background: ${({ theme }) => theme.colors.white};
`;

export const MainContent = styled.div``;

export const MainValue = styled.p``;

export const SecondaryContent = styled.div``;

export const SecondaryValue = styled.div``;
