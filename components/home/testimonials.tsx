import React from 'react'
import { FaStar } from 'react-icons/fa'

function Testimonials({ data }: any) {
    return (
        <section className='py-16 bg-[#F7F7F7]'>
            <div className='container mx-auto px-4'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-7'>
                    {
                        data?.map((t: any, i: number) => {
                            return (
                                <div key={i} className='bg-white py-14 lg:px-12 px-5 rounded-[10px] shadow-[0_4px_63px_0_rgba(0,0,0,0.1)] hover:shadow-none'>
                                    <div>
                                        <h3 className='text-xl font-semibold text-title_Clr mb-4'>
                                            {t.name}
                                        </h3>
                                        <p className='text-base font-normal text-txt_Clr'>
                                            {t.review}
                                        </p>
                                    </div>
                                    <ul className='flex gap-1.5 mt-5'>
                                        <li>
                                            <FaStar className="text-orange-400" />
                                        </li>
                                        <li>
                                            <FaStar className="text-orange-400" />
                                        </li>
                                        <li>
                                            <FaStar className="text-orange-400" />
                                        </li>
                                        <li>
                                            <FaStar className="text-orange-400" />
                                        </li>
                                        <li>
                                            <FaStar className="text-orange-400" />
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Testimonials