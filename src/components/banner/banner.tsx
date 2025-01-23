import Link from 'next/link'
import React from 'react'

const BannerPageMiddel = () => {
  return (
    <section className="bg-cover mt-10 bg-no-repeat about_bg">
        <div className="container mx-auto px-4 pt-[110px]">
          <h2 className="text-white font-bold text-3xl md:text-5xl lg:text-[51px]">
            Corrugated Packaging
          </h2>
        </div>
        <div className="bg-[#1C2E42] py-10 pr-8 md:p-[46px] max-w-[90%] md:max-w-[80%] lg:max-w-[70%] rounded-tr-[140px] mt-[110px]">
          <div className="container mx-auto px-4">
            <h5 className="text-white font-bold text-xl md:text-[25px]">
              Hale Path Provide Best Packaging Services
            </h5>
            <p className="font-medium text-white text-xl md:text-[27px] mb-6 mt-2 leading-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's. Lorem Ipsum has
              been the industry's.
            </p>
            <Link
              href="/about-us"
              className="bg-[#53B6C9] px-[35px] rounded-full font-medium text-[17px] py-[14px]"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
  )
}

export default BannerPageMiddel