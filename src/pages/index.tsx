import Packaging_Style from '@/components/home/packaging-style'
import HowIt_work from '@/components/home/howit-work'
import Packing_Design from '@/components/home/packing-design'
import Why_ChooseUs from '@/components/home/why-choose'
import Testimonials from '@/components/home/testimonials'
import Faqs from '@/components/home/faqs'
import Get_Qoute from '@/components/home/get-qoute'
import { client } from '../../sanity/lib/client'
import { Qcategories, Qfaqs, Qproducts, Qtestimonials } from '../../sanity/queries'
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
import MainContent from '@/components/main/main-content'

export default function Home({ testimonialsRes, faqRes, categoriesRes, productsRes }: any) {
  const fproduct = productsRes?.filter((item: any) => item.featured === true)
  return (
    <main className={``} >
      <MainSlider />
      <MainContent />
      <CategorySlider />
      <section className='bg-secondary py-7'>
        <div className='container mx-auto px-4 flex md:flex-row flex-col items-center gap-7 justify-between'>
          <div className='md:w-2/3 w-full flex flex-wrap items-center gap-3'>
            <p className='md:text-xl text-lg font-bold text-white mr-4'>
              Need More This Special Year?
            </p>
            <p className='md:text-3xl text-xl font-normal text-primary'>30%</p>
            <p className='md:text-3xl text-xl font-normal text-white'>
              Discount Bulk Shopping
            </p>
          </div>
          <div className='md:w-1/3 w-full'>
            <Link href="#" className='bg-primary hover:bg-white px-5 py-4 text-lg font-medium text-white hover:text-primary rounded-full border-2 border-primary flex w-fit ml-auto md:mr-0 mr-auto items-center gap-2'>
              Order Now
            </Link>
          </div>
        </div>
      </section>
      <ProductSlider title="Our Latest Products"
        settings={
          {
            dots: true,
            arrows: false,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 4,
            speed: 500,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
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
          }} />
      <HowIt_work />
      <Brands />
      <BannerPageMiddel />
      <ProductSlider title={undefined}
        settings={
          {
            dots: false,
            arrows: false,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            rows: 2,
            slidesPerRow: 4,
            speed: 500,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  rows: 2,
                  slidesPerRow: 4,
                  infinite: true,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  rows: 2,
                  slidesPerRow: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  rows: 2,
                  slidesPerRow: 2,
                  slidesToScroll: 1
                }
              }
            ]
          }} />
      <Get_Qoute />
      <WhatWeOffer />
      <SliderFull />
      <Packaging_Style data={categoriesRes} />
      <WhatWeDo />
      <TestimonialAndFaq />
      <Career />
      <Instagram />
    </main>
  )
}



export async function getServerSideProps() {
  const testimonialsRes = await client.fetch(Qtestimonials);
  const faqRes = await client.fetch(Qfaqs);
  const categoriesRes = await client.fetch(Qcategories);
  const productsRes = await client.fetch(Qproducts);
  return {
    props: {
      testimonialsRes, faqRes, categoriesRes, productsRes,
      preview: true
    }
  };
}