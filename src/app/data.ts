interface IHeadphones {
  name: string;
  data: {
    description: string;
    price: string;
  };
}

export const headphones: IHeadphones[] = [
  {
    name: "XX99 Mark II",
    data: {
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      price: "$ 2,999",
    },
  },
];
