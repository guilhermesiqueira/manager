import { AxiosResponse } from "axios";
import { apiPost } from "..";

interface Data {
  idToken: string;
}

const userManagerApi = {
  postUserManager: (data: Data, config: any): Promise<AxiosResponse<any>> =>
    apiPost("auth/request", { data }, config),
};

export default userManagerApi;
