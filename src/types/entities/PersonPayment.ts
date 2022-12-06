import Offer from "./Offer";
import Person from "./Person";

export default interface PersonPayment {
  id: number;
  amountCents: number;
  cryptoAmount: number;
  paidDate: string;
  paymentMethod: string;
  status: string;
  externalId: string;
  offer: Offer;
  person: Person;
  external_id: string;
}
