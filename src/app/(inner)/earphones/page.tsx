import Layout from "@/components/layout"
import ProductCard from "@/components/product"
import { IProducts } from "../types";

export default function Earphones() {

    const earphones = [
        {
            name: "YX1 WIRELESS EARPHONES",
            image: "/product-yx1-earphones/desktop/image-product.jpg",
            description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
            link: "/",
            reverse: false,
            newProd: true
        },

    ]

    return (
        <Layout title="earphones">
            <div className="max-w-[1110px] w-full mx-auto flex flex-col gap-[160px] mt-[160px]">
                {
                    earphones.map((item: IProducts, index: number) => (
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