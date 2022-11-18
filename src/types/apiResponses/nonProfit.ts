export interface CreateNonProfit {
  name: string;
  walletAddress: string;
  status: string;
  impactDescription: string;
  logo?: any;
  causeCardImage?: any;
  causeId: number;
}

export interface EditNonProfit {
  id: string;
  name: string;
  walletAddress: string;
  status: string;
  impactDescription: string;
  logo?: any;
  causeCardImage?: any;
  causeId: number;
}
