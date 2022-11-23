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

export const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.gray30};
`;

export const CausesCardContainer = styled.div``;

export const Subtitle = styled.h4`
  margin-top: 32px;
`;

export const SubtitleInfo = styled.h2`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.green30};
`;

export const CardProject = styled.div`
  width: 200px;
  min-height: 40px;
  margin-top: 8px;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.neutral10};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.defaultShadow};
`;
