import ProductInner from '@/components/inner/product-inner'
import Header from '@/components/header'

import Image from "next/image"

import Footer from '@/components/footer'
import Cta from '@/components/cta'
import Categories from '@/components/categories'
import Maylike from '@/components/inner/maylike'
import Features from '@/components/inner/features'
import InnerImages from '@/components/inner/inner-images'

export default function MarkII() {

    const folder = "product-xx99-mark-two-headphones"
    const text = ["Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.", "The advanced Active Noise Cancellation with built -in equalizer allow you to experience your audio world on your terms.It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to.Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting - edge technology, and a modern design aesthetic."]
    const box = [
        { count: "1x", item: "Headphone Unit" },
        { count: "2x", item: "Replacement Earcups" },
        { count: "1x", item: "User Manual" },
        { count: "1x", item: "3.5mm 5m Audio Cable" },
        { count: "1x", item: "Travel Bag" },
    ]

    return (
        <>
            <div className='bg-black'>
                <Header />
            </div>
            <div className='max-w-[1110px] w-full mx-auto mt-[79px] flex flex-col gap-40 mb-40'>

                <ProductInner />
                <Features feature={text} box={box} />
                <InnerImages page={folder} />
            </div>
            <div className='max-w-[1110px] w-full mx-auto'>
                <Maylike />
                <Categories />
                <Cta />
            </div>

            <Footer />
        </>
    )
}
