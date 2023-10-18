import { AxiosResponse } from "axios";
import ImpressionCard from "types/entities/ImpressionCard";
import { apiGet, apiPost, apiPut } from "..";

const impressionCardsApi = {
  getImpressionCardsList: (): Promise<AxiosResponse<ImpressionCard>> =>
    apiGet("impression_cards"),
  getImpressionCard: (id: any): Promise<AxiosResponse<ImpressionCard>> =>
    apiGet(`impression_cards/${id}`),
  createImpressionCard: (data: any): Promise<AxiosResponse<ImpressionCard>> =>
    apiPost("impression_cards", data),
  updateImpressionCard: (
    id: any,
    data: ImpressionCard,
  ): Promise<AxiosResponse<ImpressionCard>> =>
    apiPut(`impression_cards/${id}`, data),
};

export default impressionCardsApi;
