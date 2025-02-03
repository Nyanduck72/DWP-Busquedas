export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  isDiscounted: boolean;
  originalPrice?: number;
  image: string;
}

export type Category = 'dairy' | 'dry goods' | 'fruits & vegetables' | 'meat' | 'beverages';