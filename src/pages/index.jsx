import Packaging_Style from '@/components/home/packaging-style'
import HowIt_work from '@/components/home/howit-work'
import Packing_Design from '@/components/home/packing-design'
import Why_ChooseUs from '@/components/home/why-choose'
import Testimonials from '@/components/home/testimonials'
import Faqs from '@/components/home/faqs'
import Get_Qoute from '@/components/home/get-qoute'
import { client } from '../../sanity/lib/client'
import { featuredproducts, Qcategories, Qfaqs, Qproducts, Qtestimonials } from '../../sanity/queries'
import MainSlider from '@/components/home/mainSlider'
import Image from 'next/image'
import Link from 'next/link'
import CategorySlider from '@/components/category/categorySlider'
import ProductSlider from '@/components/home/productSlider'
import Brands from '@/components/home/brands'
import BannerPageMiddel from '@/components/banner/banner'
import WhatWeOffer from '@/components/what-we-offer/what-we-offer'
import SliderFull from '@/components/slider/slider-full'
import TestimonialAndFaq from '@/components/testimonial/testimonial-and-faq'
import Instagram from '@/components/instagram/instagram'
import WhatWeDo from '@/components/home/what-we-do'
import Career from '@/components/home/career'
import Slider from 'react-slick'
import MainContent from '@/components/main/main-content'
import Head from 'next/head'
import MaskingImage from '@/components/masking-Image'
import CTA from '@/components/CTA'

export default function Home({ testimonialsRes, faqRes, categoriesRes, productsRes, featureproductsRes }) {
  const fproduct = productsRes?.filter((item) => item.featured === true)
  const settingDotsFalse = { ...settings, 'dots': false }
  const settingRtl = { ...settings, 'dots': false, rtl: true, }

  return (
    <>
      <Head>
        <title>Hale Path Packaging</title>
        <meta name="description" content="Hale Path Packaging" />
        <meta name="author" content="Hale Path Packaging" />
        <link rel="canonical" href="https://halepath.vercel.app" />
      </Head>
      <main className={``} >
        <MainSlider />
        <MainContent />
        <CategorySlider categoriesRes={categoriesRes} />
        <CTA />
        <ProductSlider productsRes={productsRes} title="Offset Printing" settings={settings} />
        <HowIt_work />
        <Brands />
        <BannerPageMiddel />
        <ProductSlider productsRes={productsRes} title="Corrugated Packaging" settings={settings} />
        <Get_Qoute />
        <WhatWeOffer />
        <Packaging_Style title="Flexible Packaging / Maylar bags"
          subtitle="Flexible Solutions, Unmatched Quality – Packaging That Sells Your Brand."
          data={categoriesRes} />
        <CTA />
        <SliderFull />
        <section className="bg-[#EAF6F9]">
          <Packaging_Style title="Print & Advertising & Office Supplies"
            subtitle="Start designing unique boxes with different styles, sizes, and choices. Custom rigid boxes or Kraft boxes for retail products and many more?We can help, Custom printing and packaging services ideas abound."
            data={categoriesRes} />
        </section>
        <WhatWeDo featureproductsRes={featureproductsRes} />
        <TestimonialAndFaq testimonialsRes={testimonialsRes} />
        <Faqs faqRes={faqRes} />
        <section class="px-4">
          {/* <Image src="/images/cta-ban.png" alt="about us"
            className="w-full"> */}
          <Image src="/images/cta-ban.png" alt="about us" width={1920} height={1080} className='w-full' />
        </section>
        <Instagram />
      </main>
    </>
  )
}



export async function getServerSideProps() {
  const testimonialsRes = await client.fetch(Qtestimonials);
  const faqRes = await client.fetch(Qfaqs);
  const categoriesRes = await client.fetch(Qcategories);
  const productsRes = await client.fetch(Qproducts);
  const featureproductsRes = await client.fetch(featuredproducts);
  return {
    props: {
      testimonialsRes, faqRes, categoriesRes, productsRes, featureproductsRes,
      preview: true
    }
  };
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
  cssEase: 'linear',
  pauseOnHover: true,
  swipeToSlide: true,
  draggable: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}