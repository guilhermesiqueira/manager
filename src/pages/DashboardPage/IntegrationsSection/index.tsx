import { useTranslation } from "react-i18next";
import { Grid } from "@chakra-ui/react";
import IntegrationCard from "assets/atomics/Cards/IntegrationCard";
import { useCallback, useEffect, useState } from "react";
import useIntegrations from "hooks/apiTheGraphHooks/useIntegrations";
import { formatFromWei } from "lib/web3Helpers/etherFormatters";
import { logError } from "services/crashReport";
import { useContract } from "hooks/useContract";
import { useNetwork } from "hooks/useNetwork";
import RibonAbi from "utils/abis/RibonAbi.json";

function IntegrationsSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "dashboard.treasureDashboard.integrationsSection",
  });
  const { currentNetwork } = useNetwork();
  const { getAllIntegrations } = useIntegrations();
  const [integrationsFromApi, setIntegrationsFromApi] = useState<any[]>([]);
  const [allIntegrations, setAllIntegrations] = useState<any[]>([]);

  const contract = useContract({
    address: currentNetwork.ribonContractAddress,
    ABI: RibonAbi.abi,
  });

  const fetchIntegrations = useCallback(async () => {
    try {
      const integrations = await getAllIntegrations();
      setIntegrationsFromApi(integrations);
      console.log("entrou")
    } catch (e) {
      logError(e);
    }
  }, [integrationsFromApi]);

  useEffect(() => {
    fetchIntegrations();
    console.log(integrationsFromApi)
  }, []);

  const fetchIntegrationsAmounts = useCallback(async () => {
    try {
      const integrations = await getAllIntegrations();
      setAllIntegrations(integrations.integrations);
    } catch (e) {
      logError(e);
    }
  }, [getAllIntegrations]);

  useEffect(() => {
    fetchIntegrationsAmounts();
    contract?.on("PoolBalanceIncreased", () => {
      fetchIntegrationsAmounts();
    });
  }, []);

  return (
    <Grid
      maxH="600px"
      marginLeft="264px"
      overflowY="auto"
      fontFamily="Inter"
      templateColumns="repeat(4, 176px)"
      gridAutoRows="max-content"
      gap="8px"
    >
      {allIntegrations
        .sort((a, b) => b.balance - a.balance)
        .reverse()
        .map((integration) => (
          <IntegrationCard
            key={integration.id}
            title={integration.name ? integration.name : "Nome da integração"}
            subtitle={t("subtitle")}
            value={formatFromWei(integration.balance)}
          />
        ))}
    </Grid>
  );
}
export default IntegrationsSection;
