import styled from "styled-components";
import { defaultBodyXsRegular } from "styles/typography/default";

export const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    flex-direction: row;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.spacing(80, 0, 32)};
  text-transform: uppercase;
`;

export const Subtitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const SubtitleDescription = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-weight: 400;
`;

export const TextInput = styled.input`
  min-width: 400px;
  max-width: 400px;
  margin: ${({ theme }) => theme.spacing(8, 0, 12)};
  padding: ${({ theme }) => theme.spacing(8, 16)};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  display: block;
  color: ${({ theme }) => theme.colors.darkGray};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    opacity: 1;
  }
`;

export const Span = styled.span`
  margin: ${({ theme }) => theme.spacing(4, 8, 32, 4)};
  display: inline-block;
  vertical-align: middle;
  color: ${({ color, theme }) => color || theme.colors.darkGray};

  ::first-letter {
    text-transform: uppercase;
  }
`;
export const Error = styled.span`
  margin-top: -20px;
  color: ${({ color, theme }) => color || theme.colors.brand.tertiary[400]};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const ButtonContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(24, 0)};
  display: flex;
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const ImageRecommendation = styled.h6`
  font-weight: 400;
  font-size: 12px;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const ItemBox = styled.div`
  margin-right: ${({ theme }) => theme.spacing(16)};
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CharLimit = styled.div<{
  color?: string;
}>`
  width: 400px;
  margin-top: -4px;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  display: flex;
  justify-content: space-between;
  color: ${({ color, theme }) => color || theme.colors.neutral[500]};
`;

export const CharLimitText = styled.p`
  ${defaultBodyXsRegular}
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Checkbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.brand.primary[300]};
  margin: ${({ theme }) => theme.spacing(4, 8, 32, 4)};
  display: inline-block;
  vertical-align: middle;
  transform: scale(1.5);
`;
