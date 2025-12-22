export type Product = {
  id: string | number;
  name: string;
  price: number;
  rating?: number;
  image: string;
  offerName?: string;
  category?: string;
  offerPrice?: number;
  decoration?: string;
};