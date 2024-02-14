import React from 'react'
import Image from "next/image"
import Link from "next/link"

interface IProduct {
    name: string;
    image: string;
    link: string
    description: string;
}

export default function ProductReverse({ name, image, link, description }: IProduct) {
    return (
        <div className='flex items-center gap-[125px]'>

            <div>
                <p className='overline-text text-[#d87d4a] mb-4'>NEW PRODUCT</p>
                <h2 className='h2 mb-8'>ZX9 <br /> SPEAKER</h2>
                <p className='body text-[#00000080] mb-10'>{description}</p>
                <Link href={link}>
                    <button className='button-1 sub-title'>SEE PRODUCT</button>
                </Link>
            </div>
            <Image
                src={image}
                alt={name}
                width={540}
                height={560}
                className='rounded-lg max-w-[560px] w-full'
            />
        </div>
    )
}
