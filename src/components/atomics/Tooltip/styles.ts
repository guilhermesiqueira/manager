import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipTip = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  position: absolute;
  top: -30px;
  left: 50%;
  z-index: 100;
  line-height: 1;
  white-space: nowrap;
  background: ${({ color, theme }) => color || theme.colors.gray40};
  color: ${({ theme }) => theme.colors.neutral10};
  transition-timing-function: ease-in-out;
  transform: translateX(-50%);
`;

export const TooltipText = styled.h6``;
