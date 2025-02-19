import Get_Qoute from '@/components/home/get-qoute';
import Instagram from '@/components/instagram/instagram';
import TestimonialAndFaq from '@/components/testimonial/testimonial-and-faq';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { client } from '../../../sanity/lib/client';
import { Qfaqs, Qtestimonials } from '../../../sanity/queries';
import Head from 'next/head';

const ContactUs = ({testimonialsRes, faqRes}:any) => {
  
  return (
    <>
    <Head>
        <title>Contact Us | Hale Path Packaging</title>
        <meta name="description" content="Contact Us"/>
        <meta name="author" content="Hale Path Packaging"/>
        <link rel="canonical" href={`https://halepath.vercel.app/contact-us`}/>
      </Head>
    <Get_Qoute />
    <TestimonialAndFaq faqRes={faqRes} testimonialsRes={testimonialsRes}/>
    <Instagram />
    </>
  )
}

export default ContactUs



export async function getServerSideProps() {
  const testimonialsRes = await client.fetch(Qtestimonials);
  const faqRes = await client.fetch(Qfaqs);
  return {
    props: {
      testimonialsRes, faqRes,
      preview: true
    }
  };
}
