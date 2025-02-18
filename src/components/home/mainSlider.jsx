import Slider from "react-slick";
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

export default function MainSlider() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="Main_slider">
      <Slider {...settings}>
        {[0].map((_item, idx) => {
          return (
            idx === 0 ? <div className="video-container" key={idx}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="md:py-44 py-24 relative bg-center bg-no-repeat bg-cover before:content-[''] before:absolute before:w-full before:bg-gradient-to-r before:bg-transparent before:from-black/90 before:from-30% before:via-black/70 before:h-full before:top-0">
                <div className="container mx-auto px-4 relative z-10">
                  <div className="md:w-1/2 w-full">
                    <h1 className="md:text-6xl md:leading-tight text-3xl font-bold text-white mb-10">
                      Custom cardboard packaging solutions
                    </h1>
                    <Link
                      href="#"
                      className="bg-primary hover:bg-white px-5 py-4 text-lg font-medium text-white hover:text-primary rounded-full border-2 border-primary inline-flex items-center gap-2"
                    >
                      Enquire Now <FaChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
              : <div key={idx}>
                <div className='md:py-44 py-24 relative bg-center bg-no-repeat bg-cover before:content-[""] before:absolute before:w-full before:bg-gradient-to-r before:bg-transparent  before:from-black/90 before:from-30% before:via-black/70  before:h-full before:top-0' style={{ backgroundImage: `url("/images/banner.png")` }}>
                  <div className='container mx-auto px-4 relative z-10'>
                    <div className='md:w-1/2 w-full'>
                      <h1 className='md:text-6xl md:leading-tight text-3xl font-bold text-white mb-10'>
                        Custom cardboard packaging solutions
                      </h1>
                      <Link href="#" className='bg-primary hover:bg-white px-5 py-4 text-lg font-medium text-white hover:text-primary rounded-full border-2 border-primary inline-flex items-center gap-2'>
                        Enquire Now <FaChevronRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          )
        })}
      </Slider>
    </section >
  );
}