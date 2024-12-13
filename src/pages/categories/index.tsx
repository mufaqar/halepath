import React from 'react'
import { client } from '../../../sanity/lib/client';
import { Qcategories } from '../../../sanity/queries';
import Packing_Design from '@/components/home/packing-design';
import { urlForImage } from '../../../sanity/lib/image';
import IconBox from '@/components/category/icon-box';
import PageBanner from '@/components/page-banner';

const Products = ({ categoriesRes }: any) => {
  return (
    <>
      <PageBanner title="Custom packaging solutions for every industry."
        content="Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques." />
      <section>
        <div className='container mx-auto px-4 mt-16'>
          <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-7 mt-6'>
            {categoriesRes.map((category: any, i: number) => (
              <IconBox
                key={i}
                title={category?.name}
                slug={category?.slug}
                img={urlForImage(category?.image.asset._ref).width(306).url()} />
            ))}
          </div>
        </div>
      </section></>
  )
}

export default Products


export async function getServerSideProps() {
  const categoriesRes = await client.fetch(Qcategories);
  return {
    props: {
      categoriesRes,
      preview: true
    }
  };
}