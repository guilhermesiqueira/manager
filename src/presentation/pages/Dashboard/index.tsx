import { SimpleGrid } from "@chakra-ui/react";
import IntegrationCard from "presentation/components/atomics/Cards/IntegrationCard";

const integrationsArray = [{ id: 1, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
{ id: 2, name: "ME poupe", type: "Assigned (USDC)", value: "999.999,00" },
{ id: 3, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
{ id: 4, name: "ME poupe", type: "Assigned (USDC)", value: "999.999,00" },
{ id: 5, name: "Dobra", type: "Assigned (USDC)", value: "128.412,00" },
{ id: 6, name: "ME poupe", type: "Assigned (USDC)", value: "999.999,00" }]

function DashboardPage(): JSX.Element {
  return (
    <>
      <h1>dashboard</h1>
      <SimpleGrid fontFamily='Inter' columns={4} gap='8px' bgColor='white' >
        {integrationsArray.map(integration => (
          <IntegrationCard
            key={integration.id}
            title={integration.name}
            subtitle={integration.type}
            value={integration.value} />
        ))}
      </SimpleGrid>
    </>
  )
}
export default DashboardPage;
