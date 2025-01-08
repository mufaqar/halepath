import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";

const IconBox = ({ title, img, slug }: any) => {
    return (
        <div className='py-9 rounded-[8px] bg-[#F5F5F5] shadow-[0px_2px_4px_-2px_rgb(23,43,77,8%)]'>
            <Link href={`/categories/${slug?.current}`} className='text-base font-medium text-title_Clr flex flex-col items-center gap-1'>
                <div>
                    <Image src={img} alt='' width={64} height={64}/>
                </div>
                <p>{title}</p>
            </Link>
        </div>
    )
}

export default IconBox