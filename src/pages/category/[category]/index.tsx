import React from "react";
import Head from "next/head";
import Image from "next/image";
import Qoute_Form from "@/components/category/qoute-form";
import CenterSlider from "@/components/slider/center-slider";
import Link from "next/link";
import OurCapabilities from "@/components/category/our-capabilities";
import Faqs from "@/components/faqs/faqs";
import { client } from "../../../../sanity/lib/client";
import {
  Qproducts,
  QproductsByCategory,
  QSingleCategory,
} from "../../../../sanity/queries";
import { PortableText } from "@portabletext/react";
import CategoriesProducts from "./categories-products";
import FormTabs from "@/components/formTabs";

export default function Category({ categoryRes, productsRes }: any) {
  const slider = React.useRef<any>(null);

  return (
    <>
      <Head>
        <title>{categoryRes?.metatitle}</title>
        <meta name="description" content={categoryRes?.metadescription} />
        <meta name="subject" content="products" />
        <meta name="copyright" content="Halepath" />
        <meta name="language" content="En" />
        <meta name="robots" content="index,follow" />
        <meta name="subtitle" content={categoryRes?.metadescription} />
        <meta name="target" content={categoryRes?.metatitle} />
      </Head>

      <main className="py-10 lg:py-20">
        <div className="hale_container grid items-center md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 xl:gap-[70px]">
          <div className="h-full">
            <Image
              src={
                categoryRes?.image?.asset?.url ||
                categoryRes?.feature_image?.asset?.url
              }
              alt=""
              width={651}
              height={375}
              className="img-full rounded-[22px]"
            />
          </div>
          <div>
            <h4 className="font-bold text-3xl lg:text-5xl">
              {categoryRes?.name}
            </h4>
            <p className="xl:text-[19px] mt-4">{categoryRes?.excerpt}</p>
            <FormTabs productName={categoryRes?.name} productPrice={650} />
          </div>
        </div>
      </main>
      <CategoriesProducts productsRes={productsRes} />
      <section className="bg-[#F5F5F5] py-20 mt-28">
        <div className="container mx-auto px-3 text-center">
          <Faqs col={2} data={categoryRes.faqs} />
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
  // const productsRes2 = await client.fetch(QproductsByCategory, { slug });

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
