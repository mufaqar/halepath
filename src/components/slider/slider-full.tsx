import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const SliderFull = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: any, next: any) => setActiveIndex(next),
  };

  return (
    <section className="about">
      <Slider {...settings}>
        {data?.map((item, idx) => (
          <div className="!grid md:grid-cols-2" key={idx}>
            <figure>
              <Image
                src={item?.image}
                alt="Packaging Image"
                className="w-full object-cover h-[400px] md:h-[690px]"
                width={1023}
                height={772}
              />
            </figure>
            <div
              className={`bg-cover bg-no-repeat flex justify-center md:items-center flex-col px-10 md:px-5 pb-14 md:pb-10 py-10 p-5 
              ${idx === 0 && "slider_bg"} 
              ${idx === 1 && "slider_bg2"} 
              ${idx === 2 && "slider_bg3"}`}
            >
              <motion.div
                key={activeIndex} // Re-triggers animation on slide change
                className={`${idx !== 0 && "text-white"}`}
              >
                <motion.h6
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="font-semibold text-xl relative w-fit"
                >
                  Hale Path Packaging
                  <motion.div
                    initial={{ width: "100%", backgroundColor: '#fff' }}
                    animate={{ width: 0, backgroundColor: '#f5f5f5' }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="inset-0 absolute bg-white"
                  />
                </motion.h6>
                <motion.h2
                  key={`title-${activeIndex}`} // Ensures re-animation on slide change
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="font-semibold relative my-2 xl:text-[100px] max-w-[580px] text-[50px] leading-[60px] lg:text-[70px] lg:leading-[80px] xl:leading-[105px]"
                >
                  {item?.title}
                  <motion.div
                    initial={{ width: "100%", backgroundColor: '#fff' }}
                    animate={{ width: 0, backgroundColor: '#f5f5f5' }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    className="inset-0 absolute bg-white py-4 -bottom-3"
                  />
                </motion.h2>
                <div className="flex mt-5">
                  <motion.div
                    key={`btn-${activeIndex}`} // Ensures re-animation on slide change
                    initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
                  >
                    <Link
                      href={item?.link}
                      className="bg-[#1C2E42] text-white px-[35px] rounded-full font-medium text-[17px] py-[14px]"
                    >
                      Learn more
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderFull;

const data = [
  {
    image: "/images/about-page/slider.png",
    title: "Good Quality Packaging",
    link: "#",
  },
  {
    image: "/images/about-page/s1.png",
    title: "Good Quality Packaging",
    link: "#",
  },
  {
    image: "/images/about-page/s2.webp",
    title: "Good Quality Packaging",
    link: "#",
  },
];
