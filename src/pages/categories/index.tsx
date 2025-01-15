import React from 'react'
import { client } from '../../../sanity/lib/client';
import { Qcategories } from '../../../sanity/queries';
import Packing_Design from '@/components/home/packing-design';
import { urlForImage } from '../../../sanity/lib/image';
import IconBox from '@/components/category/icon-box';
import PageBanner from '@/components/page-banner';

const Products = ({ categoriesRes }: any) => {
  console.log("🚀 ~ Products ~ categoriesRes:", categoriesRes)
  return (
    <>
      <PageBanner title="All Categories"
        content="Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques." />
      <section className='mb-14'>
        <div className='container mx-auto px-4 pt-5'>
          <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-7 mt-6'>
            {categoriesRes.map((category: any, i: number) => (
              <IconBox
                key={i}
                title={category?.name}
                slug={category?.slug}
                img={category?.icon?.asset.url} />
            ))}
          </div>
        </div>
      </section>
      
    </>
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