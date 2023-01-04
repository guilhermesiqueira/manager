import React, { useEffect, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNetwork } from "hooks/useNetwork";
import DonationTokenAbi from "utils/abis/DonationToken.json";
import { logError } from "services/crashReport";
import useCauses from "hooks/apiHooks/useCauses";
import usePools from "hooks/apiTheGraphHooks/usePools";
import { useContract } from "hooks/useContract";
import Pool from "types/entities/Pool";
import Cause from "types/entities/Cause";
import { formatFromDecimals } from "lib/web3Helpers/etherFormatters";
import moneyFormatter from "lib/moneyFormatter";
import useTokenDecimals from "hooks/useTokenDecimals";
import CardTextGraph from "./CardTextGraph";
import * as S from "./styles";
import WalletCard from "./WalletCard";

function TreasureSection(): JSX.Element {
  const [assignedValue, setAssignedValue] = useState<number>(0);
  const [causes, setCauses] = useState<Cause[]>([]);
  const { getAllPools } = usePools();
  const [pools, setPools] = useState<Pool[]>([]);
  const { getCauses } = useCauses();
  const { currentNetwork } = useNetwork();
  const { t } = useTranslation("translation", {
    keyPrefix: "dashboard.treasureDashboard.treasureSection",
  });
  const { tokenDecimals } = useTokenDecimals();

  const donationTokenContract = useContract({
    address: currentNetwork.donationTokenContractAddress,
    ABI: DonationTokenAbi.abi,
  });

  const fetchCauses = async () => {
    try {
      const allCauses = await getCauses();
      setCauses(allCauses);
    } catch (e) {
      logError(e);
    }
  };

  const fetchPools = async () => {
    try {
      const poolsData = await getAllPools();
      setPools(poolsData.pools);
    } catch (e) {
      logError(e);
    }
  };

  const fetchAssignedBalance = useCallback(async () => {
    try {
      let assignedAmount = 0;
      await pools.map(async (item: any) => {
        const contractBalance = await donationTokenContract?.balanceOf(item.id);
        const usdc = formatFromDecimals(contractBalance, tokenDecimals);
        assignedAmount += usdc;
        setAssignedValue(assignedAmount);
      });
    } catch (e) {
      logError(e);
    }
  }, [pools]);

  useEffect(() => {
    fetchCauses();
    fetchPools();
  }, []);

  useEffect(() => {
    fetchAssignedBalance();
  }, [pools]);

  return (
    <S.Container>
      <CardTextGraph
        causes={causes}
        pools={pools}
        title={t("mainText")}
        leftText={t("causesTitle")}
        treasureBalance={moneyFormatter(assignedValue)}
      />
      <WalletCard />
    </S.Container>
  );
}

export default TreasureSection;
