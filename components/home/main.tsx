import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MainBanner() {
    return (
        <section className='h-full pt-20'>
            <div className='container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 gap-7 items-center mb-16'>
                <div>
                    <h1 className='md:text-[56px] text-[38px] leading-[110%] font-normal text-title_Clr'>
                        Custom packaging, simplified.
                    </h1>
                    <p className='text-lg leading-6 my-5 max-w-[500px]'>
                        Streamline your packaging workflow and deliver incredible unboxing experiences every single time.
                    </p>
                    <Link href="#" className='bg-primary hover:bg-secondary px-8 py-4 text-base font-normal text-white rounded-[5px] inline-block'>
                        Explore products
                    </Link>
                </div>
                <div>
                    <Image src="/images/baner-img.png" alt='baner-img' width={716} height={345} className='md:ml-auto' />
                </div>
            </div>
            <div className='container mx-auto hidden md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 bg-[#F7F7F7]/40 py-5 lg:divide-x rounded-[3px]'>
                <div className='px-5 flex gap-2 items-center'>
                    <Image src="/images/shipping.png" alt="shipping" width={54} height={30} />
                    <div>
                        <h3 className='text-base leading-4 font-semibold text-title_Clr'>
                            Free Shipping & Return
                        </h3>
                        <p className='text-sm font-normal text-txt_Clr'>
                            Free shipping on orders over $99
                        </p>
                    </div>
                </div>
                <div className='px-5 flex gap-2 items-center'>
                    <Image src="/images/support.png" alt="support" width={40} height={33} />
                    <div>
                        <h3 className='text-base leading-4 font-semibold text-title_Clr'>
                            Customer Support 24/7
                        </h3>
                        <p className='text-sm font-normal text-txt_Clr'>
                            Instant access to perfect support
                        </p>
                    </div>
                </div>
                <div className='px-5 flex gap-2 items-center'>
                    <Image src="/images/secured.png" alt="secured" width={37} height={30} />
                    <div>
                        <h3 className='text-base leading-4 font-semibold text-title_Clr'>
                            100% Secured Payment
                        </h3>
                        <p className='text-sm font-normal text-txt_Clr'>
                            We ensure secured Payment!
                        </p>
                    </div>
                </div>
                <div className='px-5 flex gap-2 items-center'>
                    <Image src="/images/gurantee.png" alt="gurantee" width={38} height={35} />
                    <div>
                        <h3 className='text-base leading-4 font-semibold text-title_Clr'>
                            Money Back Guarantee
                        </h3>
                        <p className='text-sm font-normal text-txt_Clr'>
                            We ensure secured Payment!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBanner