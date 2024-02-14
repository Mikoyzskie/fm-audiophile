import Layout from "@/components/layout"
import ProductCard from "@/components/product"
import ProductReverse from "@/components/reverse-product"

export default function Speakers() {

    const words = "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."

    return (
        <Layout title="speakers">
            <div className="max-w-[1110px] w-full mx-auto">
                <ProductCard
                    name="ZX9 SPEAKER"
                    image="/product-zx9-speaker/desktop/image-product.jpg"
                    description={words}
                    link="/"
                />
                <ProductReverse
                    name="ZX9 SPEAKER"
                    image="/product-zx7-speaker/desktop/image-product.jpg"
                    description={words}
                    link="/"
                />
            </div>
        </Layout>
    )
}