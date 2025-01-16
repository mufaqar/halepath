import Link from 'next/link'
import React from 'react'

function HowIt_work() {
    return (
        <section className='py-10 md:px-4 px-4'>
            <div className='container mx-auto md:p-14 p-8 bg-secondary flex md:flex-row flex-col gap-7 justify-between items-center rounded-[19px]'>
                <div>
                    <p className='md:text-4xl text-2xl font-normal text-white mb-10'>
                        Globally Expertise Delivered Locally
                    </p>
                    <Link href="/products" className='bg-primary hover:bg-white px-9 py-3 text-lg font-medium text-white hover:text-primary rounded-full border-2 border-primary flex items-center gap-2 w-fit'>
                        See All Products
                    </Link>
                </div>
                <div className='flex md:flex-row flex-col gap-7 justify-between'>
                    <div>
                        <span className="block border-b-2 border-primary max-w-[61px] w-full"></span>
                        <h3 className='md:text-5xl text-3xl font-bold text-white my-6'>
                            35
                        </h3>
                        <p className='text-lg font-normal text-white'>
                            Lorem Ipsum
                            Lorem Ipsum
                        </p>
                    </div>
                    <div>
                        <span className="block border-b-2 border-primary max-w-[61px] w-full"></span>
                        <h3 className='md:text-5xl text-3xl font-bold text-white my-6'>
                            35,000
                        </h3>
                        <p className='text-lg font-normal text-white'>
                            Lorem Ipsum
                            Lorem Ipsum
                        </p>
                    </div>
                    <div>
                        <span className="block border-b-2 border-primary max-w-[61px] w-full"></span>
                        <h3 className='md:text-5xl text-3xl font-bold text-white my-6'>
                            350
                        </h3>
                        <p className='text-lg font-normal text-white'>
                            Lorem Ipsum
                            Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowIt_work