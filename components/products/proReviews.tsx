"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";

const ProReviews = () => {
    const sliderRef = useRef<any>(null);

    const testimonialsRes = [
        {
            review: "Amazing quality and fast delivery. Highly recommended!",
            name: "John Smith",
            location: "New York, USA",
            rating: 5,
        },
        {
            review: "Very professional service and great communication.",
            name: "Emma Johnson",
            location: "London, UK",
            rating: 4,
        },
        {
            review: "Loved the packaging and print quality. Will order again.",
            name: "Michael Brown",
            location: "Toronto, Canada",
            rating: 5,
        },
    ];

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section>
            <div>
                <div className="hale_container mx-auto flex md:flex-row flex-col gap-5 items-center">
                    <div className="md:w-1/3 w-full">
                        <h6 className="text-[#1C2E42] font-semibold flex gap-2 items-center">
                            Testimonials
                            <div className="sub_title_line"></div>
                        </h6>
                        <h2 className="h2 !text-left">
                            What Customers Says
                            <span className="text-[#47AFC3]">About Us</span>
                        </h2>
                    </div>

                    <div className="md:w-2/3 w-full">
                        <div className="pro_testi_slider">
                            <Slider ref={sliderRef} {...settings}>
                                {testimonialsRes.map((testimonial, index) => (
                                    <div key={index}>
                                        <div className="testi_box">
                                            <div className="testi_inner">
                                                <Image
                                                    src="/images/about-page/qoute-icon.png"
                                                    alt="Quote Icon"
                                                    className="w-[66px] h-[54px]"
                                                    width={66}
                                                    height={54}
                                                />

                                                <p className="mt-4">
                                                    {testimonial.review}
                                                </p>

                                                {/* Stars */}
                                                <div className="mt-2 flex gap-1">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <span
                                                            key={i}
                                                            className={
                                                                i <= testimonial.rating
                                                                    ? "text-[#FFAE00]"
                                                                    : "text-gray-300"
                                                            }
                                                        >
                                                            ★
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="mt-5 flex gap-2 items-center">
                                                    <figure className="testi_img">
                                                        <Image
                                                            src="/images/about-page/user.jpg"
                                                            alt="User"
                                                            className="rounded-full w-[49px] h-[49px]"
                                                            width={49}
                                                            height={49}
                                                        />
                                                    </figure>
                                                    <div>
                                                        <h6 className="testi_title">
                                                            {testimonial.name}
                                                        </h6>
                                                        <p className="text-[#1C1C1CE8]">
                                                            {testimonial.location}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* Arrows */}
                        <div className="flex justify-center gap-4 text-3xl mt-4">
                            <button
                                className="testi-prev hover:text-[#47AFC3]"
                                onClick={() => sliderRef.current?.slickPrev()}
                            >
                                &#8592;
                            </button>
                            <button
                                className="testi-next hover:text-[#47AFC3]"
                                onClick={() => sliderRef.current?.slickNext()}
                            >
                                &#8594;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProReviews;