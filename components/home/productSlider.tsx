'use client'
import Slider from "react-slick";
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

import MaskingImage from "../masking-Image";

export default function ProductSlider({ title, settings, productsRes }:any) {

  return (
    <section className="py-12">
      <div className="hale_container flex flex-col justify-center items-center">
        {title && <h4 className="sub_title">
          <span> Our Products </span>
          <span className="sub_title_line"></span>
        </h4>}
        {title && <h2 className="h2">
          {title}
        </h2>}
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {productsRes?.map((item:any, idx:number ) => {
            return <MaskingImage key={idx} data={item} />
          })}
        </Slider>
      </div>
      {title && <Link href="/all-offset-printing" className="btn_secondry flex items-center gap-2 sm:mt-12 mt-6 w-fit mx-auto">
        See All {title}
      </Link>}
    </section>
  );
}