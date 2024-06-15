import React from 'react'
import { headphones } from "@/app/data"
import { notFound } from 'next/navigation';

const slugify = require('slugify');

interface IHeadphones {
    name: string;
    data: {
        description: string;
        price: string;
    }
}

export default function page({ params }: { params: { product: string } }) {

    const test = params.product.split('-')
        .join(' ');

    const exists = headphones.find((x: IHeadphones) => x.name.toLowerCase() === test.toLocaleLowerCase())

    if (!exists) {
        notFound()
    }


    return (
        <pre>
            {JSON.stringify(exists)}
        </pre>
    )
}
