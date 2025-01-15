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
import Slider from 'react-slick'

export default function Home({ testimonialsRes, faqRes, categoriesRes, productsRes }) {
  const fproduct = productsRes?.filter((item) => item.featured === true)
  const settingDotsFalse = { ...settings, 'dots': false }

  return (
    <main className={``} >
      <MainSlider />
      <section className='py-14 max_content'>
        <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7'>
          <div className='md:w-1/2 w-full'>
            <Image src="/images/about-img.png" alt='about-img' width={604} height={467} />
            <Link href="#" className='bg-secondary hover:bg-white px-9 py-3 text-lg font-medium text-white hover:text-secondary rounded-full border-2 border-secondary flex items-center gap-2 mt-5 w-fit mx-auto'>
              About Us
            </Link>
          </div>
          <div className='md:w-1/2 w-full max-h-[467px] h-full overflow-y-scroll '>
            <p className='md:text-2xl text-lg font-normal text-title_Clr mb-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p className='md:text-2xl text-lg font-normal text-title_Clr mb-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p className='md:text-2xl text-lg font-normal text-title_Clr mb-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p className='md:text-2xl text-lg font-normal text-title_Clr mb-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p className='md:text-2xl text-lg font-normal text-title_Clr mb-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p className='md:text-2xl text-lg font-normal text-title_Clr mb-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </section>

      <CategorySlider categoriesRes={categoriesRes} />

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

      <ProductSlider productsRes={productsRes} title="Our Latest Products" settings={settings} />
      <HowIt_work />
      <Brands />
      <BannerPageMiddel />

      <section className='my-24'>
        <div className="slider-container">
          <Slider {...settingDotsFalse}>
            {productsRes?.map((item, idx) => {
              return <div key={idx} className="w-fit p-4">
                <Link href={`/products/${item.slug.current}`}>
                  <Image src={item?.image?.asset?.url} alt="category1" width={363} height={375} className="mx-auto" />
                </Link>
                <Link href={`/products/${item.slug.current}`} className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8">
                  {item?.title}
                </Link>
              </div>
            })}
          </Slider>
        </div>
        <div className="slider-container mt-10">
          <Slider {...settingDotsFalse}>
            {productsRes?.map((item, idx) => {
              return <div key={idx} className="w-fit p-4">
                <Link href={`/products/${item.slug.current}`}>
                  <Image src={item?.image?.asset?.url} alt="category1" width={363} height={375} className="mx-auto" />
                </Link>
                <Link href={`/products/${item.slug.current}`} className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8">
                  {item?.title}
                </Link>
              </div>
            })}
          </Slider>
        </div>
      </section>

      <Get_Qoute />
      <WhatWeOffer />
      <SliderFull />
      <Packaging_Style data={categoriesRes}/>
      <WhatWeDo />
      <TestimonialAndFaq testimonialsRes={testimonialsRes} faqRes={faqRes}/>
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



const settings = {
  dots: true,
  arrows: false,
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  speed: 500,
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