import React from "react";
import Head from "next/head";
import Image from "next/image";
import Qoute_Form from "@/components/category/qoute-form";
import CenterSlider from "@/components/slider/center-slider";
import Link from "next/link";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import OurCapabilities from "@/components/category/our-capabilities";
import Faqs from "@/components/faqs/faqs";
import { client } from "../../../../sanity/lib/client";
import { Qproducts, QSingleCategory } from "../../../../sanity/queries";

export default function Category({ categoryRes, productsRes }: any) {
  console.log("🚀 ~ Category ~ productsRes:", categoryRes);
  const slider = React.useRef<any>(null);

  return (
    <>
      <Head>
        <title>{categoryRes?.metatitle}</title>
        <meta name="keywords" content={categoryRes?.metatags} />
        <meta name="description" content={categoryRes?.metadescription} />
        <meta name="subject" content="products" />
        <meta name="copyright" content="packhoop" />
        <meta name="language" content="En" />
        <meta name="robots" content="index,follow" />
        <meta name="subtitle" content={categoryRes?.metadescription} />
        <meta name="target" content={categoryRes?.metatitle} />
      </Head>

      <main className="py-10 lg:py-20">
        <div className="container mx-auto px-3 grid items-center md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 xl:gap-[70px]">
          <div className="h-full">
            <Image
              src={categoryRes?.image?.asset?.url}
              alt=""
              width={651}
              height={375}
              className="w-full rounded-[22px] h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-3xl lg:text-5xl">
              {categoryRes?.name}
            </h4>
            <p className="xl:text-[19px] mt-4">{categoryRes?.excerpt}</p>
          </div>
        </div>
      </main>

      <section>
        <div className="container mx-auto px-3 ">
          <h2 className="font-extrabold text-4xl text-center">
            Get Custom Quote
          </h2>
        </div>
        <Qoute_Form />
      </section>

      <section className="mt-20">
        <div className="container mx-auto px-3 ">
          <h2 className="font-extrabold text-4xl text-center">
            Explore Packaging Solutions
          </h2>
        </div>
        <CenterSlider />
        <CenterSlider />
        <CenterSlider />
      </section>

      {categoryRes?.grid?.map((item: any, idx: number) => (
        <section className="my-20" key={idx}>
          <div className={`container md:flex items-center gap-5 md:gap-0 mx-auto px-3 ${idx%2 === 0 && "flex-row-reverse"}`}>
            <figure className="md:w-1/2">
              <Image
                src={item?.image?.asset?.url}
                alt=""
                width={678}
                height={424}
              />
            </figure>
            <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col">
              <h4 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
                {item.title}
              </h4>
              <p className="mb-7 text-center md:text-left">
               {item.info}
              </p>
              <Link
                href={item?.button_link}
                className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
      ))}

      <OurCapabilities data={categoryRes?.Our_capabilities}/>

      <section className="bg-[#F5F5F5] py-20 mt-28">
        <div className="container mx-auto px-3 text-center">
          <Faqs col={2} data={categoryRes?.faqs}/>
        </div>
      </section>
    </>
  );
}

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export async function getServerSideProps(pageContext: any) {
  const slug = pageContext.query.category;
  const categoryRes = await client.fetch(QSingleCategory, { slug });
  const productsRes = await client.fetch(Qproducts);

  if (categoryRes?.length < 1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      categoryRes,
      productsRes,
      preview: true,
    },
  };
}
