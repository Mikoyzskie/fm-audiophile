import React from 'react'
import Image from "next/image"

export default function Maylike() {
    return (
        <div>
            <h3 className='text-center h3 mb-16'> YOU MAY ALSO LIKE</h3>
            <div className='grid grid-cols-3 gap-[30px]'>
                <div className='flex flex-col gap-10'>
                    <Image
                        src={"/shared/desktop/image-xx99-mark-one-headphones.jpg"}
                        alt='mark-one'
                        width={350}
                        height={318}
                    />
                    <div className='flex flex-col items-center justify-center gap-8'>
                        <h5 className='h5'>XX99 MARK I</h5>
                        <button className='button-1 sub-title'>SEE PRODUCT</button>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <Image
                        src={"/shared/desktop/image-xx99-mark-one-headphones.jpg"}
                        alt='mark-one'
                        width={350}
                        height={318}
                    />
                    <div className='flex flex-col items-center justify-center gap-8'>
                        <h5 className='h5'>XX99 MARK I</h5>
                        <button className='button-1 sub-title'>SEE PRODUCT</button>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <Image
                        src={"/shared/desktop/image-xx99-mark-one-headphones.jpg"}
                        alt='mark-one'
                        width={350}
                        height={318}
                    />
                    <div className='flex flex-col items-center justify-center gap-8'>
                        <h5 className='h5'>XX99 MARK I</h5>
                        <button className='button-1 sub-title'>SEE PRODUCT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
