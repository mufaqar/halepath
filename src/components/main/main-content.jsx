import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const MainContent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);

  const images = [
    "/images/about-page/about-bg-img_2.png",
    "/images/about-page/image_1.png",
    "/images/about-page/about-bg-img.png",
  ];

  const handleScroll = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement;
      const totalScrollableHeight = scrollHeight - clientHeight;

      // Calculate the current image index based on scroll
      const newIndex = Math.min(
        images.length - 1,
        Math.floor((scrollTop / totalScrollableHeight) * images.length)
      );

      setCurrentImageIndex(newIndex);
    }
  };

  return (
    <section className="max_content mt-14 py-8">
      <main className="hale_container hale_flex !flex-row !items-start">
        {/* Left side with instant image switching */}
        <div className="md:w-2/5 relative w-1/2">
          <div className="overflow-hidden sm:!h-[400px] !h-[220px]">
            {images.map((src, index) => (
              <figure
                key={index}
                className={`image-slide ${index === currentImageIndex ? "block" : "hidden"}`}>
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover rounded-2xl scale-110"
                />
              </figure>
            ))}
            <figure className="">
              <Image
                src={'/images/about-page/about-bg-img_2.png'}
                alt={``}
                layout="fill"
                objectFit="cover"
                className="!w-[80%] !-top-10 mx-auto sm:!h-[400px] !h-[220px] absolute z-[-1] scale-105 rounded-3xl !left-1/2 !-translate-x-1/2"
              />
            </figure>
            <figure className="">
              <Image
                src={'/images/about-page/image_1.png'}
                alt={``}
                layout="fill"
                objectFit="cover"
                className="!w-[90%] !-top-5 mx-auto sm:!h-[400px] !h-[220px] absolute z-[-1] scale-105 rounded-3xl !left-1/2 !-translate-x-1/2"
              />
            </figure>
          </div>
          <div class="sm:mt-10 mt-5 flex justify-center">
            <Link
              href="#"
              className="btn_secondry"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Right side with scrollable content */}
         <div className="relative md:w-3/5 w-1/2">
          <div
            className="w-full sm:!max-h-[400px] !max-h-[220px] overflow-y-scroll scroll_Left"
            onScroll={handleScroll}
            ref={scrollRef}
          >
            {Array?.from({ length: 6 }).map((_, index) => (
              <p className="slide_txt"
                key={index}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
            ))}
          </div>
          <div className="absolute right-0 left-3 bottom-0 bg-gradient-to-t from-white/90 via-white/80 to-transparent top-[60%]" />
        </div>
      </main>
    </section>
  );
};

export default MainContent;
