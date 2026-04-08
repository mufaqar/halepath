import Banner from "@/components/products/banner";
import React from "react";
import Head from "next/head";
import OurCapabilities from "@/components/category/our-capabilities";
import Faqs from "@/components/faqs/faqs";
import CenterSlider from "@/components/slider/center-slider";
import { PortableText } from "@portabletext/react";
import ImageCarousel from "@/components/image-crousel/ImageCarousel";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { Qproducts, QSingleProducts } from "../../../sanity/queries";
import ProductTabs from "@/components/products/productTabs";

export default function Product({ productRes, productsRes }: any) {
  return (
    <>
      <Head>
        <title>{productRes?.metatitle}</title>
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
        <section className="mt-20 w-full mx-auto px-3 lg:px-0 overflow-hidden">
          <h2 className="text-2xl text-center mb-8 sm:text-3xl md:text-5xl font-bold">
            {productRes?.title} Gallery
          </h2>
          <ImageCarousel data={productRes?.gallery} />
        </section>
        <ProductTabs />
        <section className="bg-[#F5F5F5] py-20 mt-28">
          <div className="container mx-auto px-3 text-center">
            <Faqs col={2} data={productRes?.faqs} />
          </div>
        </section>
        <section className="mt-20">
          <div className="container mx-auto px-4">
            <span className="md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-4">
              Related Products
            </span>
          </div>
          <CenterSlider data={productsRes} />
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(pageContext: any) {
  const slug = pageContext.query.product;

  const productRes = await client.fetch(QSingleProducts, { slug });
  const productsRes = await client.fetch(Qproducts);

  const relatedProducts = productsRes?.filter((item: any) => (
    item?.categories?.some((c: any) => c.name === productRes?.categories?.[0]?.name)
  ))

  if (!productRes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productRes,
      productsRes: relatedProducts,
      preview: true,
    },
  };
}
