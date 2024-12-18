import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainContent = () => {
    return (
        <>
            <main className="container mx-auto px-4 grid mt-14 py-8 gap-10 xl:gap-0 items-center md:items-start lg:grid-cols-2">
                <div className="flex justify-center">
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
                <div>
                    <div className="border-l-[4px] pl-10 md:text-[29px] md:leading-tight text-lg font-normal text-title_Clr relative">
                        <p className="mb-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s.
                        </p>
                        <p className="mb-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s.
                        </p>
                        <div className="absolute h-[150px] w-[4px] bg-black top-0 -left-1" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainContent