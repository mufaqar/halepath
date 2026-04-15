import BannerPageMiddel from "@/components/banner/banner";
import CategorySlider from "@/components/category/categorySlider";
import Cta from "@/components/category/cta";
import Brands from "@/components/home/brands";
import Get_Qoute from "@/components/home/get-qoute";
import HowIt_work from "@/components/home/howit-work";
import MainSlider from "@/components/home/mainSlider";
import Packaging_Style from "@/components/home/packaging-style";
import ProductSlider from "@/components/home/productSlider";
import WhatWeDo from "@/components/home/what-we-do";
import Instagram from "@/components/instagram/instagram";
import MainContent from "@/components/main/main-content";
import SliderFull from "@/components/slider/slider-full";
import WhatWeOffer from "@/components/what-we-offer/what-we-offer";
import { getHomeData } from "@/lib/data/getHomeData";
import {
  getCategoriesData,
  getProductsByCategory,
  getProductsData,
} from "@/lib/data/getProductsData";

import Image from "next/image";

export default async function Home() {
  const homeInfo = await getHomeData();
  const Flexible = await getProductsByCategory("flexible-packaging");
  const Corrugated = await getProductsByCategory("corrugated-packaging");
  const productsRes = await getProductsData();
  const categoriesRes = await getCategoriesData();

  return (
    <>
      <main className={``}>
        <MainSlider />
        <MainContent />
        {/* <CategorySlider categoriesRes={categoriesRes} /> */}
        <Cta />

        <ProductSlider
          productsRes={productsRes}
          title="Offset Printing"
          settings={settings}
        />
        <HowIt_work />
        <Brands />
        <BannerPageMiddel />
        <ProductSlider
          productsRes={productsRes}
          title="Corrugated Packaging"
          settings={settings}
        />
        <Get_Qoute />
        <WhatWeOffer />
        <Packaging_Style
          title="Flexible Packaging / Maylar bags"
          subtitle="Flexible Solutions, Unmatched Quality – Packaging That Sells Your Brand."
          data={productsRes}
        />
        <Cta />
        <SliderFull />
        <section className="bg-[#EAF6F9]">
          <Packaging_Style
            title="Print & Advertising & Office Supplies"
            subtitle="Start designing unique boxes with different styles, sizes, and choices. Custom rigid boxes or Kraft boxes for retail products and many more?We can help, Custom printing and packaging services ideas abound."
            data={productsRes}
          />
        </section>
        {/* <WhatWeDo featureproductsRes={featureproductsRes} /> */}
        {/* <TestimonialAndFaq testimonialsRes={testimonialsRes} /> */}
        {/* <Faqs faqRes={faqRes} /> */}
        <section className="px-4">
          <Image
            src="/images/cta-ban.png"
            alt="about us"
            width={1920}
            height={1080}
            className="w-full"
          />
        </section>
        <Instagram />
      </main>
    </>
  );
}

const settings = {
  dots: false,
  arrows: false,
  className: "center",
  // centerMode: true,
  infinite: true,
  // centerPadding: "60px",
  slidesToShow: 5,
  autoplay: true,
  speed: 12000,
  cssEase: "linear",
  pauseOnHover: true,
  swipeToSlide: true,
  draggable: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
