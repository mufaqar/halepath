import Image from 'next/image'
import React from 'react'
import Product_Gallery from './product-gallery'
import { urlForImage } from '../../../sanity/lib/image'
import QouteFormForProduct from '../category/qoute-form-for-product'


function Banner({ data }: any) {
    return (
        <section className='pt-14'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7'>
                <div className='md:w-1/2 w-full'>
                    <h1 className='md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr mb-4'>
                        {data?.title}
                    </h1>
                    <p className='text-xl font-normal text-title_Clr mb-8'>
                        {data?.excerpt}
                    </p>
                    <Product_Gallery data={data} />

                    {/* <Image src={urlForImage(data?.image?.asset?._ref).width(534)?.url()} alt='category-baner' width={534} height={400} className='mx-auto' /> */}
                </div>
                <div className='md:w-1/2 w-full'>
                    <h2 className='md:text-[41px] md:leading-normal text-3xl font-bold text-title_Clr mb-3'>
                        Get Custom Quote
                    </h2>
                    <QouteFormForProduct />
                </div>
            </div>
        </section>
    )
}

export default Banner