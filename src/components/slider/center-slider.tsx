import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { urlForImage } from "../../../sanity/lib/image";

const CenterSlider = ({data}:any) => {
  return (
    <section className="mt-10 overflow-x-hidden">
      <Slider {...settings}>
        {data?.map((item:any, idx:number) => (
          <div key={idx} className="">
            <figure>
              <Image
                src={item?.image?.asset?.url}
                alt=""
                width={363}
                height={369}
                className="w-full"
              />
            </figure>
            <h4 className="text-xl text-center mt-6">{item?.title}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CenterSlider;

var settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: false,
        dots: false,
      },
    },
    {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          infinite: false,
          dots: false,
        },
      },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        infinite: false,
        dots: false,
      },
    },
  ],
};
