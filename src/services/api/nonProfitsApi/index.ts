import { AxiosResponse } from "axios";
import NonProfit from "types/entities/NonProfit";
import { apiGet, apiGetWithParams } from "..";

type NonProfitsParams = {
  perPage?: number;
  page?: number;
};

const nonProfitsApi = {
  getNonProfitsList: ({
    perPage = 10,
    page = 1,
  }: NonProfitsParams): Promise<AxiosResponse<NonProfit[]>> =>
    apiGetWithParams("non_profits", {
      params: {
        per_page: perPage,
        page,
      },
    }),

  getNonProfit: (id: string): Promise<AxiosResponse<NonProfit>> =>
    apiGet(`non_profits/${id}`),
};

export default nonProfitsApi;
