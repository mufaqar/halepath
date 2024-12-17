import Banner from "@/components/category/banner";
import Choose_Us from "@/components/category/choose-us";
import ContentBox from "@/components/category/contentBox";
import Cta from "@/components/category/cta";
import Cat_Faqs from "@/components/category/faqs";
import Get_Started from "@/components/category/get-started";
import Order_Process from "@/components/category/order-process";
import Technical_Specs from "@/components/category/technical-specs";
import DesignBox from "@/components/home/designBox";
import React from "react";
import { useRouter } from "next/router";
import { urlForImage } from "../../../sanity/lib/image";
import Head from "next/head";
import Image from "next/image";
import Qoute_Form from "@/components/category/qoute-form";
import CenterSlider from "@/components/slider/center-slider";
import Link from "next/link";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import OurCapabilities from "@/components/category/our-capabilities";
import Faqs from "@/components/faqs/faqs";

export default function Category({ categoryRes, productsRes, faqRes }: any) {
  console.log("🚀 ~ Category ~ productsRes:", productsRes);
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
              src="/images/category/category-banner.png"
              alt=""
              width={651}
              height={375}
              className="w-full rounded-[22px] h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-3xl lg:text-5xl">Lorem Ipsum</h4>
            <p className="xl:text-[19px] mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularized in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
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

      <section className="my-20">
        <div className="container grid items-center md:grid-cols-2 gap-5 md:gap-0 mx-auto px-3">
          <figure>
            <Image
              src="/images/category/why-us.png"
              alt=""
              width={678}
              height={424}
            />
          </figure>
          <div className="flex justify-center md:justify-start items-center md:items-start flex-col">
            <h4 className="text-[#111827] font-bold text-3xl text-center md:text-left mb-4">
              Why Us?
            </h4>
            <p className="mb-7 text-center md:text-left">
              Half Price Packaging offers wholesale discounts, low MOQs, free
              packaging design support, and free shipping services in the USA,
              Australia, and Canada. We only make high-quality designs and take
              pride in offering a client-centric approach and a proven history
              of 5000+ satisfied clients that has taken us to a 4.9 rating on
              TrustPilot, and a 4.6 rating on REVIEWS.io
            </p>
            <Link
              href="#"
              className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="my-20 container px-5 mx-auto relative">
        <Slider {...settings} ref={slider}>
          {[1, 2, 3, 4].map((item, idx) => (
            <div
              key={idx}
              className=" !grid items-center md:grid-cols-2 gap-5 md:gap-0 px-3"
            >
              <div className="flex justify-center md:justify-start items-center md:items-start flex-col">
                <h4 className="text-[#111827] font-bold text-3xl text-center md:text-left mb-4">
                  Get Prominent in the Market with Custom Retail Boxes!
                </h4>
                <p className="mb-7 text-center md:text-left">
                  Our premium quality retail box packaging with extensive
                  customizations in shapes, styles, sizes, and printing can be a
                  game-changer for your brand. We let you choose packaging
                  materials that are appropriate, economical, and eco-friendly.
                  The exquisite design, chic color combination, and perfect
                  branding technique are sure to boost your sales. Personalized
                  custom retail packaging boxes encourage you to develop brand
                  loyalty, so create something that appeals to your target
                  demographic while still including your brand visuals.
                </p>
                <Link
                  href="#"
                  className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
                >
                  Get Custom Quote
                </Link>
              </div>
              <figure>
                <Image
                  src="/images/category/why-us.png"
                  alt=""
                  width={678}
                  height={424}
                />
              </figure>
            </div>
          ))}
        </Slider>
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="absolute top-1/2 -translate-y-1/2 -left-0"
        >
          <MdKeyboardArrowLeft size={26} />
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="absolute top-1/2 -translate-y-1/2 -right-0"
        >
          <MdKeyboardArrowRight size={26} />
        </button>
      </section>

      <section>
        <h2 className="font-extrabold text-4xl text-center text-[#212529]">
          Learn More About Custom Retail Boxes
        </h2>
        <div className="container px-3 mx-auto mt-5">
          <h2 className="font-bold text-2xl">Lorem ipsum dolor</h2>
          <p className="text-xl mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit elittellus,
            luctus nec ullamc mattis pulvinar dapibus cras risus dui euismo et
            sapien molestie sollicitudin sodale dolor aliquam nec sagittis felis
            pellentesque ultricies. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit elittellus, luctus nec ullamc mattis pulvinar
            dapibus cras risus dui euismo et sapien molestie sollicitudin sodale
            dolor aliquam nec sagittis felis pellentesque ultricies.{" "}
          </p>
          <p className="text-xl mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit elittellus,
            luctus nec ullamc mattis pulvinar dapibus cras risus dui euismo et
            sapien molestie sollicitudin sodale dolor aliquam nec sagittis felis
            pellentesque ultricies. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit elittellus, luctus nec ullamc mattis pulvinar
            dapibus cras risus dui euismo et sapien molestie sollicitudin sodale
            dolor aliquam nec sagittis felis pellentesque ultricies.{" "}
          </p>
          <h2 className="font-bold text-2xl mt-3">Lorem ipsum dolor</h2>
          <p className="text-xl mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit elittellus,
            luctus nec ullamc mattis pulvinar dapibus cras risus dui euismo et
            sapien molestie sollicitudin sodale dolor aliquam nec sagittis felis
            pellentesque ultricies. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit elittellus, luctus nec ullamc mattis pulvinar
            dapibus cras risus dui euismo et sapien molestie sollicitudin sodale
            dolor aliquam nec sagittis felis pellentesque ultricies.{" "}
          </p>
          <p className="text-xl mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit elittellus,
            luctus nec ullamc mattis pulvinar dapibus cras risus dui euismo et
            sapien molestie sollicitudin sodale dolor aliquam nec sagittis felis
            pellentesque ultricies. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit elittellus, luctus nec ullamc mattis pulvinar
            dapibus cras risus dui euismo et sapien molestie sollicitudin sodale
            dolor aliquam nec sagittis felis pellentesque ultricies.{" "}
          </p>
        </div>
      </section>

      <OurCapabilities />

      <section className="bg-[#F5F5F5] py-20 mt-28">
        <div className="container mx-auto px-3 text-center">
          <Faqs col={2} />
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
