import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(16)};
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
  margin: ${({ theme }) => theme.spacing(80, 0, 32)};
  text-transform: uppercase;
`;

export const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const Subtitle = styled.h4`
  margin-top: ${({ theme }) => theme.spacing(32)};
`;

export const SubtitleInfo = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing(16)};
  color: ${({ theme }) => theme.colors.brand.primary[300]};
`;

export const CardProject = styled.div`
  width: 200px;
  min-height: 40px;
  margin-top: ${({ theme }) => theme.spacing(8)};
  padding: ${({ theme }) => theme.spacing(8, 16)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.neutral10};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.defaultShadow};
`;
