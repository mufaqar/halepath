import React from 'react'
import OrderBox from './orderBox'

function Order_Process({ data }: any) {
    return (
        <section className='py-16 bg-[#F7F7F7]'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                        Mailer Box Ordering Process
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr mt-5'>
                        A simple, 6-step process for getting custom mailer boxes, with dedicated support and ongoing consulting every step of the way.
                    </p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-7 mt-10'>
                    {
                        data?.map((item: any, idx: number) => (
                            <OrderBox
                                key={idx}
                                title={item.title}
                                content={item.detail}
                            />
                        ))
                    }


                </div>
            </div>
        </section>
    )
}

export default Order_Process