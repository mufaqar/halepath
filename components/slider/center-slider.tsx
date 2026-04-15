import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import MaskingImage from "../masking-Image";

const CenterSlider = ({ data, squareImage }: any) => {
  return (
    <section className="mt-10 overflow-x-hidden">
      <Slider {...settings}>
        {data?.map((item: any, idx: number) => (
          <MaskingImage key={idx} data={item} />

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
