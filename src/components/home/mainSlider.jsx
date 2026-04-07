import Slider from "react-slick";
import Link from 'next/link'
import React from 'react'

export default function MainSlider() {
  return (
    <section className="Main_slider">
      <div className="main-slider">
        <div className="w-full relative 2xl:h-[705px] md:h-[605px] overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 sm:w-[120vw] sm:h-[120vh] w-[220vw] h-[220vh] -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/dfViGz8LoZE?autoplay=1&mute=1&controls=0&loop=1&playlist=dfViGz8LoZE"
            allow="autoplay; fullscreen" frameBorder="0">
          </iframe>
          <div className="video_overlay">
            <div className="hale_container relative z-10">
              <div className="md:w-1/2 w-full">
                <h1 className="h1">
                  Custom Cardboard packaging solutions
                </h1>

                <p className="text-white sm:text-2xl text-lg font-medium mb-8">
                  UK-Manufactured Custom Packaging That Turns First-Time Buyers Into Loyal Customers
                </p>

                <Link href="/about-us" className="btn_primary">
                  Enquire Now <i className="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}