import Layout from "@/components/layout"
import ProductCard from "@/components/product"
import { IProducts } from "../types";

export default function Speakers() {

    const speakers = [
        {
            name: "ZX9 SPEAKER",
            image: "/product-zx9-speaker/desktop/image-product.jpg",
            description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
            link: "/",
            reverse: false,
            newProd: true
        },
        {
            name: "ZX7 SPEAKER",
            image: "/product-zx7-speaker/desktop/image-product.jpg",
            description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
            link: "/",
            reverse: true,
            newProd: false
        },

    ]

    return (
        <Layout title="speakers">
            <div className="max-w-[1110px] w-full mx-auto flex flex-col gap-[160px] mt-[160px]">
                {
                    speakers.map((item: IProducts, index: number) => (
                        <ProductCard
                            key={index}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                            link={item.link}
                            reverse={item.reverse}
                            newProd={item.newProd}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}