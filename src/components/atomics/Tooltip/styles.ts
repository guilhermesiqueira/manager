import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

type TooltipProps = {
  visible: boolean;
};

export const TooltipTip = styled.div<TooltipProps>`
  padding: ${({ theme }) => theme.spacing(8, 16)};
  border-radius: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zindex.tooltip};
  white-space: nowrap;
  background: ${({ color, theme }) => color || theme.colors.gray40};
  color: ${({ theme }) => theme.colors.neutral10};
  visibility: ${({ visible }: TooltipProps) =>
    visible ? "visible" : "hidden"};
`;

export const TooltipText = styled.h6``;
