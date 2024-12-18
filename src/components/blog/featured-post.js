import React from 'react'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { convertTimestamp } from '@/utils'
import { FaArrowRightLong } from 'react-icons/fa6';

const Featured_Posts = ({ data }) => {
    console.log(data)
    return (
        <div className='shadow-[-1px_3px_10px_0px_rgba(0,0,0,0.06)]'>
            <div className='h-[264px]'>
                <Image src="/images/blog/blog5.png" alt='Featured' width={480} height={264} className='w-full h-full object-cover object-center' />
            </div>
            <div className='md:p-7 p-5'>
                <p className='text-sm font-semibold text-secondary/80 bg-[#F1F5F9] px-2 py-1 rounded-lg w-fit'>
                    Knowledge Base {data?.category}
                </p>
                <h4>
                    <Link href={`blogs/${data?.slug?.current}`} className='md:text-xl text-lg font-bold text-black inline-flex my-5'>
                        A Guide to Cannabis Seed Packaging: Everything You Need to Know
                    </Link>
                </h4>
                <p>
                    <Link href={`blogs/${data?.slug?.current}`} className='text-base font-normal text-secondary inline-flex items-center gap-3'>
                        Read More <FaArrowRightLong />
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Featured_Posts