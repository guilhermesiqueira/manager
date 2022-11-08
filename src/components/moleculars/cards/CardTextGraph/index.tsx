import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moneyFormatter from "lib/moneyFormatter";
import * as S from "./styles";

export type Props = {
  data: any;
  title: string;
  mainText: string | null;
  leftText: string;
  rightSecondaryText: any;
};

function CardTextGraph({
  data,
  title,
  mainText = "mainText",
  leftText,
  rightSecondaryText,
}: Props): JSX.Element {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  );

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <S.Container>
      <S.MainText>{title}</S.MainText>
      <S.MainValue>{rightSecondaryText}</S.MainValue>
      <S.TreasureTitle>{leftText}</S.TreasureTitle>
      <S.Graph data={data} options={options} />
      <S.CausesSection>
        <S.CauseCard>
          <S.CauseTitle>Sustentabilidade (USDC)</S.CauseTitle>
          <S.CauseValue>{moneyFormatter(62662486)}</S.CauseValue>
        </S.CauseCard>
        <S.CauseCard>
          <S.CauseTitle>Educação (USDC)</S.CauseTitle>
          <S.CauseValue>{moneyFormatter(62662486)}</S.CauseValue>
        </S.CauseCard>
        <S.CauseCard>
          <S.CauseTitle>Animais (USDC)</S.CauseTitle>
          <S.CauseValue>{moneyFormatter(62662486)}</S.CauseValue>
        </S.CauseCard>
        <S.CauseCard>
          <S.CauseTitle>Animais (USDC)</S.CauseTitle>
          <S.CauseValue>{moneyFormatter(62662486)}</S.CauseValue>
        </S.CauseCard>
        <S.CauseCard>
          <S.CauseTitle>Animais (USDC)</S.CauseTitle>
          <S.CauseValue>{moneyFormatter(62662486)}</S.CauseValue>
        </S.CauseCard>
      </S.CausesSection>
    </S.Container>
  );
}

export default CardTextGraph;
