export interface IBox {
  count: string;
  item: string;
}

export interface IProduct {
  category: string;
  slug: string;
  hero: string;
  name: string;
  new: boolean;
  short: string;
  price: string;
  features: string;
  box: IBox[];
  images: string;
  like: string[];
}
