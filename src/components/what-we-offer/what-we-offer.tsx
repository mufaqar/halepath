import Image from 'next/image'
import React from 'react'

const WhatWeOffer = () => {
  return (
    <section className="mt-[60px]">
    <div className="container mx-auto px-4">
      <h6 className="text-[#1C2E42] font-semibold flex gap-2 items-center">
        What We Offer
        <div className="h-[3px] bg-[#1C2E42] w-16" />
      </h6>
      <h2 className="text-2xl lg:text-[43px] font-semibold leading-normal">
        Sustainable Products & Services That Drive Your Business Forward
      </h2>
    </div>
    <div className="offerbg bg-cover bg-no-repeat mt-60 border border-black">
      <div className="container mx-auto px-4">
        <div className="p-6 bg-white grid grid-cols-1 gap-5 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 mb-32 -mt-48 border">
          {[1, 2, 3, 4].map((item, idx) => (
            <div key={idx}>
              <Image
                src={`/images/about-page/o${idx + 1}.png`}
                alt=""
                width={344}
                className="w-full"
                height={344}
              />
              <div className="px-4 -mt-14 z-10 relative">
                <div className="border bg-white p-3 px-5">
                  <h5 className="flex group cursor-pointer md:text-xl lg:text-2xl font-medium justify-between border-b-[3px] py-3 pt-1 border-black">
                    Packaging
                    <Image
                      src="/images/about-page/li_move-up-right.svg"
                      alt=""
                      className="group-hover:scale-110 transition-all duration-300"
                      width={30}
                      height={30}
                    />
                  </h5>
                  <p className="mt-3 ">Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhatWeOffer