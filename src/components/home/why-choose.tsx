import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Why_ChooseUs() {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        Why Choose Us?
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr text-center max-w-[800px] mx-auto mt-5'>
                        Accomplish Your Business Goals With Our Superior Service
                    </p>
                </div>
                <div className='flex md:flex-row flex-col justify-between items-center gap-7 py-7 mt-10 border-b border-[#DEDEDE]'>
                    <div className='md:w-fit w-full'>
                        <Image src="/images/dimension.png" alt="dimension" width={53} height={52} className='mx-auto' />
                        <h3 className='text-xl font-semibold text-txt_Clr text-center mt-1'>
                            Modern Design and Dimensions
                        </h3>
                    </div>
                    <div className='md:w-fit w-full'>
                        <Image src="/images/charges.png" alt="charges" width={57} height={53} className='mx-auto' />
                        <h3 className='text-xl font-semibold text-txt_Clr text-center mt-1'>
                            No Extra Charges
                        </h3>
                    </div>
                    <div className='md:w-fit w-full'>
                        <Image src="/images/delivery.png" alt="delivery" width={63} height={43} className='mx-auto' />
                        <h3 className='text-xl font-semibold text-txt_Clr text-center mt-1'>
                            Super-Fast Delivery
                        </h3>
                    </div>
                    <div className='md:w-fit w-full'>
                        <Image src="/images/distinct.png" alt="distinct" width={38} height={35} className='mx-auto' />
                        <h3 className='text-xl font-semibold text-txt_Clr text-center mt-1'>
                            Distinctive Finishes
                        </h3>
                    </div>
                </div>
                <div className='mt-10'>
                    <Link href="#" className='bg-primary hover:bg-secondary px-8 py-4 text-sm font-semibold text-white block w-fit mx-auto'>
                        Request for Quote
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Why_ChooseUs