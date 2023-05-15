import { AxiosResponse } from "axios";
import Pool from "types/entities/Pool";
import { apiGet } from "..";

const poolsApi = {
  getPools: (): Promise<AxiosResponse<Pool[]>> => apiGet("/pools"),
};

export default poolsApi;
