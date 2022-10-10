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
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  display: block;
  color: ${({ theme }) => theme.colors.darkGray};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    opacity: 1;
  }
`;
