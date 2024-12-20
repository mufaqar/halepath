import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='pt-14 pb-4 relative'>
      <div className='container mx-auto px-4 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-between gap-7'>
        <div>
          <h6 className='text-2xl font-semibold text-title_Clr mb-6'>
            Company
            <span className='block border-b-2 border-title_Clr max-w-[61px] mt-3'></span>
          </h6>
          <ul className='flex flex-col gap-2.5'>
            <li>
              <Link href="/" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/categories" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Product By Industry
              </Link>
            </li>
            <li>
              <Link href="/products" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Products
              </Link>
            </li>
            <li>
              <Link href="/about-us#testimonials" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/about-us#faqs" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                FAQ's
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-2xl font-semibold text-title_Clr mb-6'>
            Products Packaging
            <span className='block border-b-2 border-title_Clr max-w-[61px] mt-3'></span>
          </h6>
          <ul className='flex flex-col gap-2.5'>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Mailer Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Rigid Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Kraft Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Cardboard Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Products Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Sustainable Packaging
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-2xl font-semibold text-title_Clr mb-6'>
            Packaging Style
            <span className='block border-b-2 border-title_Clr max-w-[61px] mt-3'></span>
          </h6>
          <ul className='flex flex-col gap-2.5'>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Sleeve & Tray
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Die Cut Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Cigerate Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Child Resistance Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Window Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Gable Boxes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-2xl font-semibold text-title_Clr mb-6'>
            Inspiration
            <span className='block border-b-2 border-title_Clr max-w-[61px] mt-3'></span>
          </h6>
          <ul className='flex flex-col gap-2.5'>
            <li>
              <Link href="/blog" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                Client Success Stories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-2xl font-semibold text-title_Clr mb-6'>
            Contact
            <span className='block border-b-2 border-title_Clr max-w-[61px] mt-3'></span>
          </h6>
          <ul className='flex flex-col gap-2.5'>
            <li>
              <Link href="tel:866-225-2112" className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                866-225-2112
              </Link>
            </li>
            <li>
              <Link href="mailto:info@halepathpack.com" target='_blank' className='text-base font-normal text-title_Clr flex items-center gap-2'>
                <span className='w-[3px] bg-title_Clr h-[11px] block'></span>
                info@halepathpack.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container mx-auto px-4 flex md:flex-row flex-col md:items-center justify-between gap-7 mt-7'>
        <div>
          <h6 className='text-base font-semibold text-title_Clr mb-6'>
            Where We’re Trusted
          </h6>
          <div className='flex gap-5 items-center'>
            <Image src="/images/google-reviws.png" alt='google-reviws' width={117} height={46} className='md:w-full w-1/3' />
            <Image src="/images/trustpilot.png" alt='trustpilot' width={117} height={59} className='md:w-full w-1/3' />
            <Image src="/images/bbb.png" alt='bbb' width={163} height={34} className='md:w-full w-1/3' />
            <Image src="/images/reviews-io.png" alt='reviews-io' width={131} height={53} className='md:w-full w-1/3' />
          </div>
        </div>
        <div>
          <h6 className='text-base font-semibold text-title_Clr mb-6'>
            Our Logistics Partners
          </h6>
          <div className='flex justify-end items-end'>
            <Image src="/images/fedex.png" alt='fedex' width={430} height={57} />
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 flex md:flex-row flex-col md:items-center justify-between gap-7 mt-7'>
        <div className='flex gap-5 items-center'>
          <Link href="/" className='inline-flex'>
            <Image src="/images/logo.png" alt='logo' width={93} height={98} />
          </Link>
          <ul className='flex items-center gap-5'>
            <li>
              <Link href="#" className='text-2xl inline-flex text-[#9C9C9C] hover:text-primary'>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#" className='text-2xl inline-flex text-[#9C9C9C] hover:text-primary'>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="#" className='text-2xl inline-flex text-[#9C9C9C] hover:text-primary'>
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex justify-end items-end'>
          <p className='md:text-lg text-sm font-normal text-title_Clr'>
            Copyright 2024 Hale Path Packaging © All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer