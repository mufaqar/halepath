import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='pt-20 relative'>
      <div className='container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-7 gap-x-0 md:gap-y-0 gap-y-7'>
        <div>
          <Link href="/" className='inline-block'>
            <Image src="/images/logo.png" alt='logo' width={190} height={42} />
          </Link>
          <ul className='flex gap-2 mt-5'>
            <li>
              <Link href="#" className='inline-block bg-[#CACACA] hover:bg-secondary hover:border-secondary border border-[#CACACA] p-2.5 rounded text-white'>
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-block bg-[#CACACA] hover:bg-secondary hover:border-secondary border border-[#CACACA] p-2.5 rounded text-white'>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-block bg-[#CACACA] hover:bg-secondary hover:border-secondary border border-[#CACACA] p-2.5 rounded text-white'>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-block bg-[#CACACA] hover:bg-secondary hover:border-secondary border border-[#CACACA] p-2.5 rounded text-white'>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-block bg-[#CACACA] hover:bg-secondary hover:border-secondary border border-[#CACACA] p-2.5 rounded text-white'>
                <FaPinterestP />
              </Link>
            </li>
          </ul>
          <Link href="#" className='bg-[#2B4FB9] hover:bg-secondary px-8 py-4 text-sm font-semibold text-white rounded-[5px] inline-block mt-5'>
            Get a Free Quote
          </Link>
        </div>
        <div>
          <h6 className='md:text-2xl text-xl font-medium mb-5'>
            Customers
          </h6>
          <ul className='grid gap-2'>
            <li>
              <Link href="/about-us" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='md:text-2xl text-xl font-medium mb-5'>
            Contact Us
          </h6>
          <ul className='grid gap-2'>
            <li>
              <Link href="tel:(888) 908-3029" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                (888) 908-3029
              </Link>
            </li>
            <li>
              <Link href="mailto:info@elitecustomboxes.com" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                info@elitecustomboxes.com
              </Link>
            </li>
            <li>
              <span className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                520 N Veterans Pkwy Addison, IL
                60101 United States
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='md:text-2xl text-xl font-medium mb-5'>
            Help
          </h6>
          <ul className='grid gap-2'>
            <li>
              <Link href="#" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                How to Order
              </Link>
            </li>
            <li>
              <Link href="#" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                Dieline Templates
              </Link>
            </li>
            <li>
              <Link href="#" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                Box Styles
              </Link>
            </li>
            <li>
              <Link href="#" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                How to Measure a Box
              </Link>
            </li>
            <li>
              <Link href="/blogs" className='md:text-lg text-base font-normal text-txt_Clr hover:text-secondary'>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className='lg:col-span-3'>
          <Image src="/images/payments.png" alt="payments" width={461} height={56} className='ml-auto' />
        </div>
      </div>
      <div className='container mx-auto px-4 py-5 mt-10 border-t border-[#86868624]'>
        <p className='text-base font-normal text-[#666666] text-center'>
          © 2023 logo. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer