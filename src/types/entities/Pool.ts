import Token from "./Token";

export default interface Pool {
  id: string;
  name: string;
  address: string;
  token: Token;
}
