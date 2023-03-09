import { AxiosResponse } from "axios";
import { CreateAuthor } from "types/apiResponses/author";
import Author from "types/entities/Author";
import { apiPost, apiPut, apiGetWithParams, apiGet } from "..";

type AuthorsList = {
  perPage?: number;
  page?: number;
};

const authorsApi = {
  getAuthorsList: ({
    perPage = 1000,
    page = 1,
  }: AuthorsList): Promise<AxiosResponse<Author[]>> =>
    apiGetWithParams("news/authors", {
      per: perPage,
      page,
    }),
  getAuthor: (id: any): Promise<AxiosResponse<Author>> =>
    apiGet(`news/authors/${id}`),
  createAuthor: (data: any): Promise<AxiosResponse<CreateAuthor>> =>
    apiPost("news/authors", data),
  updateAuthor: (id: any, data: CreateAuthor): Promise<AxiosResponse<Author>> =>
    apiPut(`news/authors/${id}`, data),
};

export default authorsApi;
