import Pool from "./Pool";

export default interface Cause {
  id: string;
  name: string;
  pools: Pool[];
}
