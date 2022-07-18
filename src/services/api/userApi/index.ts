import { AxiosResponse } from "axios";
import User from "types/entities/user";
import { apiPost } from "..";

const usersApi = {
  postCreateUser: (email: string): Promise<AxiosResponse<User>> =>
    apiPost("users", { email }),

  postSearchUser: (email: string): Promise<AxiosResponse<User>> =>
    apiPost("users/search", { email }),
};

export default usersApi;
