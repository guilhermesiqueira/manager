import styled from "styled-components";

export const Text = styled.h6`
  width: 100%;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 16px;
  border-radius: 8px;
  margin: 4px 0;
`;
