import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;
`;

export const TooltipTip = styled.div`
  position: absolute;
  border-radius: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ color, theme }) => color || theme.colors.darkGray}};
  font-size: 11px;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;
  font-weight: 600;
  top: -30px;
  transition-timing-function: ease-in-out;
`;
