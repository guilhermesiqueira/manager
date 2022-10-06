import styled from "styled-components";

export const Subtitle = styled.h3`
  margin-bottom: 12px;
`;

export const SubtitleDescription = styled.h4`
  margin-bottom: 4px;
  font-weight: 400;
`;

export const TextInput = styled.input`
  display: block;
  margin: 4px 0;
  margin-bottom: 8px;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 400px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    opacity: 1;
  }
`;
