import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin: 4px 0;
  margin-bottom: 32px;
  margin-top: 84px;
`;

export const InfoName = styled.h6`
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;
