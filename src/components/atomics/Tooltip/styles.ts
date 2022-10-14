import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

type TooltipProps = {
  visible: boolean;
};

export const TooltipTip = styled.div<TooltipProps>`
  position: absolute;
  border-radius: 0.5rem;
  top: 0;
  left: 0;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  z-index: ${({ theme }) => theme.zindex.tooltip};
  color: ${({ theme }) => theme.colors.neutral10};
  background: ${({ color, theme }) => color || theme.colors.gray40};
  visibility: ${({ visible }: TooltipProps) =>
    visible ? "visible" : "hidden"};
`;

export const TooltipText = styled.h6``;
