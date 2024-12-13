import React from 'react'
import PackingBox from './packingBox'
import { urlForImage } from '../../../sanity/lib/image'

function Packaging_Style({ data }: any) {

    return (
        <section id="box-by-material" className='py-16'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        Select Your Custom Packaging Style
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr text-center max-w-[800px] mx-auto mt-5'>
                        Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques.
                    </p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
                    {
                        data.slice(0,4).map((category: any, i: number) => (
                            <PackingBox
                                key={i}
                                title={category?.name}
                                content={category?.excerpt}
                                slug= {category?.slug}
                                img={urlForImage(category?.image.asset._ref).width(306).url()}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Packaging_Style