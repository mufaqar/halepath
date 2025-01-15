import Slider from "react-slick";
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Image from "next/image";

export default function CategorySlider({ categoriesRes }) {
  const settings = {
    dots: false,
    arrows: false,
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
      <h2 className="md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-14">
        Our Latest Category
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {categoriesRes?.map((_item, idx) => {
            return <div key={idx} className="w-fit p-4">
              <Link href={"/categories/" + _item?.slug.current}><Image src={_item?.feature_image?.asset?.url} alt="category1" width={363} height={375} /></Link>
              <Link href={"/categories/" + _item?.slug.current} className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8">
                {_item?.name}
              </Link>
            </div>
          })}
        </Slider>
      </div>
    </section>
  );
}