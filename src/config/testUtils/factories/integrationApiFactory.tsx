import Integration from "types/entities/Integration";

function integrationApiFactory(params: Partial<Integration> = {}): Integration {
  const defaultValues: Integration = {
    id: 1,
    name: "Integration 1",
    integrationWallet: {
      publicKey: "0x1234567890123456789012345678901234567890",
    },
    uniqueAddress: "1234567890123456789012345678901234567890",
    integrationAddress: "https://dapp.ribon.io/integration/uuid",
    status: "active",
    ticketAvailabilityInMinutes: 30,
    created_at: "2020-01-01T00:00:00.000Z",
    updated_at: "2020-01-01T00:00:00.000Z",
    integrationTasksAttributes: [
      {
        description: "Faça uma compra",
        link: "Comprar",
        linkAddress: "https://renner.com",
      },
    ],
    integrationTasks: [
      {
        description: "Faça uma compra",
        link: "Comprar",
        linkAddress: "https://renner.com",
      },
    ],
  };
  return Object.assign(defaultValues, params) as Integration;
}

export default integrationApiFactory;
