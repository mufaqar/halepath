import React from 'react'
import { client } from '../../sanity/lib/client';
import { QSingleCategory, QSingleProducts, Qfaqs, Qproducts } from '../../sanity/queries';
import Product from './product/product';
import Category from './category';
import { useRouter } from 'next/router';

const Slug = ({ productRes, categoryRes, productsRes, faqRes }: any) => {
     const router = useRouter()
     const param = router?.query?.slug
     const productByCategory = productsRes?.filter((p:any)=>p?.categories?.some((c:any)=>c?.slug?.current === param))
     const relatedProducts = productsRes.filter((p:any)=>p?.categories?.some((c:any)=>c?.slug?.current === productRes?.categories?.[0]?.slug?.current))
     return (
          <>
               {
                    productRes ? <Product productRes={productRes} relatedProducts={relatedProducts} faqRes={faqRes}/> : <Category categoryRes={categoryRes} productsRes={productByCategory} faqRes={faqRes}/>
               }
          </>
     )
}

export default Slug

export async function getServerSideProps(pageContext: any) {
     const slug = pageContext.query.slug;

     const productRes = await client.fetch(QSingleProducts, { slug });
     const categoryRes = await client.fetch(QSingleCategory, { slug });
     const productsRes = await client.fetch(Qproducts);
     const faqRes = await client.fetch(Qfaqs);

     if (!productRes && categoryRes?.length < 1) {
          return {
               notFound: true,
          }
     }

     return {
          props: {
               productRes, categoryRes, productsRes, faqRes,
               preview: true
          }
     };
}