import Link from 'next/link'
import React from 'react'
import ImgBox from './imgBox'

const WhatWeDo = ({featureproductsRes}:any) => {
    console.log("🚀 ~ WhatWeDo ~ featureproductsRes:", featureproductsRes)
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <h2 className='md:text-[51px] md:leading-normal text-3xl font-semibold text-title_Clr text-center mb-7'>
                    The work we do and <span className='text-primary'>love doing</span>
                </h2>
                <p className='md:text-xl text-base font-normal text-title_Clr text-center max-w-[640px] mx-auto'>
                    Lorem Ipsum is simply dummy to text of the printing and  Lorem a typesetting industry. Lorem and Ipsum has been the industry's a standard.
                </p>
                <Link href="/products" className='bg-secondary hover:bg-white px-9 py-3 text-lg font-medium text-white hover:text-secondary rounded-full border-2 border-secondary flex items-center gap-2 mt-12 w-fit mx-auto'>
                    See All Products
                </Link>
            </div>
            <div className='container mx-auto px-4 flex md:flex-row flex-col md:gap-40 gap-7 mt-10'>
                <div className='md:w-1/2 w-full flex md:flex-row flex-col items-start gap-7 [&>*:nth-child(1)]:md:-mt-40'>
                    <ImgBox img={featureproductsRes[0]?.gallery?.[0]?.asset?.url} title={featureproductsRes[0].title} content={featureproductsRes[0].excerpt} slug={featureproductsRes[0].slug.current}  />
                    <ImgBox img={featureproductsRes[1]?.gallery?.[0]?.asset?.url} title={featureproductsRes[1].title} content={featureproductsRes[1].excerpt} slug={featureproductsRes[1].slug.current}  />
                </div>
                <div className='md:w-1/2 w-full flex md:flex-row flex-col items-start gap-7 [&>*:nth-child(2)]:md:-mt-40'>
                    <ImgBox img={featureproductsRes[2]?.gallery?.[0]?.asset?.url} title={featureproductsRes[2].title} content={featureproductsRes[2].excerpt} slug={featureproductsRes[2].slug.current}  />
                    <ImgBox img={featureproductsRes[3]?.gallery?.[0]?.asset?.url} title={featureproductsRes[3].title} content={featureproductsRes[3].excerpt} slug={featureproductsRes[3].slug.current}  />
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo