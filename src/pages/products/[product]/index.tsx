import Banner from "@/components/products/banner";
import React from "react";
import Head from "next/head";
import OurCapabilities from "@/components/category/our-capabilities";
import Faqs from "@/components/faqs/faqs";
import CenterSlider from "@/components/slider/center-slider";
import { client } from "../../../../sanity/lib/client";
import { Qfaqs, Qproducts, QSingleProducts } from "../../../../sanity/queries";
import { PortableText } from "@portabletext/react";
import ImageCarousel from "@/components/image-crousel/ImageCarousel";
import Link from "next/link";
import Image from "next/image";

export default function Product({ productRes, productsRes }: any) {
  return (
    <>
      <Head>
        <title>{productRes?.metatitle}</title>
        <meta name="keywords" content={productRes?.metatags} />
        <meta name="description" content={productRes?.metadescription} />
        <meta name="subject" content="products" />
        <meta name="copyright" content="packhoop" />
        <meta name="language" content="En" />
        <meta name="robots" content="index,follow" />
        <meta name="subtitle" content={productRes?.metadescription} />
        <meta name="target" content={productRes?.metatitle} />
      </Head>

      <main>
        <Banner data={productRes} />
        <section className="mt-20">
          <h2 className="text-2xl text-center mb-8 sm:text-3xl md:text-5xl font-bold">
            Custom Retail Boxes Gallery
          </h2>
          <ImageCarousel data={productRes?.gallery} />
        </section>

        {productRes?.grid?.map((item: any, idx: number) => (
          <section className="my-20" key={idx}>
            <div
              className={`container md:flex items-center gap-5 md:gap-0 mx-auto px-3 ${
                idx % 2 === 0 && "flex-row-reverse"
              }`}
            >
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
                <p className="mb-7 text-center md:text-left">{item.info}</p>
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

        <section className="pt-16">
          <h2 className="font-extrabold md:text-4xl text-2xl text-center text-title_Clr mb-5">
            Learn More About Custom Retail Boxes
          </h2>
          <div className="container px-3 desc_content mx-auto mt-5 overflow-y-scroll max_content max-h-[812px]">
            <PortableText value={productRes?.content} />
          </div>
        </section>

        <OurCapabilities data={productRes?.Our_capabilities} />

        <section className="bg-[#F5F5F5] py-20 mt-28">
          <div className="container mx-auto px-3 text-center">
            <Faqs col={2} data={productRes?.faqs} />
          </div>
        </section>
        <section className="mt-20">
          <div className="container mx-auto px-4">
            <h2 className="md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-4">
              Related Products
            </h2>
          </div>
          <CenterSlider data={productsRes}/>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(pageContext: any) {
  const slug = pageContext.query.product;

  const productRes = await client.fetch(QSingleProducts, { slug });
  const productsRes = await client.fetch(Qproducts);

  const relatedProducts = productsRes?.filter((item:any)=>(
      item?.categories.some((c:any) => c.name === productRes?.categories[0].name)
    ))

  if (!productRes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productRes,
      productsRes : relatedProducts,
      preview: true,
    },
  };
}
