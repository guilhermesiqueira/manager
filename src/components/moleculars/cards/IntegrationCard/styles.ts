import styled from "styled-components";

export const Text = styled.div`
  width: 100%;
  background-color: ${({ color }) => color};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 10px;
  margin: 4px 0;
`;
