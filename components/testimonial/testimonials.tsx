"use client";
import React from "react";
import Faqs from "../faqs/faqs";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import Slider from "react-slick";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const Testimonials = ({ testimonialsRes }: any) => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    prevArrow: (
      <button className="prev hover:text-[#47AFC3] absolute top-1/2 -translate-y-1/2 left-0">
        {" "}
        <FaChevronLeft />
      </button>
    ),
    nextArrow: (
      <button className="next hover:text-[#47AFC3] absolute top-1/2 -translate-y-1/2 right-0">
        {" "}
        <FaChevronRight />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="py-[60px]">
      <div className="hale_container flex md:flex-row flex-col gap-6">
        {/* Rating Summary (UNCHANGED) */}
        <div className="py-10 md:w-1/4 w-full bg-secondary text-center space-y-0.5 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold text-white">Excellent</h3>

          <ul className="flex gap-1 justify-center items-center text-sm">
            {Array.from({ length: 5 }, (_, index) => (
              <li
                key={index}
                className={index < 5 ? "text-[#FFAE00]" : "text-gray-300"}
              >
                <FaStar />
              </li>
            ))}
          </ul>

          <div className="flex md:flex-col flex-row justify-center sm:gap-0 gap-0.5">
            <p className="text-sm font-normal text-white">4.9 average </p>
            <p className="text-sm font-normal text-white">2,634 reviews</p>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="md:w-3/4 w-full relative px-5">
          <Slider {...settings} className="testimonials-slider">
            {testimonialsRes?.map((item: any, idx: number) => {
              const fullStars = Math.floor(item.rating);
              const halfStar = item.rating - fullStars >= 0.5;
              return (
                <div key={idx} className="px-2 w-full h-full">
                  <div className="w-full bg-white p-4 border shadow border-black/15 h-full flex flex-col justify-between min-h-[242px] sm:max-h-[242px]">
                    <div className="w-full">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-normal text-title_Clr">
                          {item.title}
                        </h3>

                        <ul className="flex gap-1 text-xs">
                          <li key="" className="text-[#FFAE00]">
                            <FaStar />
                          </li>
                          <li key="" className="text-[#FFAE00]">
                            <FaStar />
                          </li>
                          <li key="" className="text-[#FFAE00]">
                            <FaStar />
                          </li>
                          <li key="" className="text-[#FFAE00]">
                            <FaStar />
                          </li>
                          <li key="" className="text-[#FFAE00]">
                            <FaStar />
                          </li>
                        </ul>
                      </div>
                      <p className="text-base font-normal text-title_Clr mb-1 flex items-center gap-1.5">
                        <FaCircleCheck className="text-sm text-[#FFAE00]" />
                        {item.testimonialsInfo.customerType}
                      </p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item?.content || "",
                        }}
                        className="text-base font-normal text-title_Clr italic mb-5"
                      />

                      <p className="text-base font-normal text-title_Clr mb-5 flex items-center gap-1.5">
                        <FaCircleCheck className="text-sm text-[#FFAE00]" />
                        {item.testimonialsInfo.incentivized}
                      </p>
                      <p className="text-sm font-normal text-title_Clr">
                        {item.testimonialsInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
