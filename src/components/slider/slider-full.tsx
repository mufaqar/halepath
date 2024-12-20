import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const SliderFull = () => {
  return (
    <>
      <section className="about">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((item, idx) => (
            <div className="!grid md:grid-cols-2" key={idx}>
              <figure className="">
                <Image
                  src="/images/about-page/slider.png"
                  alt=""
                  className="w-full object-cover h-full"
                  width={1023}
                  height={772}
                />
              </figure>
              <div className="slider_bg bg-cover bg-no-repeat flex justify-center md:items-center flex-col px-10 md:px-5 pb-14 md:pb-10 py-10 p-5">
                <div>
                  <h6 className="text-[#1C2E42] font-semibold text-xl">
                    Hale Path Packaging
                  </h6>
                  <h2 className="font-semibold xl:text-[100px] text-[50px] leading-[60px] lg:text-[70px] lg:leading-[80px] xl:leading-[105px]">
                    Good
                    <br /> Quality <br /> Packaging
                  </h2>
                  <div className="flex mt-5">
                    <Link
                      href="#"
                      className="bg-[#1C2E42] text-white px-[35px] rounded-full font-medium text-[17px] py-[14px]"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default SliderFull;

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };