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
import { formatFromDecimals } from "lib/web3Helpers/etherFormatters";
import Cause from "types/entities/Cause";
import * as S from "./styles";

export type Props = {
  data: any;
  causes: Cause[];
  pools: any[];
  title: string;
  leftText: string;
  treasureBalance: any;
};

function CardTextGraph({
  data,
  causes,
  pools,
  title,
  leftText,
  treasureBalance,
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

  const handleBalance = (address: string) => {
    const pool: any = pools?.find((p) => p.id === address.toLowerCase());
    if (pool) {
      return moneyFormatter(formatFromDecimals(Number(pool.balance)));
    }
    return 0;
  };

  return (
    <S.Container>
      <S.MainText>{title}</S.MainText>
      <S.MainValue>{treasureBalance}</S.MainValue>
      <S.TreasureTitle>{leftText}</S.TreasureTitle>
      <S.Graph data={data} options={options} />
      <S.CausesSection>
        {causes.map((cause: any) => (
          <S.CauseCard key={cause.id}>
            <S.CauseTitle>{cause.name} (USDC)</S.CauseTitle>
            <S.CauseValue>
              {handleBalance(
                cause?.pools[0] !== undefined ? cause?.pools[0].address : "",
              )}
            </S.CauseValue>
          </S.CauseCard>
        ))}
      </S.CausesSection>
    </S.Container>
  );
}

export default CardTextGraph;
