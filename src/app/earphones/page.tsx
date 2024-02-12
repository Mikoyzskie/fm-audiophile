import Footer from "@/components/footer"
import Header from "@/components/header"
import Cta from "@/components/cta"
import Categories from "@/components/categories"

export default function Earphones() {
    return (
        <>
            <main>
                <div className="h-[336px] pb-[97px] bg-black flex justify-between flex-col">
                    <Header />
                    <h2 className="h2 text-white text-center mt-auto">EARPHONES</h2>
                </div>
                <div>

                </div>
                <div className="max-w-[1110px] w-full mx-auto">
                    <Categories />
                    <Cta />
                </div>
            </main>

            <Footer />
        </>
    )
}