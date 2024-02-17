"use client"

import { useState } from 'react'

export default function Count() {

    const [count, setCount] = useState(1)

    return (
        <div className='flex gap-[21px] p-[15px] bg-[#F1F1F1] items-center'>
            <button className='sub-title text-[rgba(0,0,0,0.5)] w-4'
                onClick={() => {
                    count <= 0 ? setCount(1) : setCount(count - 1)
                }}>-</button>
            <span className='sub-title'>{count}</span>
            <button className='sub-title text-[rgba(0,0,0,0.5)] w-4' onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}
