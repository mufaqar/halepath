import Image from 'next/image'
import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

function ContentBox({ Cstm_class, img, title, list }: any) {
    return (
        <div className={`flex lg:gap-24 gap-7 ${Cstm_class}`}>
            <div className='lg:w-1/2 w-full'>
                <Image src={img} alt='feature' width={580} height={440} className='w-full' />
            </div>
            <div className='lg:w-1/2 w-full'>
                <h3 className='text-2xl font-semibold text-title_Clr mb-4'>
                    {title}
                </h3>
                <ul className='grid gap-5'>
                    {
                        list?.map((l: any, i: any) => (
                            <li key={i}>
                                <h3 className='text-base font-semibold text-txt_Clr flex items-center'>
                                    <FaCircleArrowRight className="text-secondary w-10" />
                                    {l.title}
                                </h3>
                                <p className='text-base font-normal text-txt_Clr pl-10'>
                                    {l.content}
                                </p>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default ContentBox