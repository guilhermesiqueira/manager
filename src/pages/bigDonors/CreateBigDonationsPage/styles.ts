import styled from "styled-components";

export const ContentSection = styled.div`
  width: 100%;
  max-width: 472px;
  display: flex;
  flex-direction: column;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
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

export const NumberInput = styled.input`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  padding: ${({ theme }) => theme.spacing(8, 4)};
  border: 1.5px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 4px;
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Checkbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.brand.primary[300]};
  margin: ${({ theme }) => theme.spacing(4, 8, 32, 4)};
  display: inline-block;
  vertical-align: middle;
  transform: scale(1.5);
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
  color: ${({ color, theme }) => color || theme.colors.brand.tertiary[400]};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const ButtonContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(24, 0)};
  display: flex;
`;
