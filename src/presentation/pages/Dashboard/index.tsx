import { Grid, Heading } from "@chakra-ui/react";
import IntegrationCard from "presentation/components/atomics/Cards/IntegrationCard";

const integrationsArray = [{ id: 1, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
{ id: 2, name: "ME poupe", type: "Assigned (USDC)", value: "989.999,00" },
{ id: 3, name: "Dobra", type: "Assigned (USDC)", value: "228.412,00" },
{ id: 4, name: "Dinheiro na nota", type: "Assigned (USDC)", value: "99.999,00" },
{ id: 5, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
{ id: 6, name: "ME poupe", type: "Assigned (USDC)", value: "999.999,00" }]

function DashboardPage(): JSX.Element {
  return (
    <>
      <Heading fontFamily="Inter" fontSize="4xl" display="block">Treasure Dashboard</Heading>
      <Grid fontFamily="Inter" templateColumns="repeat(4, 1fr)" gap="8px" bgColor='white' gridAutoFlow="row">
        {integrationsArray
        .sort((a, b) => parseInt(b.value.replaceAll(",", ""), 10) - parseInt(a.value.replaceAll(",", ""), 10))
        .map(integration => (
          <IntegrationCard
            key={integration.id}
            title={integration.name}
            subtitle={integration.type}
            value={integration.value} />
        ))}
      </Grid>
    </>
  )
}
export default DashboardPage;
