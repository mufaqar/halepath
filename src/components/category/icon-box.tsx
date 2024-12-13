import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";

const IconBox = ({ title, img, slug }: any) => {
    return (
        <div>
            <Link href={`/${slug?.current}`} className='text-base font-medium text-title_Clr flex flex-col items-center gap-4 py-9 rounded bg-[#FDFDFD] shadow-[0px_3px_2px_0px_rgb(23,43,77,8%)] hover:shadow-[0px_8px_5px_0px_rgb(23,43,77,8%)]'>
                <div>
                    <span className='text-6xl'>
                        <TbTruckDelivery />
                    </span>
                </div>
                <span> {title}</span>
            </Link>
        </div>
    )
}

export default IconBox