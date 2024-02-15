import React from 'react'
import Image from "next/image"
import Link from "next/link"
import clsx from 'clsx'
import { IProducts } from '@/app/(inner)/types'

export default function ProductCard({ name, image, link, description, reverse, newProd }: IProducts) {
    return (
        <div className={clsx('flex items-center gap-[125px]', reverse ? "flex-row-reverse" : "")}>
            <Image
                src={image}
                alt={name}
                width={540}
                height={560}
                className='rounded-lg max-w-[560px] w-full'
            />
            <div>
                {
                    newProd && <p className='overline-text text-[#d87d4a] mb-4'>NEW PRODUCT</p>
                }
                <h2 className='h2 mb-8'>{name}</h2>
                <p className='body text-[#00000080] mb-10'>{description}</p>
                <Link href={link}>
                    <button className='button-1 sub-title'>SEE PRODUCT</button>
                </Link>
            </div>
        </div>
    )
}
