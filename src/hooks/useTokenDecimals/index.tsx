import { useEffect, useState } from "react";
import DonationTokenAbi from "utils/abis/DonationToken.json";
import RibonAbi from "utils/abis/RibonAbi.json";
import { useContract } from "hooks/useContract";
import { useNetworkContext } from "contexts/networkContext";

function useTokenDecimals() {
  const [tokenDecimals, setTokenDecimals] = useState<number>();
  const { currentNetwork } = useNetworkContext();

  const donationTokenContract = useContract({
    address: currentNetwork.donationTokenContractAddress,
    ABI: DonationTokenAbi.abi,
  });

  const contract = useContract({
    address: currentNetwork.ribonContractAddress,
    ABI: RibonAbi.abi,
  });

  useEffect(() => {
    async function fetchDecimals() {
      const decimals = await donationTokenContract?.decimals();
      setTokenDecimals(decimals);
    }
    fetchDecimals();
  }, [contract]);

  return { tokenDecimals };
}

export default useTokenDecimals;
