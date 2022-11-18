import Card from "components/moleculars/cards/Card";
import { useTranslation } from "react-i18next";
import theme from "styles/theme";
import useIntegrations from "hooks/apiTheGraphHooks/useIntegrations";
import { useCallback, useEffect, useState } from "react";
import { formatFromWei } from "lib/web3Helpers/etherFormatters";
import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import { logError } from "services/crashReport";
import { useProvider } from "hooks/useProvider";
import { ethers } from "ethers";
import { RIBON_INTEGRATION_ID } from "utils/constants";
import * as S from "./styles";

function WalletCard(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "dashboard.walletDashboard",
  });
  const { green20 } = theme.colors;
  const { getIntegration } = useIntegrations();
  const { fetchWalletFromIntegration } = useApiIntegrations();
  const [integrationBalance, setIntegrationBalance] = useState<string>("...");
  const [integrationMatic, setIntegrationMatic] = useState<string>("...");
  const provider = useProvider();

  const fetchBalance = useCallback(async () => {
    try {
      const walletAddress = await fetchWalletFromIntegration(
        RIBON_INTEGRATION_ID,
      );
      if (walletAddress) {
        const chainIntegration = await getIntegration(walletAddress);
        setIntegrationBalance(
          formatFromWei(chainIntegration?.integrations[0].balance),
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
      <S.Value color={green20}>{integrationMatic}</S.Value>
    </Card>
  );
}

export default WalletCard;
