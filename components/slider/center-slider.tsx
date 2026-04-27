'use client';

import React, { useMemo } from "react";
import Slider from "react-slick";
import MaskingImage from "../masking-Image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CenterSlider = ({ data }: any) => {

  console.log("CenterSlider Data:", data); // Debugging log

  const settings = useMemo(() => ({
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
  }), []);

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