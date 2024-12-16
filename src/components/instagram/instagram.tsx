import Image from "next/image";
import React from "react";

const Instagram = () => {
  return (
    <section className="bg-[#EAF6F9] pt-14 px-4">
      <h2 className="text-3xl sm:text-[43px] lg:leading-[50px] mt-5 font-semibold leading-normal text-center">
        Instagram Posts
      </h2>
      <div className="mt-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="">
          <Image
            src="/images/about-page/i1.png"
            alt=""
            width={399}
            height={399}
            className="w-full h-full"
          />
        </div>
        {[1, 2, 3, 4].map((item:any, idx) => (
          <div className="" key={idx}>
            <Image
              src={`/images/about-page/o${idx + 1}.png`}
              alt=""
              className="w-full h-full"
              width={399}
              height={399}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instagram;
