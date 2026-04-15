import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Brands() {
    return (
        <section className='pb-12 md:px-4 px-4'>
            <div className='hale_container md:p-8 p-8 shadow-[0_0_5px_0_rgba(0,0,0,0.31)] rounded-[19px]'>
                <h2 className='h2'>
                    Brand That Trust Us
                </h2>
                <div className='grid md:grid-cols-5 grid-cols-3 sm:gap-7 gap-5 justify-between'>
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