import Image from "next/image";
import Header from "@/components/header";
import Button from "@/components/button";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

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
    <>
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
          <section className="pt-[200px] pb-[168px] grid grid-cols-3 gap-[30px]">
            {
              categories.map((category: ICategory, index: number) => {
                return (
                  <div className="h-[204px] bg-[#f1f1f1] flex flex-col items-center justify-end p-[30px] rounded-lg" key={index}>
                    <Image
                      src={`/shared/desktop/image-category-thumbnail-${category.name}.png`}
                      alt={category.name}
                      width={438}
                      height={category.image_height}
                      className=" w-3/4"
                    />
                    <h6 className="uppercase h6 mb-[15px]">{category.name}</h6>
                    <Button title={category.name} />
                  </div>
                )
              })
            }
          </section>
          <section className="pb-[200px]">
            <div className="h-[560px] bg-[#D87D4A] rounded-lg overflow-hidden relative mb-12 flex flex-col items-end justify-center pr-[95px]">
              <svg className="absolute -top-9 -left-[149px] z-0" width="944" height="944" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5" /><circle cx="472" cy="472" r="270.5" /><circle cx="472" cy="472" r="471.5" /></g></svg>
              <div className="pl-6 pr-4 pt-5 pb-[17px] absolute left-[117.49px] -bottom-[29px]">
                <Image
                  src={"/home/desktop/image-speaker-zx9.png"}
                  alt="speaker"
                  width={756}
                  height={918}
                  className="h-[456px] w-[370.23px]"
                />
              </div>
              <div className="max-w-[349px] text-white absolute">
                <h1 className="h1 mb-6">
                  ZX9 SPEAKER
                </h1>
                <p className="body mb-10">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button className="button-2-reverse sub-title bg-[#000]">SEE PRODUCT</button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden relative mb-12">
              <Image
                src={"/home/desktop/image-speaker-zx7.jpg"}
                alt="zx7 speaker"
                width={1110}
                height={320}
                className=""
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-[95px] flex flex-col gap-8">
                <h4 className="h4">ZX7 SPEAKER</h4>
                <button className="sub-title button-2 w-fit">SEE PRODUCT</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[30px]">
              <Image
                src={"/home/desktop/image-earphones-yx1.jpg"}
                alt="yx1 earphones"
                width={540}
                height={320}
                className="rounded-lg"
              />
              <div className="bg-[#f1f1f1] rounded-lg flex flex-col gap-8 justify-center pl-[95px]">
                <h4 className="h4">YX1 EARPHONES</h4>
                <button className="sub-title button-2 w-fit">SEE PRODUCT</button>
              </div>
            </div>
          </section>
          <Cta />
        </div>
      </main>
      <Footer />
    </>
  );
}
