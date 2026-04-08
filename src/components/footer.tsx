import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='pt-14 relative bg-[#f5f5f5]'>
      <div className='hale_container grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-between 2xl:gap-5 md:gap-4 gap-5'>
        <div>
          <h6 className='footer_title'>
            Company
            <span className=''></span>
          </h6>
          <ul id="menu-company" className="flex flex-col gap-2.5">
            <li className="">
              <Link href="https://halepathpackaging.co.uk/about-us/" className='footer_link'>
                <span className="marker"></span>About Us
              </Link>
            </li>
            <li className="">
              <Link href="https://halepathpackaging.co.uk/terms-conditions/" className='footer_link'>
                <span className="marker"></span>Terms &amp; Conditions
              </Link>
            </li>
            <li className="">
              <Link href="https://halepathpackaging.co.uk/return-and-refund-policy/" className='footer_link'>
                <span className="marker"></span>Return and Refund Policy
              </Link>
            </li>
            <li className="">
              <Link href="https://halepathpackaging.co.uk/shipping-policy/" className='footer_link'>
                <span className="marker"></span>Shipping Policy
              </Link>
            </li>
            <li className="">
              <Link rel="privacy-policy" href="https://halepathpackaging.co.uk/privacy-policy/" className='footer_link'>
                <span className="marker"></span>Privacy Policy
              </Link>
            </li>
            <li className="">
              <Link href="#" className='footer_link'>
                <span className="marker"></span>Bulk Order
              </Link>
            </li>
            <li className="">
              <Link href="https://halepathpackaging.co.uk/contact-us/" className='footer_link'>
                <span className="marker"></span>Contact Us
              </Link>
            </li>
            <li className="">
              <Link href="https://halepathpackaging.co.uk/blog/" className='footer_link'>
                <span className="marker"></span>Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='footer_title'>
            Innovation
            <span className=''></span>
          </h6>
          <ul id="menu-innovation" className="flex flex-col gap-2.5">
            <li className="">
              <Link href="#" className="footer_link">
                <span className="marker"></span>Approch to innovation
              </Link>
            </li>
            <li className="">
              <Link href="#" className="footer_link">
                <span className="marker"></span>UV Printing Technology
              </Link>
            </li>
            <li className="">
              <Link href="#" className="footer_link">
                <span className="marker"></span>Foil Printing Solutions
              </Link>
            </li>
            <li className="">
              <Link href="#" className="footer_link">
                <span className="marker"></span>Privacy Printing
              </Link>
            </li>
            <li className="">
              <Link href="#" className="footer_link">
                <span className="marker"></span>Color Management Systems
              </Link>
            </li>
            <li className="">
              <Link href="#" className="footer_link">
                <span className="marker"></span>R&amp;D areas
              </Link>
            </li>
            <li className="">
              <Link href="#" className="footer_link">
                <span className="marker"></span>Experience Centers
              </Link>
            </li>
            <li className="">
              <Link href="#" className="footer_link">
                <span className="marker"></span>Client Success Stories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='footer_title'>
            Packaging Products
            <span className=''></span>
          </h6>
          <ul id="menu-packaging-products" className="flex flex-col gap-2.5">
            <li className="">
              <Link href="https://halepathpackaging.co.uk/custom-rigid-boxes/" className='footer_link'>
                <span className="marker"></span>Rigid Boxes
              </Link>
            </li>
            <li className="">
              <Link href="https://halepathpackaging.co.uk/kraft-boxes/" className='footer_link'>
                <span className="marker"></span>Kraft Boxes
              </Link>
            </li>
            <li className="">
              <Link href="https://halepathpackaging.co.uk/cardboard-boxes/" className='footer_link'>
                <span className="marker"></span>Cardboard Boxes
              </Link>
            </li>
            <li className="">
              <Link href="https://halepathpackaging.co.uk/corrugated-boxes/" className='footer_link'>
                <span className="marker"></span>Corrugated Boxes
              </Link>
            </li>
            <li className="">
              <Link href="#"><span className="marker"></span>Product Boxes
              </Link>
            </li>
            <li className="">
              <Link href="#"><span className="marker"></span>Sustainable Packaging
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='footer_title'>
            Services
            <span className=''></span>
          </h6>
          <ul id="menu-services" className="flex flex-col gap-2.5">
            <li className="">
              <Link href="#" className='footer_link'>
                <span className="marker"></span>Commercial Printing
              </Link>
            </li>
            <li className="">
              <Link href="#" className='footer_link'>
                <span className="marker"></span>Bulk Production
              </Link>
            </li>
            <li className="">
              <Link href="#" className='footer_link'>
                <span className="marker"></span>Custom Printing Solutions
              </Link>
            </li>
            <li className="">
              <Link href="#" className='footer_link'>
                <span className="marker"></span>Structural Design Support
              </Link>
            </li>
            <li className="">
              <Link href="https://halepathpackaging.co.uk/get-quote-now/" className='footer_link'>
                <span className="marker"></span>Request a Quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='footer_title'>
            Connect With Us
            <span className=''></span>
          </h6>
          <ul className="flex flex-col gap-2.5">
            <li>
              Unit 229, 32A Birmingham Road Bromsgrove B61 0DD
            </li>
            <li>
              <Link href="tel:+4401213186768" className="footer_link">
                +44 01213186768
              </Link>
            </li>
            <li>
              <Link href="mailto:sales@halepathpackaging.co.uk" target="_blank" className="footer_link">
                sales@halepathpackaging.co.uk
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='hale_container flex md:flex-row flex-col md:items-center justify-between 2xl:gap-7 md:gap-4 gap-7 mt-7'>
        <div>
          <h6 className='text-base font-semibold text-title_Clr mb-6'>
            Where We’re Trusted
          </h6>
          <div className='flex flex-wrap sm:flex-nowrap sm:gap-5 gap-2 items-center'>
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
      <div className='hale_container flex md:flex-row flex-col md:items-center justify-between 2xl:gap-7 md:gap-4 gap-7 mt-7 py-2.5'>
        <div className='flex gap-3 items-center'>
          <Link href="/" className='inline-flex'>
            <Image src="/images/logo.png" alt='logo' width={93} height={98} />
          </Link>
          <ul className='flex items-center gap-3'>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=61586916928562" target="_blank" className='text-base inline-flex'>
                <FaFacebookF className='text-title_Clr hover:text-primary' />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/halepathpackaging.uk?igsh=MW1tY3pyczV2emdzNw%3D%3D" target="_blank" className='text-base inline-flex'>
                <FaInstagram className='text-title_Clr hover:text-primary' />
              </Link>
            </li>
            <li>
              <Link href="https://www.tiktok.com/@halepathpackaging?_r=1&_t=ZS-957Rlv6JhMV" target="_blank" className='text-base inline-flex'>
                <FaTiktok className='text-title_Clr hover:text-primary' />
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="md:text-base text-sm font-normal text-title_Clr md:text-end">
            © 2026 Hale Path Packaging. All Rights Reserved.
          </p>
          <p className="md:text-base text-sm font-normal text-title_Clr md:text-end">
            <Link href="/privacy-policy">Privacy Policy</Link> | <Link
              href="/terms-conditions">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer