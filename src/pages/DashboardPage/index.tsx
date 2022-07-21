import { useTranslation } from "react-i18next";
import { Flex, Grid } from "@chakra-ui/react";
import IntegrationCard from "assets/atomics/Cards/IntegrationCard";
import TreasureSection from "./TreasureSection";
import * as S from "./styles";

const integrationsArray = [{ id: 1, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
{ id: 2, name: "ME poupe", type: "Assigned (USDC)", value: "0989.999,00" },
{ id: 3, name: "Dobra", type: "Assigned (USDC)", value: "228.412,00" },
{ id: 4, name: "Dinheiro na nota", type: "Assigned (USDC)", value: "99.999,00" },
{ id: 5, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
{ id: 6, name: "ME poupe", type: "Assigned (USDC)", value: "999.999,00" },
]

function DashboardPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "dashboard.treasureDashboard",
  });

  function removeDotComma(str: string) {
    return str.replaceAll(",", "").replaceAll(".", "")
  }

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>

      <Flex width="1000px" alignContent="space-between" >
        <TreasureSection />
        <Grid maxH="600px" marginLeft="80px" overflowY="auto" fontFamily="Inter" templateColumns="repeat(4, 176px)" gridAutoRows="max-content" gap="8px" bgColor='white'>
          {integrationsArray
            .sort((a, b) => parseInt(removeDotComma(b.value), 10) - parseInt(removeDotComma(a.value), 10))
            .reverse()
            .map(integration => (
              <IntegrationCard
                key={integration.id}
                title={integration.name}
                subtitle={integration.type}
                value={integration.value} />
            ))}
        </Grid>
      </Flex>
    </S.Container>
  )
}
export default DashboardPage;
