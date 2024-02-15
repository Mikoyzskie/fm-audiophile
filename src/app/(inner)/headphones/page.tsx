import Layout from "@/components/layout"
import ProductCard from "@/components/product"
import { IProducts } from "../types";

export default function Headphones() {

    const headphones = [
        {
            name: "XX99 Mark II Headphones",
            image: "/product-xx99-mark-two-headphones/desktop/image-product.jpg",
            description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
            link: "/",
            reverse: false,
            newProd: true
        },
        {
            name: "XX99 Mark I Headphones",
            image: "/product-xx99-mark-one-headphones/desktop/image-product.jpg",
            description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
            link: "/",
            reverse: true,
            newProd: false
        },
        {
            name: "XX59 Headphones",
            image: "/product-xx59-headphones/desktop/image-product.jpg",
            description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
            link: "/",
            reverse: false,
            newProd: false
        },

    ]

    return (
        <Layout title="headphones">
            <div className="max-w-[1110px] w-full mx-auto flex flex-col gap-[160px] mt-[160px]">
                {
                    headphones.map((item: IProducts, index: number) => (
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