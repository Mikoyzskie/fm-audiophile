import React from 'react'
import Image from "next/image"

export default function Cta() {
    return (
        <section className='flex items-center gap-[125px] pb-[200px]'>
            <div className='flex flex-col gap-8'>
                <h2 className='h2'>Bringing you the <span className='text-[#d87d4a]'>best</span> audio gear</h2>
                <p className='body text-[rgba(0,0,0,0.5)]'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <Image
                src={"/shared/desktop/image-best-gear.jpg"}
                alt='best gear'
                width={540}
                height={588}
                className='rounded-lg max-w-[540px] w-full'
            />
        </section>
    )
}
