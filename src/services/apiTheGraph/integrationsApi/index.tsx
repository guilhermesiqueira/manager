import { ApolloQueryResult } from "@apollo/client";
import { client } from "..";
import {
  QUERY_ALL_INTEGRATIONS,
  QUERY_INTEGRATION_ID,
} from "../querys/integration";

export const integrationsApi = {
  fetchAllIntegrations: (): Promise<ApolloQueryResult<any>> =>
    client.query({
      query: QUERY_ALL_INTEGRATIONS,
      fetchPolicy: "no-cache",
    }),

  fetchIntegration: (integration: string): Promise<ApolloQueryResult<any>> =>
    client.query({
      query: QUERY_INTEGRATION_ID,
      variables: { integration },
      fetchPolicy: "no-cache",
    }),
};

export default integrationsApi;
