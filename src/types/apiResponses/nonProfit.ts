import { CreateStory } from "./story";

export interface CreateNonProfit {
  name: string;
  walletAddress: string;
  status: string;
  impactDescription: string;
  logo?: any;
  causeCardImage?: any;
  causeId: number;
  storiesAttributes?: CreateStory[];
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
