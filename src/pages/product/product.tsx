import Choose_Us from '@/components/category/choose-us'
import ContentBox from '@/components/category/contentBox'
import Cta from '@/components/category/cta'
import Cat_Faqs from '@/components/category/faqs'
import Get_Started from '@/components/category/get-started'
import Order_Process from '@/components/category/order-process'
import Technical_Specs from '@/components/category/technical-specs'
import Banner from '@/components/products/banner'
import Qoute_Sec from '@/components/products/qoute-sec'
import React from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import Head from 'next/head'
import DesignBox from '@/components/home/designBox'


export default function Product({ productRes, faqRes, relatedProducts }: any) {
    return (
        <>
            <Head>
                <title>{productRes?.metatitle}</title>
                <meta name='keywords' content={productRes?.metatags} />
                <meta name='description' content={productRes?.metadescription} />
                <meta name='subject' content="products" />
                <meta name='copyright' content='packhoop' />
                <meta name='language' content='En' />
                <meta name='robots' content='index,follow' />
                <meta name='subtitle' content={productRes?.metadescription} />
                <meta name='target' content={productRes?.metatitle} />
            </Head>
            <main>
                <Banner data={productRes} />
                <Get_Started data={productRes} />
                <section className='py-16'>
                    <div className='container mx-auto px-4 grid gap-16'>
                        {
                            productRes?.grid?.map((item: any, idx: number) => (
                                <ContentBox
                                    img={urlForImage(item?.image?.asset?._ref).width(306)?.url()}
                                    Cstm_class={` ${idx % 2 === 0 ? 'lg:flex-row flex-col' : 'lg:flex-row-reverse flex-col'}`}
                                    key={idx}
                                    title={item.title}
                                    list={item.list}
                                />
                            ))
                        }
                    </div>
                </section>
                <Cta />
                <Technical_Specs mailerbox={productRes?.mailerbox} />
                <Cat_Faqs faqRes={faqRes} />
                <Order_Process data={productRes?.orderprocess} />
                <section className='py-16'>
                    <div className='container mx-auto px-4'>
                        <div>
                            <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                                Related Products
                            </h2>
                        </div>
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
                            {
                                relatedProducts?.map((product: any, i: number) => (
                                    <DesignBox
                                        key={i}
                                        slug={product.slug}
                                        title={product.title}
                                        img={urlForImage(product?.image?.asset?._ref).width(306)?.url()}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}


