import React from 'react'
import { speakers } from "@/app/data"
import { notFound } from 'next/navigation';
import Header from '@/components/header'

import ProductInner from '@/components/inner/product-inner'
import Footer from '@/components/footer'
import Cta from '@/components/cta'
import Categories from '@/components/categories'
import Maylike from '@/components/inner/maylike'
import Features from '@/components/inner/features'
import InnerImages from '@/components/inner/inner-images'

import { IProduct } from "@/app/types"


export default function page({ params }: { params: { product: string } }) {

    const exists = speakers.find((x: IProduct) => x.slug === params.product)

    if (!exists) {
        notFound()
    }


    return (
        <>
            <div className='bg-black'>
                <Header />
            </div>
            <div className='max-w-[1110px] w-full mx-auto mt-[79px] flex flex-col gap-40 mb-40'>
                <ProductInner
                    hero={exists.hero}
                    newproduct={true}
                    name={exists.name}
                    short={exists.short}
                    price={exists.price}
                />
                <Features feature={exists.features} box={exists.box} />
                <InnerImages page={exists.images} />
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
