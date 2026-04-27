"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

type GalleryNode = {
  mediaItemUrl: string;
  altText?: string;
};

type ProductData = {
  galleryImages?: {
    nodes: GalleryNode[];
  };
};

type Props = {
  data: ProductData;
};

const Product_Gallery = ({ data }: Props) => {
  const GalleryImages = data?.galleryImages?.nodes || [];

  const FeatureImage = GalleryImages[0]?.mediaItemUrl || "/images/product.png";

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    asNavFor: slider2,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const thumbSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: nav1,
    focusOnSelect: true,
    arrows: false,
    variableWidth: true,
  };

  return (
    <div className="content single">
      <div className="container">
        {/* MAIN SLIDER */}
        <Slider {...settings} ref={setSlider1}>
          {GalleryImages.map((item, idx) => (
            <div key={idx}>
              <Image
                src={item.mediaItemUrl}
                alt={item.altText || "product"}
                width={435}
                height={365}
                className="w-full h-full object-cover rounded-[12px] max-h-[605px]"
              />
            </div>
          ))}
        </Slider>

        {/* THUMBNAILS */}
        <Slider
          {...thumbSettings}
          ref={setSlider2}
          className="thumb-wrapper flex overflow-x-auto !justify-start singleproducts"
        >
          {GalleryImages.map((item, idx) => (
            <div
              key={idx}
              className={`group h-[150px] min-w-[150px] p-1 rounded-[10px] ${
                currentSlide === idx ? "active" : ""
              }`}
              onClick={() => slider1?.slickGoTo(idx)}
            >
              <Image
                src={item.mediaItemUrl}
                alt={item.altText || "thumb"}
                width={154}
                height={131}
                className="w-full group-hover:scale-105 rounded-[10px] transition-all duration-100 ease-linear object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product_Gallery;
