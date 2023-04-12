import { useTranslation } from "react-i18next";
import IntegrationCard from "components/moleculars/cards/IntegrationCard";
import { useCallback, useEffect, useState } from "react";
import useIntegrations from "hooks/apiTheGraphHooks/useIntegrations";
import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import { Link } from "react-router-dom";
import { formatFromWei } from "lib/web3Helpers/etherFormatters";
import { logError } from "services/crashReport";
import { useContract } from "hooks/useContract";
import RibonAbi from "utils/abis/RibonAbi.json";
import { useNetworkContext } from "contexts/networkContext";
import * as S from "./styles";

function IntegrationsSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "dashboard.treasureDashboard.integrationsSection",
  });
  const { currentNetwork } = useNetworkContext();
  const { getAllIntegrations } = useIntegrations();
  const { getAllApiIntegrations } = useApiIntegrations();
  const [apiIntegrations, setApiIntegrations] = useState<any>([]);
  const [blockchainIntegrations, setBlockchainIntegrations] = useState<any[]>(
    [],
  );

  const contract = useContract({
    address: currentNetwork.ribonContractAddress,
    ABI: RibonAbi.abi,
  });

  const fetchApiIntegrations = useCallback(async () => {
    try {
      const integrations = await getAllApiIntegrations();
      setApiIntegrations(integrations);
    } catch (e) {
      logError(e);
    }
  }, [apiIntegrations]);

  useEffect(() => {
    fetchApiIntegrations();
  }, []);

  const fetchBlockchainIntegrations = useCallback(async () => {
    try {
      const integrations = await getAllIntegrations();
      setBlockchainIntegrations(integrations.integrations);
    } catch (e) {
      logError(e);
    }
  }, [getAllIntegrations]);

  useEffect(() => {
    fetchBlockchainIntegrations();

    contract?.on("PoolBalanceIncreased", () => {
      fetchBlockchainIntegrations();
    });
  }, []);

  function getIntegrationName(id: any): string {
    const integration = apiIntegrations.find(
      (item: any) =>
        item?.integrationWallet?.publicKey.toLowerCase() ===
        id.toString().toLowerCase(),
    );
    return integration?.name;
  }

  function getIntegrationId(id: any): string {
    const integration = apiIntegrations.find(
      (item: any) =>
        item?.integrationWallet?.publicKey.toLowerCase() ===
        id.toString().toLowerCase(),
    );
    return integration?.id;
  }

  return (
    <S.Container>
      {blockchainIntegrations
        .sort((a, b) => b.balance - a.balance)
        .reverse()
        .map((integration) => (
          <Link
            to={`/integrations/${getIntegrationId(integration.id)}`}
            key={integration.id}
          >
            <IntegrationCard
              key={integration.id}
              title={getIntegrationName(integration.id)}
              subtitle={t("subtitle")}
              value={formatFromWei(integration.balance)}
            />
          </Link>
        ))}
    </S.Container>
  );
}
export default IntegrationsSection;
