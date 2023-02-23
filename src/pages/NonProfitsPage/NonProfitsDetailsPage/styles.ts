import styled from "styled-components";
import { defaultBodyXsMedium } from "styles/typography/default";

export const Container = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(12)};
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

export const Subtitle = styled.h4``;

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

export const ArrowOutward = styled.img``;

export const CardProjectInfo = styled.h4`
  ${defaultBodyXsMedium}

  color: ${({ theme }) => theme.colors.gray30};
`;

export const StoriesContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(16)};
  padding: ${({ theme }) => theme.spacing(12, 24, 24)};
  border: 2px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 156px;
  height: 148px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ContainerStories = styled.div`
  margin-top: ${({ theme }) => theme.spacing(12)};
`;
