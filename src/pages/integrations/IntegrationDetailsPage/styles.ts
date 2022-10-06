import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16px;
`;

export const Title = styled.h2`
  margin: 84px 0 32px;
  text-transform: uppercase;
`;

export const InfoName = styled.h6`
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;
