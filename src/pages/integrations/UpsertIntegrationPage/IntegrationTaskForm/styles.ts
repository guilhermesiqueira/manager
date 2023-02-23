import styled from "styled-components";

export const Subtitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const SubtitleDescription = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-weight: 400;
`;

export const TextInput = styled.input`
  max-width: 400px;
  margin: ${({ theme }) => theme.spacing(8, 0)};
  padding: ${({ theme }) => theme.spacing(8, 16)};
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 10px;
  display: block;
  color: ${({ theme }) => theme.colors.gray40};

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutral[500]};
    opacity: 1;
  }
`;

export const Error = styled.span`
  color: ${({ color, theme }) => color || theme.colors.brand.tertiary[400]};

  ::first-letter {
    text-transform: uppercase;
  }
`;
