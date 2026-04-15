import Image from 'next/image'
import React from 'react'
import Qoute_Form from './qoute-form'
import { urlForImage } from '../../../sanity/lib/image'

function Banner({ data }: any) {
    return (
        <section className='h-full pt-10'>
            <div className='container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 gap-7'>
                <div>
                    <Image src={urlForImage(data?.image?.asset?._ref).width(534)?.url()} alt={data?.image?.alt || data?.name} width={534} height={400} className='w-full md:h-[680px] object-contain bg-[#F7F7F7]' />
                </div>
                <div>
                    <h1 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                        {data?.name}
                    </h1>
                    <p className='text-lg leading-6 my-5 '>
                        {data?.excerpt}
                    </p>
                    <Qoute_Form />
                </div>
            </div>
        </section>
    )
}

export default Banner