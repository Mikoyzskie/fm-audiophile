import Image from "next/image"
import Back from '@/components/inner/goback'
import Count from '@/components/inner/count'

export default function ProductInner() {
    return (
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
    )
}
