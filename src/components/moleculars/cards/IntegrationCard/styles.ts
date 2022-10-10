import styled from "styled-components";

export const Text = styled.h6`
  width: 100%;
  margin: 4px 0;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};
`;
