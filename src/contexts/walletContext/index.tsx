import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  checkConnectionRequest,
  connectWalletRequest,
} from "lib/walletConnector";
import { useTranslation } from "react-i18next";
import { useToast } from "@chakra-ui/react";
import { utils } from "ethers";
import { networks } from "config/networks";

export interface IWalletContext {
  wallet: string | null;
  checkIfWalletIsConnected: () => void;
  connectWallet: () => void;
  changeNetwork: () => void;
  setWallet: Dispatch<SetStateAction<string | null>>;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const WalletContext = createContext<IWalletContext>(
  {} as IWalletContext,
);

function WalletProvider({ children }: Props) {
  const [wallet, setWallet] = useState<string | null>(null);
  const toast = useToast();
  const { t } = useTranslation("translation", {
    keyPrefix: "contexts.walletContext",
  });

  const checkIfWalletIsConnected = useCallback(async () => {
    const checkConnectionRequestResponse = await checkConnectionRequest();
    setWallet(checkConnectionRequestResponse);
  }, []);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [checkIfWalletIsConnected]);

  const addNetwork = useCallback(async () => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainName: networks[0].chainName,
            chainId: utils.hexValue(networks[0].chainId),
            nativeCurrency: {
              name: networks[0].currencyName,
              decimals: 18,
              symbol: networks[0].symbolName,
            },
            rpcUrls: [networks[0].rpcUrls],
          },
        ],
      });
    } catch (err: any) {
      if (err.code === 4001) {
        toast({
          status: "error",
          description: t("invalidNetworkMessage"),
        });
      }
    }
  }, []);

  const changeNetwork = useCallback(async () => {
    const permittedNetworks = networks.filter(
      (network) =>
        window.ethereum.networkVersion === network.chainId.toString(),
    );
    if (permittedNetworks.length === 0) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: utils.hexValue(networks[0].chainId) }],
        });
      } catch (err: any) {
        if (err.code === 4902) {
          await addNetwork();
        }
        if (err.code === 4001) {
          toast({
            status: "error",
            description: t("invalidNetworkMessage"),
          });
        }
      }
    }
  }, []);

  const connectWallet = useCallback(async () => {
    const connectWalletResponse = await connectWalletRequest({
      onEthereumNotFound: () => {
        toast({
          status: "error",
          description: t("ethereumNotFoundMessage"),
        });
      },
      onUserRejectedConnection: () => {
        toast({
          status: "error",
          description: t("userRejectedConnectionMessage"),
        });
      },
      onError: () => {
        toast({ status: "error", description: t("onErrorMessage") });
      },
    });
    setWallet(connectWalletResponse);
    await changeNetwork();
  }, []);

  const walletObject: IWalletContext = useMemo(
    () => ({
      wallet,
      checkIfWalletIsConnected,
      connectWallet,
      changeNetwork,
      setWallet,
    }),
    [wallet, checkIfWalletIsConnected, connectWallet, changeNetwork],
  );

  return (
    <WalletContext.Provider value={walletObject}>
      {children}
    </WalletContext.Provider>
  );
}

export default WalletProvider;

export const useWalletContext = () => {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error("useWallet must be used within WalletProvider");
  }

  return context;
};
