import { AxiosResponse } from "axios";
import Cause from "types/entities/Cause";
import { apiGetWithParams } from "..";

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
};

export default causesApi;
