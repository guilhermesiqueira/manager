import NonProfit from "./NonProfit";
import Pool from "./Pool";

export default interface Cause {
  id: number;
  name: string;
  pools: Pool[];
  nonProfits: NonProfit[];
  coverImage?: string;
  mainImage?: string;
  defaultPool?: string;
}
