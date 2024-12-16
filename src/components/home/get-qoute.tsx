import Image from 'next/image'
import React from 'react'

function Get_Qoute() {
    return (
        <section className='md:py-28 py-24 relative bg-center bg-no-repeat bg-cover before:content-[""] before:absolute before:w-full before:bg-[url("/images/qoute-overlay.png")]  before:h-full before:top-0' style={{ backgroundImage: `url("/images/qoute-bg.png")` }}>
            <div className='container mx-auto px-4 relative z-10 flex md:flex-row flex-col gap-7'>
                <div className='md:w-1/2 w-full'>
                    <h2 className="md:text-5xl text-3xl font-bold text-white text-center mb-14">
                        Our Latest Products
                    </h2>
                </div>
                <div className='md:w-1/2 w-full'>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                        <span>Contact Us </span>
                        <span className="block border-b-2 border-white max-w-[61px] w-full"></span>
                    </h4>
                    <h2 className="md:text-4xl text-3xl font-bold text-white mb-14">
                        Request Your Any Query Now!
                    </h2>
                    <form className="grid w-full gap-3 items-center mt-5 bg-primary md:p-11 p-6 rounded-[19px]">
                        <div className='w-full flex md:flex-row flex-col gap-3'>
                            <div className="w-full flex flex-col">
                                <label htmlFor='fullname' className="text-sm font-medium leading-none hidden">Full Name</label>
                                <input
                                    className="text-lg leading-[59px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7 py-2 border border-transparent focus:border-secondary outline-none rounded-full w-full"
                                    type="text"
                                    name="fullname"
                                    id='fullname'
                                    placeholder="Full Name" />
                                {/* {errors.name && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor='phone' className="text-sm font-medium leading-none hidden">Your Contact</label>
                                <input
                                    className="text-lg leading-[59px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7 py-2 border border-transparent focus:border-secondary outline-none rounded-full w-full"
                                    type="tel"
                                    name="phone"
                                    id='phone'
                                    placeholder="Your Contact" />
                                {/* {errors.phone && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                        </div>
                        <div className='w-full flex md:flex-row flex-col gap-3'>
                            <div className="w-full flex flex-col">
                                <label htmlFor='email' className="text-sm font-medium leading-none hidden">Email  Address</label>
                                <input
                                    className="text-lg leading-[59px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7 py-2 border border-transparent focus:border-secondary outline-none rounded-full w-full"
                                    type="email"
                                    name="email"
                                    id='email'
                                    placeholder="Email  Address" />
                                {/* {errors.email && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor='product' className="text-sm font-medium leading-none hidden">Cosmetics Packaging</label>
                                <select
                                    className="text-lg leading-[59px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7 py-2 border border-transparent focus:border-secondary outline-none rounded-full w-full md:min-h-full min-h-[77px]"
                                    name="product"
                                    id='product'>
                                    <option value="select the Product">select the Product</option>
                                    <option value="Product1">Product1</option>
                                </select>
                                {/* {errors.product && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor='message' className="text-sm font-medium leading-none hidden">Your Message</label>
                            <textarea
                                className="text-lg font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7 py-2 border border-transparent focus:border-secondary outline-none rounded-[19px] w-full"
                                id='message'
                                rows={5}
                                placeholder="Write Your Message..."></textarea>
                            {/* {errors.message && <span className='text-xs text-red-500'>This field is required</span>} */}
                        </div>
                        <div className="w-full">
                            <input type='checkbox'
                                className="bg-transparent px-7 py-2 border-2 border-white focus:border-secondary outline-white mr-2"
                                name="acceptance"
                                id='acceptance' />
                            <label htmlFor='acceptance' className="md:text-lg md:leading-[59px] text-sm font-normal text-white inline-block">I Agree that my data is collected and Stored.</label>
                            {/* {errors.acceptance && <span className='text-xs text-red-500'>This field is required</span>} */}
                        </div>
                        <div className="w-full">
                            <button type='submit' className="text-lg leading-[59px] font-normal text-white bg-secondary px-7 py-2 border border-transparent focus:border-secondary outline-none rounded-full w-full">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Get_Qoute