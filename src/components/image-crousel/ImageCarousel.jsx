// components/ImageCarousel.js
'use client'; // If using Next.js App Router

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { urlForImage } from '../../../sanity/lib/image';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ImageCarousel = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div style={{ width: '100%', padding: '2rem 0', position: 'relative' }}>
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
      >
        <MdOutlineKeyboardArrowLeft/>
      </button>
      <button
        ref={nextRef}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
      >
        <MdOutlineKeyboardArrowRight/>
      </button>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[EffectCoverflow, Navigation]}
        style={{ width: '100%', height: '480px' }}
      >
        {data?.map((src, index) => (
          <SwiperSlide key={index}>
            <figure className='rounded-[32px] overflow-hidden'>
              <img
                src={urlForImage(src?.asset?._ref)?.url()}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '32px',
                }}
                className="h-[460px] scale-105"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
