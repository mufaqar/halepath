import React from 'react'
import Steps from './steps'

function Get_Qoute() {
    return (
        <section className='md:py-14 py-10 relative bg-center bg-no-repeat bg-cover before:content-[""] before:absolute before:w-full before:bg-[url("/images/qoute-overlay.png")]  before:h-full before:top-0' style={{ backgroundImage: `url("/images/qoute-bg.png")` }}>
            <div className='container mx-auto px-4 relative z-10 flex md:flex-row flex-col gap-7'>
                <div className='md:w-1/2 w-full'>
                    <Steps />
                </div>
                <div className='md:w-1/2 w-full'>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                        <span>Contact Us </span>
                        <span className="block border-b-2 border-white max-w-[61px] w-full"></span>
                    </h4>
                    <h2 className="md:text-4xl text-3xl font-bold text-white mb-8">
                        Request Your Any Query Now!
                    </h2>
                    <form className="grid w-full gap-4 items-center mt-5 bg-primary md:p-8 p-6 rounded-[19px]">
                        <div className='w-full flex md:flex-row flex-col gap-4'>
                            <div className="w-full flex flex-col">
                                <label htmlFor='fullname' className="text-sm font-medium leading-none hidden">Full Name</label>
                                <input
                                    className="text-lg md:leading-[56px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7  border border-transparent focus:border-secondary outline-none rounded-full w-full"
                                    type="text"
                                    name="fullname"
                                    id='fullname'
                                    placeholder="Full Name" />
                                {/* {errors.name && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor='phone' className="text-sm font-medium leading-none hidden">Your Contact</label>
                                <input
                                    className="text-lg md:leading-[56px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7  border border-transparent focus:border-secondary outline-none rounded-full w-full"
                                    type="tel"
                                    name="phone"
                                    id='phone'
                                    placeholder="Your Contact" />
                                {/* {errors.phone && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                        </div>
                        <div className='w-full flex md:flex-row flex-col gap-4'>
                            <div className="w-full flex flex-col">
                                <label htmlFor='email' className="text-sm font-medium leading-none hidden">Email  Address</label>
                                <input
                                    className="text-lg md:leading-[56px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7  border border-transparent focus:border-secondary outline-none rounded-full w-full"
                                    type="email"
                                    name="email"
                                    id='email'
                                    placeholder="Email  Address" />
                                {/* {errors.email && <span className='text-xs text-red-500'>This field is required</span>} */}
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor='product' className="text-sm font-medium leading-none hidden">Cosmetics Packaging</label>
                                <select
                                    className="text-lg md:leading-[56px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7  border border-transparent focus:border-secondary outline-none rounded-full w-full md:min-h-[58px] h-[36px]"
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
                                className="text-lg pt-2 font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7  border border-transparent focus:border-secondary outline-none rounded-[19px] w-full"
                                id='message'
                                rows={3}
                                placeholder="Write Your Message..."></textarea>
                            {/* {errors.message && <span className='text-xs text-red-500'>This field is required</span>} */}
                        </div>
                        <div className="w-full">
                            <input type='checkbox'
                                className="bg-transparent px-7  border-2 border-white focus:border-secondary outline-white mr-2"
                                name="acceptance"
                                id='acceptance' />
                            <label htmlFor='acceptance' className="md:text-lg md:md:leading-[56px] text-sm font-normal text-white inline-block">I Agree that my data is collected and Stored.</label>
                            {/* {errors.acceptance && <span className='text-xs text-red-500'>This field is required</span>} */}
                        </div>
                        <div className="w-full">
                            <button type='submit' className="text-lg md:leading-[56px] font-normal text-white bg-secondary px-7  border border-transparent focus:border-secondary outline-none rounded-full w-full">
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