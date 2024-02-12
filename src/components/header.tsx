import React from 'react'
import Image from "next/image"
import Link from "next/link"

interface INavigation {
    name: string,
    link: string,
}

export default function Header() {

    const navs = [
        { name: "home", link: "/" },
        { name: "headphones", link: "headphones" },
        { name: "speakers", link: "speakers" },
        { name: "earphones", link: "earphones" }
    ]

    return (

        <header className='max-w-[1110px] w-full mx-auto pt-8 pb-9 border-b border-[rgba(255,255,255,0.2)] flex justify-between items-center '>
            <Image
                src={"/shared/desktop/logo.svg"}
                alt='logo'
                width={143}
                height={25}
            />

            <ul className='flex gap-[34px]'>
                {
                    navs.map((nav: INavigation, index: number) => (
                        <li key={index}>
                            <Link href={`/${nav.link}`} className='sub-title text-white uppercase hover:text-[#D87D4A]'>{nav.name}</Link>
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
