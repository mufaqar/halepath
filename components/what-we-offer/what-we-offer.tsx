import Image from 'next/image'
import React from 'react'

const WhatWeOffer = () => {
  return (
    <section className="pt-[60px] bg-[#F5F5F5]">
      <div className="hale_container flex flex-col justify-center items-center">
        <h6 className="text-[#1C2E42] font-semibold flex gap-2 items-center">
          Sustainable Products & Services
          <div className="sub_title_line"></div>
        </h6>
        <h2 className="h2">
          Eco-Smart Packaging That Builds Stronger Brands and a Greener Future.

        </h2>
      </div>
      <div className="offerbg bg-cover bg-no-repeat sm:mt-44 mt-32 border">
        <div className="hale_container">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 sm:mb-32 mb-10 sm:-mt-48 -mt-36">

            {[1, 2, 3, 4].map((item, idx) => (
              <div key={idx} className='service_box ms:h-[520px] h-[380px] sm:p-5 p-2 bg-white/5 backdrop-blur-[10px]'>
                <div className="h-full w-full bg-no-repeat bg-center bg-cover flex items-end justify-end pt-6 pb-1"
                  style={{ backgroundImage: `url('/images/about-page/o${idx + 1}.png')` }} >
                  <div className="service_inner">
                    <div className="content">
                      <h5 className="group">
                        Packaging
                        <Image
                          src="/images/about-page/li_move-up-right.svg"
                          alt=""
                          className="group-hover:scale-110 transition-all duration-300"
                          width={30}
                          height={30}
                        />
                      </h5>
                      <p className="mt-3 text-white sm:text-sm text-xs">
                        We prioritise fully recyclable materials that support the circular economy. Paper and board packaging continually return to the supply chain, reducing waste and conserving resources. Our solutions are easy to recycle, align with UK recycling systems, and help brands lower their environmental footprint responsibly.
                      </p>
                    </div>
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