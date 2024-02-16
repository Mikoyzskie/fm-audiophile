import React from 'react'
import Image from "next/image"
import Button from './button';



interface ICategory {
    name: string;
    image_height: number;
}

export default function Categories() {

    const categories = [
        { name: "headphones", image_height: 422 },
        { name: "speakers", image_height: 408 },
        { name: "earphones", image_height: 380 }
    ]


    return (
        <section className="md:pt-[148px] lg:pt-[200px] pb-[160px] grid grid-cols-3 gap-[30px] lg:px-0 md:px-[39px]">
            {
                categories.map((category: ICategory, index: number) => {
                    return (
                        <div className=" relative md:h-[165px] lg:h-[204px] bg-[#f1f1f1] flex flex-col items-center justify-end p-[30px] rounded-lg" key={index}>

                            <Image
                                src={`/shared/desktop/image-category-thumbnail-${category.name}.png`}
                                alt={category.name}
                                width={438}
                                height={category.image_height}
                                className="absolute -top-[80px] h-[200px] w-auto"
                            />

                            <h6 className="uppercase md:body font-bold lg:h6 mb-[15px]">{category.name}</h6>
                            <Button title={category.name} />
                        </div>
                    )
                })
            }
        </section>
    )
}
