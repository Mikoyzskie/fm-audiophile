"use client"

import { useRouter } from "next/navigation"


export default function Back() {
    const router = useRouter()
    return (
        <button className="body text-[rgba(0,0,0,0.5)]" onClick={() => router.back()}>
            Go Back
        </button>
    )
}
