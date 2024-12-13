import React from 'react'
import { client } from '../../../sanity/lib/client';
import { Qproducts } from '../../../sanity/queries';
import Packing_Design from '@/components/home/packing-design';
import DesignBox from '@/components/home/designBox';
import { urlForImage } from '../../../sanity/lib/image';
import Link from 'next/link';
import PageBanner from '@/components/page-banner';

const Products = ({ productsRes }: any) => {
  return (
    <>
      <PageBanner title="Shapes & Styles"
        content="Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques." />
      <section>
        <div className='container mx-auto px-4 mt-16'>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-6'>
            {productsRes.map((product: any, i: number) => (
              <DesignBox
                key={i}
                title={product.title}
                slug={product.slug}
                img={urlForImage(product?.image.asset._ref).width(306).url()} />
            ))}
          </div>
        </div>
      </section></>
  )
}

export default Products


export async function getServerSideProps() {
  const productsRes = await client.fetch(Qproducts);
  return {
    props: {
      productsRes,
      preview: true
    }
  };
}