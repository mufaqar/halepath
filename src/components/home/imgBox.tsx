import Image from 'next/image'
import React from 'react'

const ImgBox = ({ img, title, content }: any) => {
    return (
        <div className='border border-[#9C9C9CEB] rounded-[32px]'>
            <div>
                <Image src={img} alt={img} width={292} height={226} className='w-full h-full object-cover object-center' />
            </div>
            <div className='md:p-8 p-6'>
                <h3 className='md:text-[31px] md:leading-normal text-2xl font-semibold text-title_Clr mb-6'>
                    {title}
                </h3>
                <p className='md:text-xl text-lg font-normal text-title_Clr'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default ImgBox