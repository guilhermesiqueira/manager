import { useContractRequest } from "hooks/useContractRequest";
import { Contract } from "@ethersproject/contracts";
import { formatFromDecimals } from "lib/web3Helpers/etherFormatters";
import { useCallback, useEffect, useState } from "react";
import useTokenDecimals from "hooks/useTokenDecimals";

function useContractBalance(contract: Contract | null, address: string) {
  const [contractBalance, setContractBalance] = useState(0);
  const { tokenDecimals } = useTokenDecimals();

 const { data, isLoading, refetch } = useContractRequest<number>({
    key: `contractBalance${address}`,
    fetchMethod: () => contract?.balanceOf(address),
  });

  const setFormattedBalance = useCallback(async () => {
    if (data) {
      setContractBalance(formatFromDecimals(data, tokenDecimals));
    }
  }, [data, tokenDecimals]);
  
  useEffect(() => {
    setFormattedBalance();
  }, [setFormattedBalance, contract]);

  return { contractBalance, isLoading, refetch, tokenDecimals };
}

export default useContractBalance;