import { AxiosResponse } from "axios";
import Cause from "types/entities/Cause";
import { apiGet, apiGetWithParams } from "..";

type CausesParams = {
  perPage?: number;
  page?: number;
};

const causesApi = {
  getCausesList: ({
    perPage = 10,
    page = 3,
  }: CausesParams): Promise<AxiosResponse<Cause[]>> =>
    apiGetWithParams("causes", {
      params: {
        per_page: perPage,
        page,
      },
    }),

  getCause: (id: string): Promise<AxiosResponse<Cause>> =>
    apiGet(`causes/${id}`),
};

export default causesApi;
