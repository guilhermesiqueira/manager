import Card from "components/moleculars/cards/Card";
import { useTranslation } from "react-i18next";
import theme from "styles/theme";
import useIntegrations from "hooks/apiTheGraphHooks/useIntegrations";
import { useCallback, useEffect, useState } from "react";
import { formatFromDecimals } from "lib/web3Helpers/etherFormatters";
import { logError } from "services/crashReport";
import { useProvider } from "hooks/useProvider";
import { ethers } from "ethers";
import { useNetworkContext } from "contexts/networkContext";
import * as S from "./styles";

function WalletCard(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "dashboard.walletDashboard",
  });
  const { primary } = theme.colors.brand;
  const { getIntegration } = useIntegrations();
  const [integrationBalance, setIntegrationBalance] = useState<string>("...");
  const [integrationMatic, setIntegrationMatic] = useState<string>("...");
  const provider = useProvider();
  const { currentNetwork } = useNetworkContext();

  const fetchBalance = useCallback(async () => {
    try {
      const walletAddress = currentNetwork.defaultIntegrationHolding;
      if (walletAddress) {
        const chainIntegration = await getIntegration(walletAddress);
        setIntegrationBalance(
          formatFromDecimals(
            chainIntegration?.integrationControllers[0].balance,
          ).toString(),
        );
        const matic = await provider?.getBalance(walletAddress);
        if (matic) {
          setIntegrationMatic(ethers.utils.formatEther(matic));
        }
      }
    } catch (e) {
      logError(e);
    }
  }, []);

  useEffect(() => {
    fetchBalance();
  });

  return (
    <Card title={t("title")}>
      <S.Title>{t("donationLimit")}</S.Title>
      <S.Value>{integrationBalance}</S.Value>
      <S.Title>{t("matic")}</S.Title>
      <S.Value color={primary[200]}>{integrationMatic}</S.Value>
    </Card>
  );
}

export default WalletCard;
