import React from 'react'
import { client } from '../../../sanity/lib/client';
import { Qfaqs } from '../../../sanity/queries';
import Faqs from '@/components/home/faqs'

const FaqsComp = ({faqRes}) => {
  return (
   <section>
     <Faqs data={faqRes}/>
   </section>
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