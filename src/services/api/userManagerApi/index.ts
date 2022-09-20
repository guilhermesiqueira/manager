import { AxiosResponse } from "axios";
import { apiPost } from "..";

const userManagerApi = {
  postUserManager: (data: any, config: any): Promise<AxiosResponse<any>> =>
    apiPost("manager/auth/request", { data }, config),
};

export default userManagerApi;
