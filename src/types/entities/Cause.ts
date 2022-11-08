import Pool from "./Pool";

export interface Cause {
  id: number;
  name: string;
  pools: Pool[];
}

export interface CreateCause {
  name: string;
}

export interface EditCause {
  id: number;
  name: string;
}
