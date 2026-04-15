import React from 'react'

function OrderBox({ title, content }: any)  {
    return (
        <div className='bg-white py-10 lg:px-8 px-5 rounded-[10px] shadow-[0_4px_63px_0_rgba(0,0,0,0.1)] hover:shadow-none'>
            <div>
                <h3 className='text-xl font-semibold text-title_Clr my-4'>
                    {title}
                </h3>
                <p className='text-base font-normal text-txt_Clr'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default OrderBox