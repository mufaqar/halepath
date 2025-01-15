import Link from 'next/link'
import React from 'react'
import ImgBox from './imgBox'

const WhatWeDo = () => {
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
                    <ImgBox img="/images/blog/blog1.png" title="Lorem Ipsum" content="Lorem Ipsum is simply dummy to text of the printing and  Lorem a typesetting industry. Lorem and Ipsum has been the industry's a standard." />
                    <ImgBox img="/images/blog/blog2.png" title="Lorem Ipsum" content="Lorem Ipsum is simply dummy to text of the printing and  Lorem a typesetting industry. Lorem and Ipsum has been the industry's a standard." />
                </div>
                <div className='md:w-1/2 w-full flex md:flex-row flex-col items-start gap-7 [&>*:nth-child(2)]:md:-mt-40'>
                    <ImgBox img="/images/blog/blog3.png" title="Lorem Ipsum" content="Lorem Ipsum is simply dummy to text of the printing and  Lorem a typesetting industry. Lorem and Ipsum has been the industry's a standard." />
                    <ImgBox img="/images/blog/blog4.png" title="Lorem Ipsum" content="Lorem Ipsum is simply dummy to text of the printing and  Lorem a typesetting industry. Lorem and Ipsum has been the industry's a standard." />
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo