import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurCapabilities = () => {
  return (
    <section className="container mx-auto px-3 mt-48">
      <h3 className="text-[#111827] font-bold text-2xl">Our Capabilities</h3>
      <div className="mt-12 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any, idx: number) => (
          <div
            key={idx}
            className="bg-[#EFEFEF] flex flex-col justify-center items-center px-1.5 py-[15px] rounded-[16px] "
          >
            <Image
              src="/images/category/glob.png"
              alt=""
              width={48}
              height={48}
            />
            <h6 className="text-[#111827] text-center text-xs mt-3">
              International Sourcing
            </h6>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <Link
          href="#"
          className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
        >
          Browse Our Catalogue
        </Link>
        <Link
          href="#"
          className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
        >
          View Company Profile
        </Link>
      </div>
    </section>
  );
};

export default OurCapabilities;
