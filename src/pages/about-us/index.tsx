import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from "react-icons/hi2";
import Instagram from "@/components/instagram/instagram";
import Faqs from "@/components/faqs/faqs";
import SliderFull from "@/components/slider/slider-full";

const AboutUs = () => {
  const slider = React.useRef<any>(null);

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
            <div className="flex justify-center mt-5">
              <Link
                href="#"
                className="bg-[#1C2E42] text-white px-[35px] rounded-full font-medium text-[17px] py-[14px]"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="border-l-[4px] pl-10 text-xl md:text-[25px]  xl:text-[29px] leading-normal relative">
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

      <section className="bg-cover mt-10 bg-no-repeat about_bg">
        <div className="container mx-auto px-4 pt-[110px]">
          <h2 className="text-white font-bold text-3xl md:text-5xl lg:text-[71px]">
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
              href=""
              className="bg-[#53B6C9] px-[35px] rounded-full font-medium text-[17px] py-[14px]"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

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
                <div>
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

      <SliderFull/>

      <section className="py-[60px] bg-[#F5F5F5]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div>
            <div className="max-w-[470px] mx-auto">
              <h6 className="text-[#1C2E42] font-semibold flex gap-2 items-center">
                Testimonials
                <div className="h-[3px] bg-[#1C2E42] w-16" />
              </h6>
              <h2 className="text-2xl lg:text-[43px] lg:leading-[50px] mt-5 font-semibold leading-normal">
                What Customers Says{" "}
                <span className="text-[#47AFC3]">About Us</span>
              </h2>
              <section className="testimonials">
                <Slider {...tsettings} ref={slider}>
                  {[1, 2, 3, 4].map((item, idx) => (
                    <div className="px-1 pb-4">
                      <div
                        className="p-8 bg-white mt-10 border shadow rounded-[19px]"
                        key={idx}
                      >
                        <Image
                          src="/images/about-page/qoute-icon.png"
                          alt=""
                          width={66}
                          height={54}
                        />
                        <p className="mt-4">
                          Lorem ipsum dolor sit amet. Qui ducimus beatae quo
                          galisum architecto 33 magnam quos. Quo ducimus ipsum
                          et atque voluptatem est beatae fugit. Sit odit
                          obcaecati cum maiores Quis.
                        </p>
                        <div className="mt-2 flex gap-1">
                          {[1, 2, 3, 4, 5]?.map((item, idx) => (
                            <FaStar className="text-[#FFAE00]" size={16} />
                          ))}
                        </div>
                        <div className="mt-5 flex gap-2 items-center">
                          <figure className="p-[2px] border-[1.5px] border-[#47AFC3] w-fit rounded-full overflow-hidden">
                            <Image
                              src="/images/about-page/user.jpg"
                              alt=""
                              width={49}
                              className="rounded-full"
                              height={49}
                            />
                          </figure>
                          <div>
                            <h6 className="font-semibold text-2xl text-[#1C1C1C]">
                              Marshall Cook
                            </h6>
                            <p className="text-[#1C1C1CE8]">Co founder</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </section>
              {/* arrows button  */}
              <div className="flex justify-center gap-2 text-4xl">
                <button
                  onClick={() => slider?.current?.slickPrev()}
                  className="hover:text-[#47AFC3]"
                >
                  <HiMiniArrowLongLeft />
                </button>
                <button
                  onClick={() => slider?.current?.slickNext()}
                  className="hover:text-[#47AFC3]"
                >
                  <HiMiniArrowLongRight />
                </button>
              </div>
            </div>
          </div>
          <Faqs/>
        </div>
      </section>

      {/* Instagram  */}
     <Instagram/>

    </>
  );
};

export default AboutUs;


var tsettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
