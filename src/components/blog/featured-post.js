import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const Featured_Posts = ({ data }) => {
    return (
        <div className='shadow-[-1px_3px_10px_0px_rgba(0,0,0,0.06)]'>
            <div className='h-[264px]'>
                <Image src={data?.image?.asset?.url} alt='Featured' width={480} height={264} className='w-full h-full object-cover object-center' />
            </div>
            <div className='md:p-7 p-5'>
                <p className='text-sm font-semibold text-secondary/80 bg-[#F1F5F9] px-2 py-1 rounded-lg w-fit'>
                 {data?.Category?.name}
                </p>
                <h4>
                    <Link href={`/blog/${data?.slug?.current}`} className='md:text-xl text-lg font-bold text-black inline-flex my-5'>
                        {data?.title}
                    </Link>
                </h4>
                <p>
                    <Link href={`/blog/${data?.slug?.current}`} className='text-base font-normal text-secondary inline-flex items-center gap-3'>
                        Read More <FaArrowRightLong />
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Featured_Posts