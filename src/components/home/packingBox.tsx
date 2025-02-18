import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PackingBox({ title, img, slug }: any) {
    return (
        <div className="w-fit p-4">
            <Image src={img} alt="category1" width={363} height={375} className="mx-auto" />
            <Link href={`/${slug}`} className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8">
                {title}
            </Link>
        </div>

    )
}

export default PackingBox