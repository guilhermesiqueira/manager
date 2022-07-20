import React, { useEffect, useCallback, useState } from "react";
import { useNetwork } from "hooks/useNetwork";
import DonationTokenAbi from "utils/abis/DonationToken.json";
import RibonAbi from "utils/abis/RibonAbi.json";
import useContractBalance from "hooks/apiHooks/useContractBalance";
import useIntegrations from "hooks/apiTheGraphHooks/useIntegrations";
import { useContract } from "hooks/useContract";
import { formatFromWei } from "lib/web3Helpers/etherFormatters";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import theme from "styles/theme";
import * as S from "./styles";

function TreasureSection(): JSX.Element {
  const [assignedValue, setAssignedValue] = useState<any>(0);
  const [unassignedValue, setUnassignedValue] = useState<any>(0);
  const { currentNetwork } = useNetwork();
  const { getAllIntegrations } = useIntegrations();

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
    currentNetwork.ribonContractAddress,
  );

  const fecthAssignedBalance = useCallback(async () => {
    try {
      const integrationss = await getAllIntegrations();
      const assignedAmount = integrationss.integrations
        .map((item: any) => parseFloat(formatFromWei(item.balance)))
        .reduce((prev: any, curr: any) => prev + curr, 0);
      setAssignedValue(assignedAmount);
      if (contractBalance) {
        setUnassignedValue(parseFloat(contractBalance) - assignedValue);
      }
    } catch (e) {
      console.log(e);
    }
  }, [contractBalance, getAllIntegrations]);

  useEffect(() => {
    contract?.on("PoolBalanceIncreased", () => {
      fetchContractBalance();
    });
  }, []);

  ChartJS.register(ArcElement, Tooltip, Legend);

  function renderGraph() {
    fecthAssignedBalance();
    const data = {
      labels: ["Assigned", "Unassigned"],
      datasets: [
        {
          data: [assignedValue, unassignedValue],
          backgroundColor: [theme.colors.ribonBlue, theme.colors.lightGray],
          borderColor: [theme.colors.ribonBlue, theme.colors.lightGray],
        },
      ],
    };
    return <Pie data={data} />;
  }

  return (
    <S.Container>
      <S.Card>
        Donation Treasure balance (USDC): {contractBalance}
        <S.Subtitle>Assigned (USDC): {assignedValue}</S.Subtitle>
        <S.Subtitle>Unassigned (USDC) {unassignedValue}</S.Subtitle>
        {renderGraph()}
      </S.Card>
    </S.Container>
  );
}

export default TreasureSection;
