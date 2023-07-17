import BigDonor from "./BigDonor";
import Cause from "./Cause";
import CryptoUser from "./CryptoUser";
import Customer from "./Customer";
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
  payerIdentification: string;
  payer: Customer | CryptoUser | BigDonor;
  blockchainStatus?: string;
  transactionHash?: string;
  cause?: Cause;
  totalPages?: number;
}
