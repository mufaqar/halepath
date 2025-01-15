import React from 'react'
import { client } from '../../../sanity/lib/client';
import { Qfaqs } from '../../../sanity/queries';
import Faqs from '@/components/home/faqs'
import Head from 'next/head';

const FaqsComp = ({faqRes}) => {
  return (
    <>
    <Head>
        <title>Faqs | Hale Path Packaging</title>
        <meta name="description" content="Faqs"/>
        <meta name="author" content="Hale Path Packaging"/>
        <link rel="canonical" href={`https://halepath.vercel.app/faqs`}/>
      </Head>
   <section>
     <Faqs data={faqRes}/>
   </section>
    </>
  )
}

export default FaqsComp

export async function getServerSideProps() {
  const faqRes = await client.fetch(Qfaqs);
  return {
    props: {
      faqRes,
      preview: true
    }
  };
}