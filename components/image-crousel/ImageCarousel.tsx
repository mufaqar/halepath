"use client";

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const ImageCarousel = ({ data }:any) => {
  const sliderRef = useRef(null);
  // ✅ LIGHTBOX STATE
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const goNext = () => sliderRef.current?.slickNext();
  const goPrev = () => sliderRef.current?.slickPrev();

  // ✅ LIGHTBOX FUNCTIONS
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!data?.length) return null;

  return (
    <div className="relative w-full py-8">

      {/* SLIDER */}
      <Slider ref={sliderRef} {...settings} className="full_gallery">
        {data.map((image, index) => (
          <div key={index} className="px-2">
            <figure className="rounded-2xl h-[450px]">
              <Image
                src={images[index]}
                alt={`Slide ${index + 1}`}
                width={350}
                height={450}
                onClick={() => openLightbox(index)} // ✅ OPEN LIGHTBOX
                className="gallery-img cursor-pointer !h-full w-full object-cover rounded-2xl"
              />
            </figure>
          </div>
        ))}
      </Slider>

      {/* LIGHTBOX */}
      <div
        id="lightbox"
        className={`fixed inset-0 bg-black/90 ${
          isOpen ? "flex" : "hidden"
        } items-center justify-center z-[9999]`}
      >
        {/* Close */}
        <button
          id="lightbox-close"
          onClick={closeLightbox}
          className="absolute top-5 right-5 text-white text-3xl"
        >
          &times;
        </button>

        {/* Prev */}
        <button
          id="lightbox-prev"
          onClick={prevImage}
          className="absolute left-5 text-white text-3xl"
        >
          &#10094;
        </button>

        {/* Image */}
        <Image
          id="lightbox-img"
          src={images[currentIndex]}
          alt="lightbox"
          width={1000}
          height={800}
          className="max-h-[90%] max-w-[90%] object-contain rounded-xl"
        />

        {/* Next */}
        <button
          id="lightbox-next"
          onClick={nextImage}
          className="absolute right-5 text-white text-3xl"
        >
          &#10095;
        </button>
      </div>

      {/* ARROWS */}
      <button
        onClick={goPrev}
        className="gallery-prev text-white text-2xl leading-[0] h-[60px] w-[60px] rounded-full bg-primary hover:bg-secondary flex items-center justify-center cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out absolute left-5 top-1/2 -translate-y-1/2 z-10"
      >
        <FaArrowLeftLong />
      </button>

      <button
        onClick={goNext}
        className="gallery-next text-white text-2xl leading-[0] h-[60px] w-[60px] rounded-full bg-primary hover:bg-secondary flex items-center justify-center cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out absolute right-5 top-1/2 -translate-y-1/2 z-10"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default ImageCarousel;