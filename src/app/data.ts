interface IProducts {
  name: string;
  data: {
    description: string;
    price: string;
  };
}

interface IBox {
  count: string;
  item: string;
}

interface IEarphones {
  slug: string;
  hero: string;
  new: boolean;
  name: string;
  short: string;
  price: string;
  features: string;
  box: IBox[];
  images: string[];
}

export const headphones: IProducts[] = [
  {
    name: "XX99 Mark II",
    data: {
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      price: "$ 2,999",
    },
  },
];

export const earphones: IEarphones[] = [
  {
    slug: "yx1",
    hero: "/product-yx1-earphones/desktop/image-product.jpg",
    new: false,
    name: "YX1 WIRELESS EARPHONES",
    short:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    price: "$ 599",
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.<br/><br/>The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    box: [
      {
        count: "2x",
        item: "Earphone Unit",
      },
      {
        count: "6x",
        item: "Multi-size Earplugs",
      },
      {
        count: "1x",
        item: "User Manual",
      },
      {
        count: "1x",
        item: "USB-C Charging Cable",
      },
      {
        count: "1x",
        item: "Travel Pouch",
      },
    ],
    images: [
      "/product-yx1-earphones/desktop/image-gallery-1.jpg",
      "/product-yx1-earphones/desktop/image-gallery-2.jpg",
      "/product-yx1-earphones/desktop/image-gallery-3.jpg",
    ],
  },
];
