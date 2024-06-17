export interface IBox {
  count: string;
  item: string;
}

export interface IProduct {
  slug: string;
  hero: string;
  name: string;
  new: boolean;
  short: string;
  price: string;
  features: string;
  box: IBox[];
  images: string;
}
