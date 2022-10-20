import styled from "styled-components";

export const Subtitle = styled.h3`
  margin-bottom: 12px;
`;

export const SubtitleDescription = styled.h4`
  margin-bottom: 4px;
  font-weight: 400;
`;

export const TextInput = styled.input`
  max-width: 400px;
  margin: 8px 0;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 10px;
  display: block;
  color: ${({ theme }) => theme.colors.gray40};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray30};
    opacity: 1;
  }
`;

export const Error = styled.span`
  color: ${({ color, theme }) => color || theme.colors.red30};

  ::first-letter {
    text-transform: uppercase;
  }
`;
