import React from 'react'
import Header from '@/components/header'
import Back from '@/components/goback'
import Image from "next/image"
import Count from '@/components/count'

export default function MarkII() {


    const text = "<p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.<br/>The advanced Active Noise Cancellation with built -in equalizer allow you to experience your audio world on your terms.It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to.Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting - edge technology, and a modern design aesthetic.</p>"

    return (
        <>
            <div className='bg-black'>
                <Header />
            </div>
            <div className='max-w-[1110px] w-full mx-auto mt-[79px]'>

                <div>
                    <Back />

                    <div className='mt-14 flex gap-[125px] items-center'>
                        <Image
                            src={"/product-xx99-mark-two-headphones/desktop/image-product.jpg"}
                            alt='product image'
                            width={540}
                            height={560}
                            className='rounded-lg'
                        />
                        <div>
                            <p className='overline-text text-[#d87d4a] mb-4'>NEW PRODUCT</p>
                            <div className='flex flex-col gap- mb-[47px]'>
                                <h2 className='h2'>XX99 Mark II Headphones</h2>
                                <p className='body text-[rgba(0,0,0,0.5)]'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                                <h6 className='h6'>$ 2,999</h6>
                            </div>
                            <div className='flex gap-4'>
                                <Count />
                                <button className='button-1 sub-title'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='h3'>FEATURES</h3>
                    <p dangerouslySetInnerHTML={{ __html: text }}></p>
                </div>
            </div>
        </>
    )
}
