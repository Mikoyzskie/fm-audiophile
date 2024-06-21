import React from 'react'
import { products } from "@/app/data"
import { notFound } from 'next/navigation';
import Header from '@/components/header'

import ProductInner from '@/components/inner/product-inner'
import Footer from '@/components/footer'
import Cta from '@/components/cta'
import Categories from '@/components/categories'
import Image from "next/image"
import Features from '@/components/inner/features'
import InnerImages from '@/components/inner/inner-images'
import Link from 'next/link'
import { IProduct } from "@/app/types"

export async function generateMetadata({ params }: { params: { product: string } }) {
    return {
        title: `${params.product.split("-").join(" ").toUpperCase()} | Speakers`,
    }
}


export default function page({ params }: { params: { product: string } }) {

    const exists = products.find((x: IProduct) => x.category === "speakers" && x.slug === params.product)

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
                <div>
                    <h3 className='text-center h3 mb-16'> YOU MAY ALSO LIKE</h3>
                    <div className='grid grid-cols-3 gap-[30px]'>
                        {
                            exists.like.map((y: string, index: number) => {
                                const maylike = products.find((x: IProduct) => x.slug === y)
                                let name = maylike?.name.split(' ')
                                name?.pop()
                                return (
                                    <div className='flex flex-col gap-10' key={index}>
                                        <Image
                                            src={`/shared/desktop/image-${maylike?.slug}-${maylike?.category}.jpg`}
                                            alt='mark-one'
                                            width={350}
                                            height={318}
                                            className='rounded-lg'
                                        />
                                        <div className='flex flex-col items-center justify-center gap-8'>
                                            <h5 className='h5'>
                                                {
                                                    name?.join(' ') === "ZX9" || name?.join(' ') === "ZX7" ? name?.join(' ') + " SPEAKER" : name?.join(' ')
                                                }
                                            </h5>
                                            <Link href={`/${maylike?.category}/${maylike?.slug}`}>
                                                <button className='button-1 sub-title'>SEE PRODUCT</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Categories />
                <Cta />
            </div>

            <Footer />
        </>
    )
}
