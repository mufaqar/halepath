// components/ImageCarousel.js
'use client'; // If using Next.js App Router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  const images = [
    '/images/about-page/slider.png',
    '/images/about-page/slider.png',
    '/images/about-page/slider.png',
    '/images/about-page/slider.png',
    '/images/about-page/slider.png',
    '/images/about-page/slider.png',
    '/images/about-page/slider.png',
    '/images/about-page/slider.png',

  ];

  return (
    <div style={{ width: '100%', padding: '2rem 0' }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true} // Always center the active slide
        slidesPerView={4} // Always show 5 slides (2 left, 2 right)
        loop={true} // Allow infinite looping
        coverflowEffect={{
          rotate: 0, // Disable rotation
          stretch: 0, // No extra space between slides
          depth: 100, // Control perspective depth
          modifier: 1, // Effect intensity
          slideShadows: false, // No shadows
        }}
        navigation={false} // Enable navigation buttons
        modules={[EffectCoverflow, Navigation]}
        style={{ width: '100%', height: '480px' }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <figure className=''>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '32px',
                  // boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                }}
                className='h-[460px]'
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
