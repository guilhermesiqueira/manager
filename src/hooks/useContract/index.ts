import { Contract } from "@ethersproject/contracts";
import { useMemo } from "react";
import { getContract } from "utils/contractUtils";
import { Web3Provider, JsonRpcProvider } from "@ethersproject/providers";
import { logError } from "services/crashReport";
import { useNetworkContext } from "contexts/networkContext";

type Props = {
  address: string;
  ABI: any;
};

export function useContract<T extends Contract = Contract>({
  address,
  ABI,
}: Props): T | null {
  const { currentNetwork } = useNetworkContext();
  return useMemo(() => {
    if (!address || !ABI) return null;
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new Web3Provider(ethereum);
        const signer = provider.getSigner(
          "0x9F9241629E8C1FE2b466754843A629b675Dd36Ab",
        );
        return getContract(address, ABI, signer);
      }

      const provider = new JsonRpcProvider(currentNetwork.nodeUrl);

      return getContract(address, ABI, provider);
    } catch (error) {
      logError(error);
      return null;
    }
  }, [address, ABI]) as T;
}
