import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from 'next/image'
import { urlForImage } from "../../../sanity/lib/image";

const Product_Gallery = ({data}) => {

  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slider1, setSlider1] = useState(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 1000,
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
  };

  return (
    <div className="content">
      <div className="container">
        <Slider {...settings}
          asNavFor={nav1}
          ref={(slider) => setSlider1(slider)}
        >
          {data?.gallery?.map((item, idx) => (
            <div
              key={item.id}
              className={currentSlide === idx ? "active" : null}
              onClick={() => {
                slider1?.slickGoTo(idx)
              }}>
              <Image src={urlForImage(item?.asset?._ref).width(534)?.url()} alt={item.alt} width={435} height={365} className='w-full md:h-[480px] object-contain' />
            </div>
          ))}
        </Slider>
        <div className="thumb-wrapper">
          {data?.gallery?.map((item, idx) => (
            <div
              key={item.id}
              className={currentSlide === idx ? "active" : null}
              onClick={() => {
                slider1?.slickGoTo(idx)
              }}>
              <Image src={urlForImage(item?.asset?._ref).width(534)?.url()} alt={item.alt} width={180} height={180} className='w-full object-cover h-full' />
              {currentSlide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product_Gallery;


const AfroStyles = [
  {
    id: 1,
    alt: "product",
    src: "/images/product.png",
  },
  {
    id: 2,
    alt: "product1",
    src: "/images/product1.png",
  },
  {
    id: 3,
    alt: "product2",
    src: "/images/product2.png",
  },
  {
    id: 4,
    alt: "product3",
    src: "/images/product3.png",
  },
  {
    id: 5,
    alt: "product4",
    src: "/images/product4.png",
  },
]