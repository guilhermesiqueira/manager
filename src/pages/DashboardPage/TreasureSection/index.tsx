import { useEffect, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNetwork } from "hooks/useNetwork";
import DonationTokenAbi from "utils/abis/DonationToken.json";
import RibonAbi from "utils/abis/RibonAbi.json";
import moneyFormatter from "lib/moneyFormatter";
import { logError } from "services/crashReport";
import useCauses from "hooks/apiHooks/useCauses";
import usePools from "hooks/apiTheGraphHooks/usePools";
import useContractBalance from "hooks/apiHooks/useContractBalance";
import useIntegrations from "hooks/apiTheGraphHooks/useIntegrations";
import { useContract } from "hooks/useContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import Pool from "types/entities/Pool";
import Cause from "types/entities/Cause";
import { formatFromDecimals } from "lib/web3Helpers/etherFormatters";
import theme from "styles/theme";
import CardTextGraph from "components/moleculars/cards/CardTextGraph";
import * as S from "./styles";

function TreasureSection(): JSX.Element {
  const [assignedValue, setAssignedValue] = useState<number>(0);
  const [causes, setCauses] = useState<Cause[]>([]);
  const { getAllPools } = usePools();
  const [pools, setPools] = useState<Pool[]>([]);
  const { getCauses } = useCauses();
  const { currentNetwork } = useNetwork();
  const { getAllIntegrations } = useIntegrations();
  const { tokenDecimals } = useTokenDecimals();
  const { t } = useTranslation("translation", {
    keyPrefix: "dashboard.treasureDashboard.treasureSection",
  });

  const donationTokenContract = useContract({
    address: currentNetwork.donationTokenContractAddress,
    ABI: DonationTokenAbi.abi,
  });

  const contract = useContract({
    address: currentNetwork.ribonContractAddress,
    ABI: RibonAbi.abi,
  });

  const { contractBalance, refetch: fetchContractBalance } = useContractBalance(
    donationTokenContract,
    currentNetwork.defaultPoolAddress,
  );

  const fetchAssignedBalance = useCallback(async () => {
    try {
      const allIntegrations = await getAllIntegrations();
      const assignedAmount = allIntegrations.integrations
        .map((item: any) => formatFromDecimals(item.balance, tokenDecimals))
        .reduce((prev: any, curr: any) => prev + curr, 0);
      setAssignedValue(assignedAmount);
    } catch (e) {
      logError(e);
    }
  }, [contractBalance, getAllIntegrations]);

  const fetchCauses = useCallback(async () => {
    try {
      const allCauses = await getCauses();
      setCauses(allCauses);
    } catch (e) {
      logError(e);
    }
  }, [setCauses]);

  const fetchPools = useCallback(async () => {
    try {
      const poolsData = await getAllPools();

      setPools(poolsData.pools);
    } catch (e) {
      logError(e);
    }
  }, []);

  useEffect(() => {
    fetchCauses();
    fetchPools();
  }, [fetchCauses, fetchPools]);

  useEffect(() => {
    contract?.on("PoolBalanceIncreased", () => {
      fetchContractBalance();
    });
  }, []);

  function renderGraph() {
    fetchAssignedBalance();
    const labels = causes.map((item) => item.name);

    const data = {
      labels,
      datasets: [
        {
          data: pools.map((pool: any) => pool.balance),
          backgroundColor: theme.colors.green30,
          borderColor: theme.colors.green30,
          label: "Causes",
          borderRadius: 4,
        },
      ],
    };
    return data;
  }

  return (
    <S.Container>
      <CardTextGraph
        data={renderGraph()}
        causes={causes}
        pools={pools}
        title={t("mainText")}
        leftText={t("causesTitle")}
        treasureBalance={moneyFormatter(assignedValue)}
      />
    </S.Container>
  );
}

export default TreasureSection;
