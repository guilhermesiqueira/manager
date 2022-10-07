import IntegrationTask from "./IntegrationTask";
import IntegrationWallet from "./IntegrationWallet";

export default interface Integration {
  id?: number;
  name: string;
  integrationWallet?: IntegrationWallet;
  integrationAddress?: string;
  uniqueAddress?: string;
  status: string;
  logo?: any;
  webhookUrl?: string;
  ticketAvailabilityInMinutes: number | null;
  created_at?: string;
  updated_at?: string;
  integrationTasksAttributes?: IntegrationTask[];
  integrationTasks: IntegrationTask[];
  mobilityAttributes?: string[];
}
