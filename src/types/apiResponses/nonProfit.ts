import { CreateCause } from "./cause";
import { CreateStory } from "./story";

export interface CreateNonProfit {
  id?: string;
  name: string;
  walletAddress: string;
  status: string;
  logo?: any;
  backgroundImage?: any;
  causeCardImage?: any;
  causeId: number;
  storiesAttributes?: CreateStory[];
  cause?: CreateCause;
}
