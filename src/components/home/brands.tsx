import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Brands() {
    return (
        <section className='pb-12 md:px-4 px-4'>
            <div className='container mx-auto md:p-8 p-8 shadow-[0_0_5px_0_rgba(0,0,0,0.31)] rounded-[19px]'>
                <h2 className='md:text-4xl text-2xl font-bold text-title_Clr text-center mb-10'>
                    Brand That Trust Us
                </h2>
                <div className='flex md:flex-row flex-col gap-7 justify-between'>
                    <Image src="/images/brands/1.png" alt='brand1' width={179} height={101} />
                    <Image src="/images/brands/2.png" alt='brand2' width={179} height={101} />
                    <Image src="/images/brands/3.png" alt='brand3' width={179} height={101} />
                    <Image src="/images/brands/4.png" alt='brand4' width={179} height={101} />
                    <Image src="/images/brands/5.png" alt='brand5' width={179} height={101} />
                </div>
            </div>
        </section>
    )
}

export default Brands