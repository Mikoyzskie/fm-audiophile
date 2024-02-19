import Header from '@/components/header'
import Back from '@/components/inner/goback'
import Image from "next/image"
import Count from '@/components/inner/count'
import Footer from '@/components/footer'
import Cta from '@/components/cta'
import Categories from '@/components/categories'
import Maylike from '@/components/inner/maylike'


interface IInner {
    features: string[],
    box: string[]
}

export default function inner({ features, box, children }: { features: string[], box: string[], children: React.ReactNode }) {
    return (
        <>
            <div className='bg-black'>
                <Header />
            </div>
            <div className='max-w-[1110px] w-full mx-auto mt-[79px] flex flex-col gap-40 mb-40'>
                <Back />
                <div>
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
                            <div className='flex flex-col gap- mb-[47px] gap-8'>
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
                <div className='gap-[125px] flex'>
                    <div>
                        <h3 className='h3 mb-8'>FEATURES</h3>
                        <div className='body flex flex-col gap-8 grayish'>
                            {
                                features.map((text: string, index: number) => (
                                    <p key={index} className='max-w-[635px]'>{text}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h3 className='h3 mb-8'>IN THE BOX</h3>
                        <div className='body flex flex-col gap-2'>
                            <p className='gap-6 flex'>
                                <span className='orange'>1x</span>
                                <span className='grayish'>Headphone Unit</span>
                            </p>
                            <p className='gap-6 flex'>
                                <span className='orange'>2x</span>
                                <span className='grayish'>Replacement Earcups</span>
                            </p>
                            <p className='gap-6 flex'>
                                <span className='orange'>1x</span>
                                <span className='grayish'>User Manual</span>
                            </p>
                            <p className='gap-6 flex'>
                                <span className='orange'>1x</span>
                                <span className='grayish'>3.5mm 5m Audio Cable</span>
                            </p>
                            <p className='gap-6 flex'>
                                <span className='orange'>1x</span>
                                <span className='grayish'>Travel Bag</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[30px]'>
                    <div className='flex flex-col justify-between'>
                        <Image
                            src={"/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"}
                            alt='xx99-mark-two'
                            width={445}
                            height={280}
                            className='rounded-lg'
                        />
                        <Image
                            src={"/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"}
                            alt='xx99-mark-two'
                            width={445}
                            height={280}
                            className='rounded-lg'
                        />
                    </div>
                    <Image
                        src={"/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"}
                        alt='xx99-mark-two'
                        width={635}
                        height={592}
                        className='rounded-lg'
                    />
                </div>
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
