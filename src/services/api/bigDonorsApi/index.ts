import { AxiosResponse } from "axios";
import BigDonor from "types/entities/BigDonor";
import { apiGet } from "..";

const bigDonorsApi = {
  getBigDonorsList: (): Promise<AxiosResponse<BigDonor[]>> =>
    apiGet("big_donors"),
};

export default bigDonorsApi;
