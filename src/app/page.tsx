import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
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
    </main>
  );
}
