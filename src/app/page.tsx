import Image from "next/image";
import Header from "@/components/header";
import Button from "@/components/button";

interface ICategory {
  name: string;
  image_height: number;
}

export default function Home() {

  const categories = [
    { name: "headphones", image_height: 422 },
    { name: "speakers", image_height: 408 },
    { name: "earphones", image_height: 380 }
  ]

  return (
    <main>
      <div className="hero flex flex-col rounded-b-lg">
        <Header />
        <div className="max-w-[1110px] w-full mx-auto grow flex flex-col justify-center">
          <div className="max-w-[398px] w-full flex flex-col gap-6 mb-10">
            <p className="overline-text text-[rgba(255,255,255,0.5)]">NEW PRODUCT</p>
            <h1 className="h1 text-[#fff]">XX99 Mark II Headphones</h1>
            <p className="body text-[rgba(255,255,255,0.75)] mr-[49px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          </div>
          <button className="button-1 w-fit sub-title">SEE PRODUCT</button>
        </div>
      </div>
      <div className="max-w-[1110px] w-full mx-auto">
        <div className="pt-[120px] pb-[168px] grid grid-cols-3 gap-[30px]">
          {
            categories.map((category: ICategory, index: number) => {
              return (
                <div className="h-[204px] bg-[#f1f1f1] flex flex-col items-center justify-end p-[30px] rounded-lg relative" key={index}>
                  <Image
                    src={`/shared/desktop/image-category-thumbnail-${category.name}.png`}
                    alt={category.name}
                    width={438}
                    height={category.image_height}
                    className="absolute -top-1/2 w"
                  />
                  <h6 className="uppercase h6">{category.name}</h6>
                  <Button title={category.name} />
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  );
}
