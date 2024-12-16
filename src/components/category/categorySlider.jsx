import Slider from "react-slick";
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Image from "next/image";

export default function CategorySlider() {
  const settings = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
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
      <h2 className="md:text-5xl text-3xl font-bold text-title_Clr text-center mb-14">
        Our Latest Category
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {[0, 1, 2, 4, 5].map((_item, idx) => {
            return <div key={idx} className="w-fit p-4">
              <Image src="/images/category/1.png" alt="category1" width={363} height={375} />
              <Link href="#" className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8">
                Lorem Ipsum
              </Link>
            </div>
          })}
        </Slider>
      </div>
    </section>
  );
}