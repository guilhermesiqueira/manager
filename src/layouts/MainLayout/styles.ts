import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(80)};
  padding-left: 15%;
  background: ${({ theme }) => theme.colors.neutral[50]};
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.defaultShadow};
`;

export const BodyContainer = styled.div``;

export const Settings = styled.img`
  cursor: pointer;
`;
