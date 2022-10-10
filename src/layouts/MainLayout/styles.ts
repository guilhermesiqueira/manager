import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 70px;
  padding-left: 15%;
  background: ${({ theme }) => theme.colors.lightGray};
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.lightShadow};
`;

export const BodyContainer = styled.div``;

export const Settings = styled.img`
  cursor: pointer;
`;
