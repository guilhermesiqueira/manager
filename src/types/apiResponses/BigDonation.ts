export interface CreateBigDonation {
  transactionHash: string;
  amount: number;
  causeId: number;
  bigDonorId: number;
  integrationId: number;
  feeable: boolean;
}
