import Slider from "react-slick";
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image"
import MaskingImage from "../masking-Image";

export default function ProductSlider({ title, settings, productsRes }) {

  return (
    <section className="py-12">
      {title && <h4 className="text-xl font-semibold text-title_Clr mb-4 text-center flex items-center justify-center gap-3">
        <span> Our Products </span>
        <span className="block border-b-2 border-title_Clr max-w-[61px] w-full"></span>
      </h4>}
      {title && <h2 className="md:text-[43px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-14">
        Our Latest Products
      </h2>}
      <div className="slider-container">
        <Slider {...settings}>
          {productsRes?.map((item, idx) => {
            return <MaskingImage key={idx} data={item}/>
          })}
        </Slider>
      </div>
      {title && <Link href="/products" className='bg-secondary hover:bg-white px-9 py-3 text-lg font-medium text-white hover:text-secondary rounded-full border-2 border-secondary flex items-center gap-2 mt-12 w-fit mx-auto'>
        See All Products
      </Link>}
    </section>
  );
}