import { AxiosResponse } from "axios";
import BigDonor from "types/entities/BigDonor";
import { apiGet, apiPost } from "..";

const bigDonorsApi = {
  getBigDonorsList: (): Promise<AxiosResponse<BigDonor[]>> =>
    apiGet("big_donors"),
  createBigDonor: (data: BigDonor): Promise<AxiosResponse<BigDonor>> =>
    apiPost("big_donors", data),
};

export default bigDonorsApi;
