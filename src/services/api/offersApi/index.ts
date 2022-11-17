import { AxiosResponse } from "axios";
import Offer from "types/entities/Offer";
import { apiGet, apiGetWithParams } from "..";

type OffersParams = {
  perPage?: number;
  page?: number;
};

const offersApi = {
  getOffersList: ({
    perPage = 10,
    page = 3,
  }: OffersParams): Promise<AxiosResponse<Offer[]>> =>
    apiGetWithParams("givings/offers_manager", {
      params: {
        per_page: perPage,
        page,
      },
    }),
  getOffer: (id: string): Promise<AxiosResponse<Offer>> =>
    apiGet(`offers/${id}`),
};

export default offersApi;
