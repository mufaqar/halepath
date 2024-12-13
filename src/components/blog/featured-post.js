import React from 'react'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import {convertTimestamp} from '@/utils'

const Featured_Posts = ({ data }) => {

    return (
        <div className='shadow-[0px_8px_5px_0px_rgb(23,43,77,8%)] hover:shadow-[0px_3px_2px_0px_rgb(23,43,77,8%)] rounded-lg'>
            <div>
                <Image src={data?.image?.asset?.url} alt='make-product' width={793} height={472} className='w-full h-full object-cover rounded-t-lg' />
            </div>
            <div className='p-4'>
                <Link href={`/blogs/${data?.slug?.current}`} className='md:text-2xl text-base font-medium text-title_Clr block w-fit'>
                    {data?.title}
                </Link>
                <p className='md:text-base text-sm font-medium text-txt_Clr'>
                    {convertTimestamp(data?._createdAt)}
                </p>
                <p className='mt-2 text-gray-500 font-light'>{data?.excerpt}</p>
            </div>
        </div>
    )
}

export default Featured_Posts