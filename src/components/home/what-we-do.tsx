import Link from 'next/link'
import React from 'react'
import ImgBox from './imgBox'

const WhatWeDo = ({featureproductsRes}:any) => {
    console.log("🚀 ~ WhatWeDo ~ featureproductsRes:", featureproductsRes)
    return (
        <section className='py-16'>
            <div className='hale_container'>
                <h2 className='h2 md:!mb-5'>
                   The work we do and <span className='text-primary'>love doing</span>
                </h2>
                <p className='md:text-xl text-base font-normal text-title_Clr text-center max-w-[880px] mx-auto'>
                   We thrive on turning ideas into standout packaging. Our R&D department boosts branding with innovative research, creating strategies that elevate your market presence. Dive into graphic designing and custom manufacturing where our experts build tailored boxes from scratch. Rely on top-tier commercial printing for crisp, vibrant finishes. Plus, our logistics solutions handle seamless shipping and supply chain needs worldwide.
                </p>
                <Link href="/products" className='btn_secondry flex items-center gap-2 sm:mt-12 mt-6 w-fit mx-auto'>
                    See All Products
                </Link>
            </div>
            <div className='hale_container flex md:flex-row flex-col lg:gap-40 gap-7 mt-10'>
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