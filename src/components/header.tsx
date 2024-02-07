import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function Header() {

    const navs = ["home", "headphones", "speakers", "earphones"]

    return (
        <header className='max-w-[1110px] w-full mx-auto pt-8 pb-9 border-b border-[rgba(255,255,255,0.2)] flex justify-between items-center'>
            <Image
                src={"/shared/desktop/logo.svg"}
                alt='logo'
                width={143}
                height={25}
            />
            <ul className='flex gap-[34px]'>
                {
                    navs.map((nav: string) => (
                        <li key={nav}>
                            <Link href={"#"} className='sub-title text-white uppercase'>{nav}</Link>
                        </li>
                    ))
                }
            </ul>
            <Image
                src={"/shared/desktop/icon-cart.svg"}
                alt='logo'
                width={24}
                height={20}
            />
        </header>
    )
}
