import Image from 'next/image'
import React from 'react'
import Qoute_Form from '../category/qoute-form'

import Product_Gallery from './product-gallery'

import { urlForImage } from '../../../sanity/lib/image'


function Banner({ data }: any) {
    return (
        <section className='h-full pt-10'>
            <div className='container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 gap-7'>
                <div className='bg-[#F7F7F7]'>
                    <Product_Gallery data={data} />

                    {/* <Image src={urlForImage(data?.image?.asset?._ref).width(534)?.url()} alt='category-baner' width={534} height={400} className='mx-auto' /> */}

                </div>
                <div>
                    <h1 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                        {data?.title}
                    </h1>
                    <p className='text-lg leading-6 my-5'>
                        {data?.excerpt}
                    </p>
                    <Qoute_Form />
                </div>
            </div>
        </section>
    )
}

export default Banner