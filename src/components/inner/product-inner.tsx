import Image from "next/image"
import Back from '@/components/inner/goback'
import Count from '@/components/inner/count'

export default function ProductInner({
    hero,
    newproduct,
    name,
    short,
    price,
}: {
    hero: string,
    newproduct: boolean,
    name: string,
    short: string,
    price: string
}) {
    return (
        <div>
            <Back />

            <div className='mt-14 flex gap-[125px] items-center'>
                <Image
                    src={hero}
                    alt='product image'
                    width={540}
                    height={560}
                    className='rounded-lg'
                />
                <div>
                    {
                        newproduct ? <p className='overline-text text-[#d87d4a] mb-4'>NEW PRODUCT</p> : <></>
                    }
                    <div className='flex flex-col gap- mb-[47px] gap-8'>
                        <h2 className='h2'>{name}</h2>
                        <p className='body text-[rgba(0,0,0,0.5)]'>{short}</p>
                        <h6 className='h6'>{price}</h6>
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
