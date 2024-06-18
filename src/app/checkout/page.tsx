import Header from "@/components/header"
import Footer from "@/components/footer"

export default function page() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="bg-[#101010]">
                <Header />
            </div>
            <div className="grow max-w-[1110px] w-full mx-auto">
                checkout
            </div>

            <Footer />
        </div>
    )
}
