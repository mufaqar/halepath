import React from 'react'

function Technical_Specs({ mailerbox }: any) {
    return (
        <section className='py-16 bg-[#F7F7F7]'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                        Technical Specs: Mailer Boxes
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr mt-5'>
                        An overview of the standard customizations available for corrugated mailer boxes.
                    </p>
                </div>
                <div className='divide-y'>
                    {
                        mailerbox?.map((item: any, idx: number) => {
                            return (
                                <>
                                    <div className='flex lg:flex-row flex-col gap-7 items-center py-7' key={idx}>

                                        {
                                            item?.list?.map((d: any, i: number) => (
                                                <div className='lg:w-1/3 w-full' key={i}>
                                                    {
                                                        i === 0 ? <h3 className='md:text-3xl text-2xl font-medium text-title_Clr mb-3'>
                                                            {d.title}
                                                        </h3> : <p className='text-base font-normal text-txt_Clr'>
                                                            E-flute
                                                        </p>
                                                    }
                                                    <p className='text-base font-normal text-txt_Clr'>{d?.content}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>

                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Technical_Specs