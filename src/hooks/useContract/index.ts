import { Contract } from "@ethersproject/contracts";
import { useMemo } from "react";
import { getContract } from "utils/contractUtils";
import { useNetwork } from "hooks/useNetwork";
import { Web3Provider, JsonRpcProvider } from "@ethersproject/providers";
import { logError } from "services/crashReport";

type Props = {
  address: string;
  ABI: any;
};

export function useContract<T extends Contract = Contract>({
  address,
  ABI,
}: Props): T | null {
  const { currentNetwork } = useNetwork();
  return useMemo(() => {
    if (!address || !ABI) return null;
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new Web3Provider(ethereum);
        const signer = provider.getSigner();
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
