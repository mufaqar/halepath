import Image from 'next/image'
import React from 'react'

function Get_Qoute() {
    return (
        <section className=''>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='bg-secondary py-10 px-5 flex items-center justify-center'>
                    <Image src="/images/get-qoute.png" alt='get-qoute' width={540} height={340} className='m-auto' />
                </div>
                <div className='bg-[#F7F7F7] py-10 px-5'>
                    <div className='max-w-[480px] mx-auto'>
                        <h2 className='text-2xl font-semibold text-title_Clr'>
                            Get Custom Quote
                        </h2>
                        <p className='text-sm font-medium text-title_Clr mt-2'>
                            Fill out the form to get in touch with our dedicated packaging consultant
                        </p>
                        <form className="grid w-full gap-5 items-center mt-5">
                            <div className="w-full flex flex-col">
                                <label htmlFor='name' className="text-sm font-medium leading-none hidden">Name</label>
                                <input
                                    className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                                    type="text"
                                    name="name"
                                    id='name'
                                    placeholder="Your Name" />
                                {/* {errors.name && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor='email' className="text-sm font-medium leading-none hidden">Email  Address</label>
                                <input
                                    className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                                    type="email"
                                    name="email"
                                    id='email'
                                    placeholder="Email  Address" />
                                {/* {errors.email && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor='phone' className="text-sm font-medium leading-none hidden">Your Contact</label>
                                <input
                                    className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                                    type="tel"
                                    name="phone"
                                    id='phone'
                                    placeholder="Your Contact" />
                                {/* {errors.phone && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                            <div className='w-full flex gap-3'>
                                <div className="w-3/4 flex flex-col">
                                    <label htmlFor='packing' className="text-sm font-medium leading-none hidden">Cosmetics Packaging</label>
                                    <select
                                        className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                                        name="packing"
                                        id='packing'>
                                        <option value="Cosmetics Packaging">Cosmetics Packaging </option>
                                        <option value="Cosmetics Box">Cosmetics Box</option>
                                    </select>
                                    {/* {errors.packing && <span className='text-xs text-red-500'>This field is required</span>} */}
                                </div>
                                <div className="w-1/4 flex flex-col">
                                    <label htmlFor='quantity' className="text-sm font-medium leading-none hidden">Quantity</label>
                                    <input
                                        className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                                        type="number"
                                        name="quantity"
                                        id='quantity'
                                        placeholder="Quantity *" />
                                    {/* {errors.quantity && <span className='text-xs text-red-500'>This field is required</span>} */}
                                </div>
                            </div>
                            <div className="w-full">
                                <label htmlFor='detail' className="text-sm font-medium leading-none hidden">Your Description</label>
                                <textarea
                                    className="text-sm font-medium text-txt_Clr bg-white px-4 py-3 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                                    id='detail'
                                    rows={5}
                                    placeholder="Write your description"></textarea>
                                {/* {errors.detail && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                            <div className="w-full">
                                <button type='submit' className="text-base font-semibold text-white bg-primary hover:bg-secondary px-4 py-3 rounded-[5px] w-full">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Get_Qoute