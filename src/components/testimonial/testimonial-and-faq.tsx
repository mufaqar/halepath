import React from "react";
import Faqs from "../faqs/faqs";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import Slider from "react-slick";
import { FaStar, FaRegStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const TestimonialAndFaq = ({ testimonialsRes }: any) => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    prevArrow: <button className="prev hover:text-[#47AFC3] absolute top-1/2 -translate-y-1/2 left-0"> <FaChevronLeft /></button>,
    nextArrow: <button className="next hover:text-[#47AFC3] absolute top-1/2 -translate-y-1/2 right-0"> <FaChevronRight /></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
    <section className="py-[60px]">
      <div className="hale_container flex md:flex-row flex-col gap-6">

        {/* Rating Summary (UNCHANGED) */}
        <div className="py-10 md:w-1/4 w-full bg-secondary text-center space-y-0.5 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold text-white">Excellent</h3>

          <ul className="flex gap-1 justify-center items-center text-sm">
            {[...Array(5)].map((_, i) => (
              <li key={i} className="text-[#FFAE00]">
                <FaStar />
              </li>
            ))}
          </ul>

          <div className="flex md:flex-col flex-row justify-center sm:gap-0 gap-0.5">
            <p className="text-sm font-normal text-white">4.82 average </p>
            <p className="text-sm font-normal text-white">2,634 reviews</p>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="md:w-3/4 w-full relative px-5">
          <Slider {...settings} className="testimonials-slider">

            {testimonials?.map((item, idx) => {
              const fullStars = Math.floor(item.rating);
              const halfStar = item.rating - fullStars >= 0.5;
              const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

              return (
                <div key={idx} className="px-2 w-full h-full">
                  <div className="w-full bg-white p-4 border shadow border-black/15 h-full flex flex-col justify-between min-h-[242px] sm:max-h-[242px]">
                    <div className="w-full">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-normal text-title_Clr">
                          {item.title}
                        </h3>

                        <ul className="flex gap-1 text-xs">
                          {[...Array(fullStars)].map((_, i) => (
                            <li key={`f-${i}`} className="text-[#FFAE00]">
                              <FaStar />
                            </li>
                          ))}

                          {halfStar && (
                            <li className="text-[#FFAE00]">
                              <FaStarHalfAlt />
                            </li>
                          )}

                          {[...Array(emptyStars)].map((_, i) => (
                            <li key={`e-${i}`} className="text-[#FFAE00]/50">
                              <FaRegStar />
                            </li>
                          ))}
                        </ul>
                    </div>
                      <p className="text-base font-normal text-title_Clr mb-1 flex items-center gap-1.5">
                        <FaCircleCheck className="text-sm text-[#FFAE00]" />
                        {item.customer_type}
                      </p>
                      <p className="text-base font-normal text-title_Clr italic mb-5">
                        {item.content}
                      </p>
                      <p className="text-base font-normal text-title_Clr mb-5 flex items-center gap-1.5">
                        <FaCircleCheck className="text-sm text-[#FFAE00]" />
                        {item.incentivized}
                      </p>
                      <p className="text-sm font-normal text-title_Clr">
                        {item.address}
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

export default TestimonialAndFaq;


const testimonials = [
  {
    title: "John Smith",
    content:
      "Great packaging quality and fast delivery. Highly recommended for businesses looking for reliable solutions.",
    customer_type: "Verified Customer",
    incentivized: "Incentivized Review",
    address: "London, UK",
    rating: 4.8,
  },
  {
    title: "Emma Watson",
    content:
      "Excellent customer support and premium box quality. The printing was sharp and vibrant.",
    customer_type: "Verified Customer",
    incentivized: "Organic Review",
    address: "Manchester, UK",
    rating: 5,
  },
  {
    title: "Ali Khan",
    content:
      "Very satisfied with the service. The team helped me finalize my packaging design easily.",
    customer_type: "Verified Customer",
    incentivized: "Incentivized Review",
    address: "Birmingham, UK",
    rating: 4.5,
  },
  {
    title: "Sarah Johnson",
    content:
      "Affordable pricing and amazing results. Will definitely order again.",
    customer_type: "Verified Customer",
    incentivized: "Organic Review",
    address: "Leeds, UK",
    rating: 4.2,
  },
];