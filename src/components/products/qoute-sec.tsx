import Link from 'next/link'
import React from 'react'

function Qoute_Sec() {
    return (
        <section className='bg-primary lg:py-16 py-10 '>
            <div className='container mx-auto px-4 flex lg:flex-row flex-col lg:gap-10 gap-5 items-center'>
                <div className='lg:w-2/3 w-full'>
                    <div className='max-w-[700px]'>
                        <h2 className='md:text-2xl text-2xl font-semibold text-white'>
                            Start your packaging journey
                        </h2>
                        <p className='md:text-xl text-lg font-normal text-white mt-3 mb-5'>
                            Our entire packaging solution gives you the full freedom of customizing your packaging to your desired result with the added support you need to succeed.
                        </p>
                    </div>
                </div>
                <div className='lg:w-1/3 w-full'>
                    <Link href="#" className='bg-white hover:bg-secondary px-8 py-4 text-sm font-semibold text-primary hover:text-white block w-[193px] lg:ml-auto text-center rounded-[5px]'>
                        Get a Free Quote
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Qoute_Sec