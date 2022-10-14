import { useRef, useState } from "react";
import * as S from "./styles";

export type Props = {
  children: JSX.Element;
  color?: string;
  text: string;
};

function Tooltip({ children, color, text }: Props): JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (tooltipRef.current && wrapperRef.current) {
      const { x, y } = wrapperRef.current.getBoundingClientRect();

      tooltipRef.current.style.left = `${e.clientX - x + 10}px`;
      tooltipRef.current.style.top = `${e.clientY - y + 10}px`;
    }
  };

  return (
    <S.Container
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      ref={wrapperRef}
    >
      {children}
      <S.TooltipTip color={color} visible={visible} ref={tooltipRef}>
        <S.TooltipText>{text}</S.TooltipText>
      </S.TooltipTip>
    </S.Container>
  );
}

Tooltip.defaultProps = {
  color: null,
};

export default Tooltip;
