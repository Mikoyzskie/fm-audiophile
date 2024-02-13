import React from 'react'
import Image from "next/image"

export default function ProductCard() {
    return (
        <div className='flex items-center gap-[125px]'>
            <Image
                src={"/product-zx9-speaker/desktop/image-product.jpg"}
                alt='zx9 speaker'
                width={540}
                height={560}
                className='rounded-lg'
            />
            <div>
                <p className='overline-text text-[#d87d4a] mb-4'>NEW PRODUCT</p>
                <h2 className='h2 mb-8'>ZX9 <br /> SPEAKER</h2>
                <p className='body text-[#00000080] mb-10 pr-9'>Upgrade your sound system with the all new ZX9 active speaker. {"It’s"} a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                <button className='button-1 sub-title'>SEE PRODUCT</button>
            </div>
        </div>
    )
}
