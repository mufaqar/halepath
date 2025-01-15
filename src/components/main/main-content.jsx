import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainContent = () => {
    return (
        <section className='max_content mt-14 py-8'>
            <main className="container mx-auto px-4 flex md:flex-row flex-col gap-7">
                <div className="md:w-1/2 w-full flex justify-center">
                    <div className="relative">
                        <figure className="flex absolute z-[-2] left-9 -top-8 justify-center">
                            <Image
                                src="/images/about-page/about-bg-img_2.png"
                                alt=""
                                width={530}
                                height={467}
                            />
                        </figure>
                        <figure className="flex justify-center absolute left-4 -top-4 z-[-1]">
                            <Image
                                src="/images/about-page/image_1.png"
                                alt=""
                                width={570}
                                height={467}
                            />
                        </figure>
                        <figure className="flex justify-center z-[3]">
                            <Image
                                src="/images/about-page/about-bg-img.png"
                                alt=""
                                width={606}
                                height={467}
                            />
                        </figure>
                        <div>
                            <Link href="#" className='bg-secondary hover:bg-white px-9 py-3 text-lg font-medium text-white hover:text-secondary rounded-full border-2 border-secondary flex items-center gap-2 mt-5 w-fit mx-auto'>
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 w-full max-h-[467px] h-full overflow-y-scroll scroll_Left'>
                    <p className='md:text-[29px] md:leading-[41px] text-lg font-normal text-title_Clr mb-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p className='md:text-[29px] md:leading-[41px] text-lg font-normal text-title_Clr mb-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p className='md:text-[29px] md:leading-[41px] text-lg font-normal text-title_Clr mb-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p className='md:text-[29px] md:leading-[41px] text-lg font-normal text-title_Clr mb-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p className='md:text-[29px] md:leading-[41px] text-lg font-normal text-title_Clr mb-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p className='md:text-[29px] md:leading-[41px] text-lg font-normal text-title_Clr mb-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </main>
        </section>
    )
}

export default MainContent