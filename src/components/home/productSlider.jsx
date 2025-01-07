import Slider from "react-slick";
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function ProductSlider({ title, settings }) {

  return (
    <section className="py-20">
      {title && <h4 className="text-xl font-semibold text-title_Clr mb-4 text-center flex items-center justify-center gap-3">
        <span> Our Products </span>
        <span className="block border-b-2 border-title_Clr max-w-[61px] w-full"></span>
      </h4>}
      {title && <h2 className="md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-14">
        Our Latest Products
      </h2>}
      <div className="slider-container">
        <Slider {...settings}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item, idx) => {
            return <div key={idx} className="w-fit p-4">
              <Image src="/images/category/1.png" alt="category1" width={363} height={375} className="mx-auto" />
              <Link href="#" className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8">
                Lorem Ipsum
              </Link>
            </div>
          })}
        </Slider>
      </div>
      {title && <Link href="#" className='bg-secondary hover:bg-white px-9 py-3 text-lg font-medium text-white hover:text-secondary rounded-full border-2 border-secondary flex items-center gap-2 mt-12 w-fit mx-auto'>
        See All Products
      </Link>}
    </section>
  );
}