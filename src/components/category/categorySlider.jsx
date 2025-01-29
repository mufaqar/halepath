import Slider from "react-slick";
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Image from "next/image";
import MaskingImage from "../masking-Image";

export default function CategorySlider({ categoriesRes }) {
  const settings = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="bg-[#F5F5F5] py-20">
      <h2 className="md:text-[43px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-14">
        Our Latest Category
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {categoriesRes?.map((_item, idx) => {
            return <MaskingImage key={idx} data={_item}/>
          })}
        </Slider>
      </div>
    </section>
  );
}