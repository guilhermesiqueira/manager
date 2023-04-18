import Cause from "./Cause";
import BigDonor from "./BigDonor";

export default interface BigDonation {
  ic: string;
  createdAt: string;
  updatedAt: string;
  amount: number;
  causeId: number;
  cause: Cause;
  bigDonor: BigDonor;
  bigDonorId: number;
}
