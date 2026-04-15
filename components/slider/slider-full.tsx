'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
//import { motion } from "framer-motion";

// const SliderFull = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (_: any, next: any) => setActiveIndex(next),
//   };

//   return (
//     <section className="about">
//       <Slider {...settings}>
//         {data?.map((item, idx) => (
//           <div className="!grid md:grid-cols-2" key={idx}>
//             <figure>
//               <Image
//                 src={item?.image}
//                 alt="Packaging Image"
//                 className="w-full object-cover h-[400px] md:h-[690px]"
//                 width={1023}
//                 height={772}
//               />
//             </figure>
//             <div
//               className={`bg-cover bg-no-repeat flex justify-center md:items-center flex-col px-10 md:px-5 pb-14 md:pb-10 py-10 p-5 
//               ${idx === 0 && "slider_bg"} 
//               ${idx === 1 && "slider_bg2"} 
//               ${idx === 2 && "slider_bg3"}`}
//             >
//               <motion.div
//                 key={activeIndex} // Re-triggers animation on slide change
//                 className={`${idx !== 0 && "text-white"}`}
//               >
//                 <motion.h6
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   className="font-semibold text-xl relative w-fit"
//                 >
//                   Hale Path Packaging
//                   <motion.div
//                     initial={{ width: "100%", backgroundColor: '#fff' }}
//                     animate={{ width: 0, backgroundColor: '#f5f5f5' }}
//                     transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//                     className="inset-0 absolute bg-white"
//                   />
//                 </motion.h6>
//                 <motion.h2
//                   key={`title-${activeIndex}`} // Ensures re-animation on slide change
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   className="font-semibold relative my-2 xl:text-[100px] max-w-[580px] text-[50px] leading-[60px] lg:text-[70px] lg:leading-[80px] xl:leading-[105px]"
//                 >
//                   {item?.title}
//                   <motion.div
//                     initial={{ width: "100%", backgroundColor: '#fff' }}
//                     animate={{ width: 0, backgroundColor: '#f5f5f5' }}
//                     transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
//                     className="inset-0 absolute bg-white py-4 -bottom-3"
//                   />
//                 </motion.h2>
//                 <div className="flex mt-5">
//                   <motion.div
//                     key={`btn-${activeIndex}`} // Ensures re-animation on slide change
//                     initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
//                   >
//                     <Link
//                       href={item?.link}
//                       className="bg-[#1C2E42] text-white px-[35px] rounded-full font-medium text-[17px] py-[14px]"
//                     >
//                       Learn more
//                     </Link>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default SliderFull;

// const data = [
//   {
//     image: "/images/about-page/slider.png",
//     title: "Good Quality Packaging",
//     link: "#",
//   },
//   {
//     image: "/images/about-page/s1.png",
//     title: "Good Quality Packaging",
//     link: "#",
//   },
//   {
//     image: "/images/about-page/s2.webp",
//     title: "Good Quality Packaging",
//     link: "#",
//   },
// ];





export default function SliderFull() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  const slides = [
    {
      image: "/images/about-page/offset.jpeg",
      title: "Offset Printing",
      link: "/all-offset-printing",
      bg: "slider_bg",
      text: "text-white",
      desc: "Discover top-notch custom offset printing services for your packaging needs right here. We deliver sharp, vibrant colors on boxes and labels that make your products pop on shelves. Ideal for big orders, this method cuts costs while ensuring consistent quality across paperboard and cardstock. Count on us for precise details that boost your brand visibility in retail settings.",
    },
    {
      image: "/images/about-page/corrugated.jpeg",
      title: "Corrugated Packaging",
      link: "/all-corrugated-packaging",
      bg: "slider_bg2",
      text: "text-white",
      desc: "Get durable custom corrugated printing for boxes that protect and promote your goods. Our process adds strong designs to fluted materials, perfect for shipping. Enjoy lightweight options that resist crushing, with eco-friendly inks. Tailor sizes and graphics to fit your business.",
    },
    {
      image: "/images/about-page/flexible.jpeg",
      title: "Flexible Packaging / Mylar Bags",
      link: "/all-flexible-packaging",
      bg: "slider_bg3",
      text: "text-white",
      desc: "Explore flexible packaging with custom Mylar bags for freshness and style. These pouches block moisture and odors to keep contents safe. Add zippers for easy use, plus bold prints of your logo for standout presence. Great for snacks or cosmetics in various sizes.",
    },
    {
      image: "/images/about-page/print.jpeg",
      title: "Print & Advertising & Office Supplies",
      link: "/all-print-advertising",
      bg: "slider_bg2",
      text: "text-white",
      desc: "Find print, advertising, and office supplies with our custom services. We handle business cards, banners, and branded stationery to match your packaging. Quick turnaround on high-quality prints helps you market while stocking essentials like envelopes.",
    },
  ];

  const goToSlide = (index: number) => {
    if (!scrollRef.current) return;
    if (index < 0 || index >= slides.length) return;

    isAnimating.current = true;
    setCurrentIndex(index);

    scrollRef.current.scrollTo({
      left: scrollRef.current.children[index].clientWidth * index,
      behavior: "smooth",
    });

    setTimeout(() => {
      isAnimating.current = false;
    }, 700);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (evt: WheelEvent) => {
      if (isAnimating.current) {
        evt.preventDefault();
        return;
      }

      if (evt.deltaY > 0) {
        if (currentIndex < slides.length - 1) {
          evt.preventDefault();
          goToSlide(currentIndex + 1);
        }
      } else {
        if (currentIndex > 0) {
          evt.preventDefault();
          goToSlide(currentIndex - 1);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]);

  return (
    <main className="Main_hori slider-full" ref={scrollRef}>
      {slides.map((slide, idx) => (
        <section
          key={idx}
          className="panel bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="w-full grid md:grid-cols-2 justify-center gap-8 h-full">
            <figure className="h-full"></figure>

            <div className={`flex justify-center md:items-center flex-col h-full`}>
              <div
                className={`${slide.text} slider-content h-full bg-white/5 backdrop-blur-[10px] py-10 sm:p-10 p-5 rounded-lg`}
              >
                <h6 className="animate-slide">Hale Path Packaging</h6>

                <h2 className="animate-slide delay-200">
                  {slide.title}
                </h2>

                <p className="animate-slide delay-200 md:max-w-4/5">
                  {slide.desc}
                </p>

                <div className="flex mt-5 animate-slide delay-400">
                  <Link href={slide.link} className="btn_secondry">
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}