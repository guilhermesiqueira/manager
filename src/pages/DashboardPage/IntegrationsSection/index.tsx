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
  const [allIntegrations, setAllIntegrations] = useState<any[]>([]);

  const contract = useContract({
    address: currentNetwork.ribonContractAddress,
    ABI: RibonAbi.abi,
  });

  const fetchIntegrationsAmounts = useCallback(async () => {
    try {
      const integrations = await getAllIntegrations();
      setAllIntegrations(integrations.integrations);
      console.log(allIntegrations);
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

  // const integrationsArray = [{ id: 1, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
  // { id: 2, name: "ME poupe", type: "Assigned (USDC)", value: "0989.999,00" },
  // { id: 3, name: "Dobra", type: "Assigned (USDC)", value: "228.412,00" },
  // { id: 4, name: "Dinheiro na nota", type: "Assigned (USDC)", value: "99.999,00" },
  // { id: 5, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
  // { id: 6, name: "ME poupe", type: "Assigned (USDC)", value: "999.999,00" },
  // ]

  return (
    <Grid
      maxH="600px"
      marginLeft="264px"
      overflowY="auto"
      fontFamily="Inter"
      templateColumns="repeat(4, 176px)"
      gridAutoRows="max-content"
      gap="8px">

      {allIntegrations
        .sort((a, b) => b.balance - a.balance)
        .reverse()
        .map(integration => (
          <IntegrationCard
            key={integration.id}
            title={integration.name? integration.name : "Nome da integração"}
            subtitle={t("subtitle")}
            value={formatFromWei(integration.balance)} />
        ))}
    </Grid>
  )
}
export default IntegrationsSection;
