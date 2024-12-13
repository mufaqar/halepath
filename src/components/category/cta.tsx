import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cta() {
    return (
        <section className='bg-secondary'>
            <div className='flex lg:flex-row flex-col gap-10'>
                <div className='lg:w-1/2 w-full lg:py-16 py-10 px-4'>
                    <div className='max-w-[610px] lg:ml-auto'>
                        <h2 className='md:text-4xl text-3xl font-normal text-white'>
                            Get Started with Mailer Boxes Today
                        </h2>
                        <p className='text-xl font-normal text-white mt-3 mb-5'>
                            Continue to Company name to customize your mailer boxes and get instant quotes.
                        </p>
                        <Link href="#" className='bg-white hover:bg-primary px-8 py-4 text-sm font-semibold text-title_Clr hover:text-white block w-[193px] text-center rounded-[5px]'>
                            Get started
                        </Link>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <Image src="/images/cta.png" alt='cta' width={462} height={278} />
                </div>
            </div>
        </section>
    )
}

export default Cta