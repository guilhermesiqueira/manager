import { CreateStory } from "types/apiResponses/story";
import Cause from "./Cause";
import Story from "./Story";

export default interface NonProfit {
  id: string;
  name: string;
  walletAddress: string;
  impactDescription: string;
  status: string;
  logo?: any;
  causeCardImage?: any;
  cause: Cause;
  stories: Story[];
  storiesAttributes: CreateStory[];
  createdAt: string;
  updatedAt: string;
  impactByTicket: number;
}
