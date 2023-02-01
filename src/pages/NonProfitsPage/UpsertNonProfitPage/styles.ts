import styled from "styled-components";

export const ContentSection = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Checkbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.green30};
  margin: ${({ theme }) => theme.spacing(4, 8, 32, 4)};
  display: inline-block;
  vertical-align: middle;
  transform: scale(1.5);
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.spacing(80, 0, 32)};
  text-transform: uppercase;
`;

export const Divider = styled.hr`
  margin: ${({ theme }) => theme.spacing(8, 0)};
  border: none;
`;

export const Subtitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const SubtitleDescription = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-weight: 400;
`;

export const TextInput = styled.input`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(8, 0, 12)};
  padding: ${({ theme }) => theme.spacing(8, 16)};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 4px;
  display: block;
  color: ${({ theme }) => theme.colors.darkGray};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    opacity: 1;
  }
`;

export const AreaInput = styled.textarea`
  min-width: 274px;
  max-width: 274px;
  margin: ${({ theme }) => theme.spacing(8, 0, 12)};
  padding: ${({ theme }) => theme.spacing(8, 16)};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 4px;
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
  color: ${({ color, theme }) => color || theme.colors.red30};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const ButtonContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(24, 0)};
  display: flex;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const DoubleItemSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ItemBox = styled.div`
  margin-right: ${({ theme }) => theme.spacing(16)};
  display: flex;
  flex-direction: column;
`;

export const ImageRecommendation = styled.h6`
  font-weight: 400;
  font-size: 12px;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.gray30};
`;
