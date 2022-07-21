import { useTranslation } from "react-i18next";
import { Grid } from "@chakra-ui/react";
import IntegrationCard from "assets/atomics/Cards/IntegrationCard";


function IntegrationsSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "dashboard.treasureDashboard.integrationsSection",
  });

  const integrationsArray = [{ id: 1, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
  { id: 2, name: "ME poupe", type: "Assigned (USDC)", value: "0989.999,00" },
  { id: 3, name: "Dobra", type: "Assigned (USDC)", value: "228.412,00" },
  { id: 4, name: "Dinheiro na nota", type: "Assigned (USDC)", value: "99.999,00" },
  { id: 5, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
  { id: 6, name: "ME poupe", type: "Assigned (USDC)", value: "999.999,00" },
  ]

  function removeDotComma(str: string) {
    return str.replaceAll(",", "").replaceAll(".", "")
  }

  return (
    <Grid
      maxH="600px"
      marginLeft="264px"
      overflowY="auto"
      fontFamily="Inter"
      templateColumns="repeat(4, 176px)"
      gridAutoRows="max-content"
      gap="8px">
        
      {integrationsArray
        .sort((a, b) => parseInt(removeDotComma(b.value), 10) - parseInt(removeDotComma(a.value), 10))
        .reverse()
        .map(integration => (
          <IntegrationCard
            key={integration.id}
            title={integration.name}
            subtitle={t("subtitle")}
            value={integration.value} />
        ))}
    </Grid>
  )
}
export default IntegrationsSection;
