import styled from "styled-components";

export const Text = styled.h6`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(4, 0)};
  padding: ${({ theme }) => theme.spacing(12, 16)};
  border-radius: 8px;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.neutral10};
`;
