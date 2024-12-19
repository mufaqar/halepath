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

export default function Home({ testimonialsRes, faqRes, categoriesRes, productsRes }: any) {
  const fproduct = productsRes?.filter((item: any) => item.featured === true)
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
      <CategorySlider categoriesRes={categoriesRes}/>
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
      {/* Corrugated Packaging */}
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
      <Packaging_Style data={categoriesRes} />
      <Packing_Design data={fproduct} title="Custom Packaging Boxes" content="Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques." />
      <Why_ChooseUs />
      <Testimonials data={testimonialsRes} />
      <Faqs data={faqRes} />
      <section className='py-16 max_content'>
        <div className='container mx-auto px-4'>
          <div className='max-h-[350px] h-full overflow-y-scroll '>
            <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
              Why Custom Packaging Essential for Your Business
            </h2>
            <p className='text-lg font-normal text-txt_Clr mt-5 text-justify'>
              We live in a fast-paced world where advancements in technology have allowed people to make informed decisions and better choices. Today, nearly everyone uses a smartphone or laptop to know about consumer products and all other details that will help them make best buying decision. In the business sector, due to significant competition, there is a clear shift from product-centric to a customer-centric approach. Another reason for the shift is ambitious entrepreneurs and small-businessmen running their own brands to better serve the customers.
            </p>
            <p className='text-lg font-normal text-txt_Clr mt-5 text-justify'>
              We all know the famous 4 Ps of marketing (Product, Price, Place, and Promotion). However, another P that has been added to the mix is Packaging. According to research studies, an average consumer takes less than 20 seconds to make a buying decision. Also, almost 72% of the population says that their buying decision is influenced by the packaging design.
            </p>
            <p className='text-lg font-normal text-txt_Clr mt-5 text-justify'>
              The first thing that allows the average consumer to make the purchase decision is none other than the ‘packaging of the product. People usually buy from brands there are familiar with, such as startups, and business companies have to think out of the box to make an impression on potential customers.
            </p>
          </div>
        </div>
      </section>

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