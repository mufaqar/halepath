import React from 'react'
import BlockContent from "@sanity/block-content-to-react";
import Image from 'next/image';

function Get_Started({ data }) {
    return (
        <section className='py-16'>

            <div className='container mx-auto px-4'>
                <h2 className='md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-4'>
                    Custom Retail Boxes Gallery
                </h2>
            </div>
            <div className='flex flex-row items-center justify-center  -space-x-8'>
                <div className='w-fit h-fit rounded-[32px] z-0'>
                    <Image src="/images/product/boxgal1.png" alt='boxgal' width={147} height={398} className='object-cover object-center rounded-[32px] ' /></div>
                <div className='w-fit h-fit rounded-[32px] z-10'>
                    <Image src="/images/product/boxgal2.png" alt='boxgal' width={339} height={457} className='object-cover object-center rounded-[32px] ' /></div>
                <div className='w-fit h-fit rounded-[32px] z-20'>
                    <Image src="/images/product/boxgal3.png" alt='boxgal' width={398} height={536} className='object-cover object-center rounded-[32px] ' /></div>
                <div className='w-fit h-fit rounded-[32px] z-30'>
                    <Image src="/images/product/boxgal4.png" alt='boxgal' width={481} height={647} className='object-cover object-center rounded-[32px] ' /></div>
                <div className='w-fit h-fit rounded-[32px] z-20'>
                    <Image src="/images/product/boxgal5.png" alt='boxgal' width={398} height={536} className='object-cover object-center rounded-[32px]  ' /></div>
                <div className='w-fit h-fit rounded-[32px] z-10'>
                    <Image src="/images/product/boxgal6.png" alt='boxgal' width={339} height={457} className='object-cover object-center rounded-[32px]  ' /></div>
                <div className='w-fit h-fit rounded-[32px] z-0'>
                    <Image src="/images/product/boxgal7.png" alt='boxgal' width={147} height={398} className='object-cover object-center rounded-[32px]  ' /></div>
            </div>

        </section>
    )
}

export default Get_Started