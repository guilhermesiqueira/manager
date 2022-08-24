import styled, { css } from "styled-components";

export const Text = styled.div`
  ${({ color, theme }) => css`
    width: 100%;
    background-color: ${color};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.offWhite};
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 10px;
    margin: 4px 0;
  `}
`;
