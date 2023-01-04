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
import { useContract } from "hooks/useContract";
import { useNetwork } from "hooks/useNetwork";
import useTokenDecimals from "hooks/useTokenDecimals";
import { formatFromDecimals } from "lib/web3Helpers/etherFormatters";
import { useCallback, useEffect, useState } from "react";
import { logError } from "services/crashReport";
import Cause from "types/entities/Cause";
import DonationTokenAbi from "utils/abis/DonationToken.json";
import theme from "styles/theme";
import * as S from "./styles";

export type Props = {
  causes: Cause[];
  pools: any[];
  title: string;
  leftText: string;
  treasureBalance: any;
};

function CardTextGraph({
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

  const [poolsBalance, setPoolsBalance] = useState<any[]>([]);
  const { currentNetwork } = useNetwork();

  const donationTokenContract = useContract({
    address: currentNetwork.donationTokenContractAddress,
    ABI: DonationTokenAbi.abi,
  });

  const { tokenDecimals } = useTokenDecimals();

  const fetchAssignedBalance = useCallback(async () => {
    try {
      const balance: any = [];
      await pools.map(async (item: any) => {
        const contractBalance = await donationTokenContract?.balanceOf(item.id);
        const usdc = formatFromDecimals(contractBalance, tokenDecimals);
        balance.push({ id: item.id, balance: usdc });
        setPoolsBalance(balance);
      });
    } catch (e) {
      logError(e);
    }
  }, [pools]);

  const handleBalance = (address: string) => {
    const pool: any = pools?.find((p) => p.id === address.toLowerCase());
    if (pool) {
      return poolsBalance?.find((p: any) => p.id === address.toLowerCase())
        ?.balance;
    }
    return 0;
  };

  function renderGraph() {
    const labels = causes.map((item) => item.name);

    const data = {
      labels,
      datasets: [
        {
          data: causes.map((item: any) =>
            handleBalance(
              item?.pools[0] !== undefined ? item?.pools[0].address : "",
            ),
          ),
          backgroundColor: theme.colors.green30,
          borderColor: theme.colors.green30,
          label: "Causes",
          borderRadius: 4,
        },
      ],
    };
    return data;
  }

  useEffect(() => {
    fetchAssignedBalance();
  }, [pools]);

  return (
    <S.Container>
      <S.MainText>{title}</S.MainText>
      <S.MainValue>{treasureBalance}</S.MainValue>
      <S.TreasureTitle>{leftText}</S.TreasureTitle>
      <S.Graph data={renderGraph()} options={options} />
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
