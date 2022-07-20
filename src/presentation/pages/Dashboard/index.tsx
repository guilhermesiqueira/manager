import { Box, Grid, Heading } from "@chakra-ui/react";
import IntegrationCard from "presentation/components/atomics/Cards/IntegrationCard";

const integrationsArray = [{ id: 1, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
{ id: 2, name: "ME poupe", type: "Assigned (USDC)", value: "0989.999,00" },
{ id: 3, name: "Dobra", type: "Assigned (USDC)", value: "228.412,00" },
{ id: 4, name: "Dinheiro na nota", type: "Assigned (USDC)", value: "99.999,00" },
{ id: 5, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
{ id: 6, name: "ME poupe", type: "Assigned (USDC)", value: "999.999,00" },
]

function DashboardPage(): JSX.Element {
  function removeDotComma(str: string) {
    return str.replaceAll(",", "").replaceAll(".", "")
  }
  return (
    <Box display="flex" flexDir="column">
      <Heading margin="84px" fontFamily="Inter" fontSize="4xl" display="block">Treasure Dashboard</Heading>
      <Grid maxH="600px" w="100%" marginLeft="8px" overflowY="auto" fontFamily="Inter" templateColumns="repeat(4, 176px)" gridAutoRows="max-content" gap="8px" bgColor='white'>
        {integrationsArray
          .sort((a, b) => parseInt(removeDotComma(b.value), 10) - parseInt(removeDotComma(a.value), 10))
          .map(integration => (
            <IntegrationCard
              key={integration.id}
              title={integration.name}
              subtitle={integration.type}
              value={integration.value} />
          ))}
      </Grid>
    </Box>
  )
}
export default DashboardPage;
