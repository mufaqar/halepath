import Image from "next/image";
import Link from "next/link";
import React from "react";
import Instagram from "@/components/instagram/instagram";
import SliderFull from "@/components/slider/slider-full";
import WhatWeOffer from "@/components/what-we-offer/what-we-offer";
import TestimonialAndFaq from "@/components/testimonial/testimonial-and-faq";
import BannerPageMiddel from "@/components/banner/banner";
import MainContent from "@/components/main/main-content"
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
    <Head>
      <title>About Us | Hale Path Packaging</title>
      <meta name="description" content="Hale Path Packaging"/>
      <meta name="author" content="Hale Path Packaging"/>
      <link rel="canonical" href="https://halepath.vercel.app/about-us"/>
    </Head>
      <MainContent/>
      <BannerPageMiddel/>
      <WhatWeOffer />
      <SliderFull />
      <TestimonialAndFaq />
      <Instagram />
    </>
  );
};

export default AboutUs;
