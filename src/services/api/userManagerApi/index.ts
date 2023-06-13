import { AxiosResponse } from "axios";
import { apiPost } from "..";

interface Data {
  idToken: string;
}

const userManagerApi = {
  postUserManager: (data: Data, config: any): Promise<AxiosResponse<any>> =>
    apiPost("auth/request", { data }, config),
  postPasswordAuthManager: (
    email: string,
    password: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("auth/password", { email, password }),
  postRefreshToken: (refreshToken: string): Promise<AxiosResponse<any>> =>
    apiPost("auth/refresh_token", { refreshToken }),
};

export default userManagerApi;
