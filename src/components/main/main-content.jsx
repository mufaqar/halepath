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
      <main className="container mx-auto px-4 flex md:flex-row flex-col gap-[70px]">
        {/* Left side with instant image switching */}
        <div className="md:w-1/2 relative w-full">
          <div className="overflow-hidden h-[467px]">
            {images.map((src, index) => (
              <figure
                key={index}
                className={`absolute w-full rounded-2xl overflow-hidden h-full ${index === currentImageIndex ? "block" : "hidden"}`}
                style={{
                  top: 0,
                  left: 0,
                }}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full rounded-2xl scale-110"
                />
              </figure>
            ))}
            <figure className="">
              <Image
                src={'/images/about-page/about-bg-img_2.png'}
                alt={``}
                layout="fill"
                objectFit="cover"
                className="!w-[80%] mx-auto h-full absolute z-[-1] scale-105 !-top-10 rounded-3xl"
              />
            </figure>
            <figure className="">
              <Image
                src={'/images/about-page/image_1.png'}
                alt={``}
                layout="fill"
                objectFit="cover"
                className="!w-[90%] mx-auto h-full absolute z-[-1] scale-105 !-top-5 rounded-3xl"
              />
            </figure>
          </div>
          <div>
            <Link
              href="#"
              className="bg-secondary hover:bg-white px-9 py-3 text-lg font-medium text-white hover:text-secondary rounded-full border-2 border-secondary flex items-center gap-2 mt-5 w-fit mx-auto"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Right side with scrollable content */}
        <div
          className="md:w-1/2 w-full max-h-[467px] h-full overflow-y-scroll scroll_Left"
          onScroll={handleScroll}
          ref={scrollRef}
        >
          {Array?.from({ length: 6 }).map((_, index) => (
            <p
              key={index}
              className="md:text-[29px] md:leading-[41px] text-lg font-normal text-title_Clr mb-2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
          ))}
        </div>
      </main>
    </section>
  );
};

export default MainContent;
