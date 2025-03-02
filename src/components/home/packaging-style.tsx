import React from "react";
import PackingBox from "./packingBox";
import { urlForImage } from "../../../sanity/lib/image";
import Slider from "react-slick";
import MaskingImage from "../masking-Image";

function Packaging_Style({ data }: any) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    // centerPadding: "60px",
    slidesToShow: 5,
    cssEase: "linear",
    speed: 12000,
    pauseOnHover: true,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="box-by-material" className="py-16 bg-[#EAF6F9]">
      <div className="px-0">
        <div className="mb-16">
          <h2 className="md:text-[51px] md:leading-normal text-3xl font-semibold text-title_Clr text-center">
            Explore Our Custom Printing and Packaging Design
          </h2>
          <p className="text-lg font-normal text-txt_Clr text-center md:w-5/6 mx-auto mt-5">
            Start designing unique boxes with different styles, sizes, and
            choices. Custom rigid boxes or Kraft boxes for retail products and
            many more?We can help, Custom printing and packaging services ideas
            abound.
          </p>
        </div>
        <Slider {...settings}>
          {data?.map((item: any, i: number) => (
            <MaskingImage key={i} data={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Packaging_Style;
