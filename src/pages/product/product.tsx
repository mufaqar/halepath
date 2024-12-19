import ContentBox from '@/components/category/contentBox'
import Get_Started from '@/components/category/get-started'
import Banner from '@/components/products/banner'
import React from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import Head from 'next/head'
import OurCapabilities from '@/components/category/our-capabilities'
import Faqs from '@/components/faqs/faqs'
import CenterSlider from '@/components/slider/center-slider'


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
                <section className='pt-16'>
                    <h2 className="font-extrabold md:text-4xl text-2xl text-center text-title_Clr mb-5">
                        Learn More About Custom Retail Boxes
                    </h2>
                    <div className="container px-3 mx-auto mt-5 overflow-y-scroll max_content max-h-[812px]">
                        <h2 className="md:text-[29px] md:leading-normal text-xl font-bold text-title_Clr">
                            Lorem ipsum dolor
                        </h2>
                        <p className="text-xl font-normal mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit elittellus,
                            luctus nec ullamc mattis pulvinar dapibus cras risus dui euismo et
                            sapien molestie sollicitudin sodale dolor aliquam nec sagittis felis
                            pellentesque ultricies. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit elittellus, luctus nec ullamc mattis pulvinar
                            dapibus cras risus dui euismo et sapien molestie sollicitudin sodale
                            dolor aliquam nec sagittis felis pellentesque ultricies.{" "}
                        </p>
                        <p className="text-xl font-normal mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit elittellus,
                            luctus nec ullamc mattis pulvinar dapibus cras risus dui euismo et
                            sapien molestie sollicitudin sodale dolor aliquam nec sagittis felis
                            pellentesque ultricies. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit elittellus, luctus nec ullamc mattis pulvinar
                            dapibus cras risus dui euismo et sapien molestie sollicitudin sodale
                            dolor aliquam nec sagittis felis pellentesque ultricies.{" "}
                        </p>
                        <h2 className="md:text-[29px] md:leading-normal text-xl font-bold text-title_Clr mt-7">
                            Lorem ipsum dolor
                        </h2>
                        <p className="text-xl font-normal mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit elittellus,
                            luctus nec ullamc mattis pulvinar dapibus cras risus dui euismo et
                            sapien molestie sollicitudin sodale dolor aliquam nec sagittis felis
                            pellentesque ultricies. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit elittellus, luctus nec ullamc mattis pulvinar
                            dapibus cras risus dui euismo et sapien molestie sollicitudin sodale
                            dolor aliquam nec sagittis felis pellentesque ultricies.{" "}
                        </p>
                        <p className="text-xl font-normal mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit elittellus,
                            luctus nec ullamc mattis pulvinar dapibus cras risus dui euismo et
                            sapien molestie sollicitudin sodale dolor aliquam nec sagittis felis
                            pellentesque ultricies. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit elittellus, luctus nec ullamc mattis pulvinar
                            dapibus cras risus dui euismo et sapien molestie sollicitudin sodale
                            dolor aliquam nec sagittis felis pellentesque ultricies.{" "}
                        </p>
                        <h2 className="md:text-[29px] md:leading-normal text-xl font-bold text-title_Clr mt-7">
                            Lorem ipsum dolor
                        </h2>
                        <p className="text-xl font-normal mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit elittellus,
                            luctus nec ullamc mattis pulvinar dapibus cras risus dui euismo et
                            sapien molestie sollicitudin sodale dolor aliquam nec sagittis felis
                            pellentesque ultricies. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit elittellus, luctus nec ullamc mattis pulvinar
                            dapibus cras risus dui euismo et sapien molestie sollicitudin sodale
                            dolor aliquam nec sagittis felis pellentesque ultricies.{" "}
                        </p>
                        <p className="text-xl font-normal mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit elittellus,
                            luctus nec ullamc mattis pulvinar dapibus cras risus dui euismo et
                            sapien molestie sollicitudin sodale dolor aliquam nec sagittis felis
                            pellentesque ultricies. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit elittellus, luctus nec ullamc mattis pulvinar
                            dapibus cras risus dui euismo et sapien molestie sollicitudin sodale
                            dolor aliquam nec sagittis felis pellentesque ultricies.{" "}
                        </p>
                    </div>
                </section>
                <OurCapabilities />

                <section className="bg-[#F5F5F5] py-20 mt-28">
                    <div className="container mx-auto px-3 text-center">
                        <Faqs col={2} />
                    </div>
                </section>
                <section className="mt-20">
                    <div className="container mx-auto px-4">
                        <h2 className="md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-4">
                            Related Products
                        </h2>
                    </div>
                    <CenterSlider />
                </section>
            </main>

        </>
    )
}


