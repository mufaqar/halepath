import Link from "next/link";
import React from "react";
import ImgBox from "./imgBox";

const WhatWeDo = ({ data }: any) => {
    const Service = data?.service;
  return (
    <section className="py-16">
      <div className="hale_container">
        <h2 className="h2 md:!mb-5">{data.title}</h2>
        <p className="md:text-xl text-base font-normal text-title_Clr text-center max-w-[880px] mx-auto">
          {data.subtitle}{" "}
        </p>
        <Link
          href="/products"
          className="btn_secondry flex items-center gap-2 sm:mt-12 mt-6 w-fit mx-auto"
        >
          See All Products
        </Link>
      </div>
      <div className="hale_container flex md:flex-row flex-col lg:gap-40 gap-7 mt-10">
        <div className="md:w-1/2 w-full flex md:flex-row flex-col items-start gap-7 [&>*:nth-child(1)]:md:-mt-40">
          <ImgBox
            img={Service[0]?.image.node.mediaItemUrl}
            title={Service[0].title}
            content={Service[0].content}
            slug={Service[0].servicelink}
          />
          <ImgBox
            img={Service[1]?.image.node.mediaItemUrl}
            title={Service[1].title}
            content={Service[1].content}
            slug={Service[1].servicelink}
          />
        </div>
        <div className="md:w-1/2 w-full flex md:flex-row flex-col items-start gap-7 [&>*:nth-child(2)]:md:-mt-40">
          <ImgBox
            img={Service[2]?.image.node.mediaItemUrl}
            title={Service[2].title}
            content={Service[2].content}
            slug={Service[2].servicelink}
          />
          <ImgBox
            img={Service[3]?.image.node.mediaItemUrl}
            title={Service[3].title}
            content={Service[3].content}
            slug={Service[3].servicelink}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
