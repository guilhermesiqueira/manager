import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.light_gray};
  padding-left: 15%;
  box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.light_shadow};
`;

export const BodyContainer = styled.div``;

export const Settings = styled.img`
  cursor: pointer;
`;
