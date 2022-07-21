import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import * as S from "./styles";

export type Props = {
  data: any;
  title: string;
  mainText: string | null;
  rightText: string;
  leftText: string;
  rightSecondaryText: any;
  leftSecondaryText: any;
};

function CardTextGraph({
  data,
  title,
  mainText = "mainText",
  rightText,
  leftText,
  rightSecondaryText,
  leftSecondaryText,
}: Props): JSX.Element {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <S.Container>
      <S.MainText>
        {title}
        <S.MainValue>{mainText}</S.MainValue>
      </S.MainText>

      <S.SecondaryText>
        {rightText}
        <S.SecondaryLeftValue>{rightSecondaryText}</S.SecondaryLeftValue>
      </S.SecondaryText>
      <S.SecondaryText>
        {leftText}
        <S.SecondaryRightValue>{leftSecondaryText}</S.SecondaryRightValue>
      </S.SecondaryText>

      <S.Graph data={data} />
    </S.Container>
  );
}

export default CardTextGraph;
