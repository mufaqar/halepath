import Link from 'next/link'
import React from 'react'

const BannerPageMiddel = () => {
  return (
    <section className="bg-cover mt-10 bg-no-repeat about_bg">
      <div className="hale_container sm:pt-[110px] pt-10">
        <h2 className="text-white font-bold text-2xl md:text-5xl lg:text-[51px]">
          Corrugated Packaging
        </h2>
      </div>
      <div className="bg-secondary/20 backdrop-blur-[10px] py-10 sm:pr-8 md:p-[46px] max-w-full md:max-w-[80%] lg:max-w-[70%] rounded-tr-[140px] sm:mt-[110px] mt-8">
        <div className="hale_container corru_content">
          <h5 className="">
            Hale Path Provide Best Packaging Services
          </h5>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's. Lorem Ipsum has
            been the industry's.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BannerPageMiddel