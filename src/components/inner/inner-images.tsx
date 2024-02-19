import Image from "next/image"

export default function InnerImages({ page }: { page: string }) {

    return (
        <div className='flex gap-[30px]'>
            <div className='flex flex-col justify-between'>
                <Image
                    src={`/${page}/desktop/image-gallery-1.jpg`}
                    alt='xx99-mark-two'
                    width={445}
                    height={280}
                    className='rounded-lg'
                />
                <Image
                    src={`/${page}/desktop/image-gallery-2.jpg`}
                    alt='xx99-mark-two'
                    width={445}
                    height={280}
                    className='rounded-lg'
                />
            </div>
            <Image
                src={`/${page}/desktop/image-gallery-3.jpg`}
                alt='xx99-mark-two'
                width={635}
                height={592}
                className='rounded-lg'
            />
        </div>
    )
}
