import { CreateCause } from "./cause";
import { CreateStory } from "./story";

export interface CreateNonProfit {
  id?: string;
  name: string;
  walletAddress: string;
  status: string;
  logo?: any;
  backgroundImage?: any;
  mainImage?: any;
  causeId: number;
  storiesAttributes?: CreateStory[];
  cause?: CreateCause;
}
