import React, { useState } from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

function Faqs({data}:any) {

    const [open, setOpen] = useState<any>(0);
    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(null);
        }
        setOpen(id);
        //setDropdown(!dropdown)
        // console.log(id,open)
    };
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        How it works
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr text-center max-w-[880px] mx-auto mt-5'>
                        We’ve answered all the questions you may have before ordering a custom box. Each order is slightly different, so feel free to contact us if you have any other questions or concerns.
                    </p>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
                    {data?.map((faq: any, index: number) => (
                        <div key={index}>
                            <h3 className='md:text-2xl text-lg font-semibold text-title_Clr flex items-center cursor-pointer' onClick={() => handleFaq(index)}>
                                <FaCircleArrowRight className="text-secondary w-16" />
                                {faq?.question}
                            </h3>
                            <div className={`mt-3 md:pl-16 pl-10 `}>
                                <p className='md:text-lg text-base font-normal text-txt_Clr'>
                                    {faq?.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faqs