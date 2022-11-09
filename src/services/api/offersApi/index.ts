import { AxiosResponse } from "axios";
import Offer from "types/entities/Offer";
import { apiGetWithParams } from "..";

type OffersParams = {
  perPage?: number;
  page?: number;
};

const offersApi = {
  getOffersList: ({
    perPage = 10,
    page = 3,
  }: OffersParams): Promise<AxiosResponse<Offer[]>> =>
    apiGetWithParams("givings/offers", {
      params: {
        per_page: perPage,
        page,
      },
    }),
};

export default offersApi;
