import { SimpleGrid } from "@chakra-ui/react";
import IntegrationCard from "presentation/components/atomics/Cards/IntegrationCard";

function DashboardPage(): JSX.Element {
  return (
    <>
      <h1>dashboard</h1>
      <SimpleGrid fontFamily='Inter' columns={4} gap='8px' bgColor='white' >
        <IntegrationCard />
        <IntegrationCard />
        <IntegrationCard />
        <IntegrationCard />
        <IntegrationCard />
        <IntegrationCard />
      </SimpleGrid>
    </>
  )
}
export default DashboardPage;
