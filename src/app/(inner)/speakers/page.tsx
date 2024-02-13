import Layout from "@/components/layout"
import ProductCard from "@/components/product"

export default function Speakers() {
    return (
        <Layout title="speakers">
            <div className="max-w-[1110px] w-full mx-auto">
                <ProductCard />
            </div>
        </Layout>
    )
}