import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16px;
  flex-direction: column;
  display: flex;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin: 4px 0;
  margin-bottom: 32px;
  margin-top: 84px;
`;

export const Subtitle = styled.h3`
  margin-top: 12px;
`;

export const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const IntegrationCardContainer = styled.div``;
