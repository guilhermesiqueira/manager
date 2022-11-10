export default interface Offer {
  id: number;
  active: string;
  currency: string;
  positionOrder: string;
  gateway: string;
  externalId: string;
  price: string;
  priceCents: string;
  priceValue: string;
  subscription: boolean;
  title: string;
  updated_at: string;
}
