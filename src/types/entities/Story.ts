export default interface Story {
  id: string | number;
  title: string;
  active?: boolean;
  position?: string;
  description: string;
  image?: any;
  nonProfitId: number;
}
