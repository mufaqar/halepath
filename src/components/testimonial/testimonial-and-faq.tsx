import React from "react";
import Faqs from "../faqs/faqs";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const TestimonialAndFaq = () => {
  const slider = React.useRef<any>(null);

  return (
    <section className="py-[60px] bg-[#F5F5F5]">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div>
          <div className="md:max-w-[470px] max-w-[350px] mx-auto">
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
                  <div className="px-1 pb-4" key={idx}>
                    <div
                      className="p-8 bg-white mt-10 border shadow rounded-[19px]" >
                      <Image
                        src="/images/about-page/qoute-icon.png"
                        alt=""
                        width={66}
                        height={54}
                      />
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet. Qui ducimus beatae quo
                        galisum architecto 33 magnam quos. Quo ducimus ipsum et
                        atque voluptatem est beatae fugit. Sit odit obcaecati
                        Sit odit obcaecati
                       
                      </p>
                      <div className="mt-2 flex gap-1">
                        {[1, 2, 3, 4, 5]?.map((item, idx) => (
                          <FaStar className="text-[#FFAE00]" size={16} key={idx} />
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
        <Faqs />
      </div>
    </section>
  );
};

export default TestimonialAndFaq;

var tsettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
