import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 84px 0 32px;
  text-transform: uppercase;
`;

export const Subtitle = styled.h3`
  margin-top: 12px;
`;

export const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.gray30};
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const CausesCardContainer = styled.div``;
