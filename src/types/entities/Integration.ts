export default interface Integration {
  id: number;
  name: string;
  integrationWallet?: Object;
  integrationAddress: string;
  uniqueAddress: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}
