import React, { useEffect, useCallback, useState } from "react";
import { useNetwork } from "hooks/useNetwork";
import DonationTokenAbi from "utils/abis/DonationToken.json";
import RibonAbi from "utils/abis/RibonAbi.json";
import useContractBalance from "hooks/apiHooks/useContractBalance";
import useIntegrations from "hooks/apiTheGraphHooks/useIntegrations";
import { useContract } from "hooks/useContract";
import { formatFromWei } from "lib/web3Helpers/etherFormatters";
import Chart from "chart.js";
import * as S from "./styles";

function TreasurePage(): JSX.Element {
  const [assignedValue, setAssignedValue] = useState<any>(0);
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
      const integrations = await getAllIntegrations();
      const assignedAmount = integrations.integrations
        .map((item: any) => parseFloat(formatFromWei(item.balance)))
        .reduce((prev: any, curr: any) => prev + curr, 0);
      setAssignedValue(assignedAmount);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    contract?.on("PoolBalanceIncreased", () => {
      fetchContractBalance();
    });
    fecthAssignedBalance();
  }, []);

  return (
    <S.Container>
      <S.Title>Treasure Dashboard</S.Title>
      <S.Card>
        Donation Treasure balance (USDC): {contractBalance}
        <S.Subtitle>Assigned (USDC): {assignedValue}</S.Subtitle>
        {contractBalance && (
          <S.Subtitle>
            Unassigned (USDC) {parseFloat(contractBalance) - assignedValue}
          </S.Subtitle>
        )}
      </S.Card>
    </S.Container>
  );
}

export default TreasurePage;
