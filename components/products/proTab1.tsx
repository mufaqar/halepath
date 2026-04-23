"use client";
import Image from "next/image";
import Link from "next/link";
import CenterSlider from "../slider/center-slider";
import Faqs from "../faqs/faqs";
import ProReviews from "./proReviews";

type InfoBox = {
    title: string;
    description: string;
    image: string;
};

type Product = {
    id: number;
    title: string;
    image: string;
    link: string;
};

type Props = {
    product_info_box1: InfoBox;
    product_info_box2: InfoBox;
    relatedProducts: any;
    faqs: any;
};

const ProTab1
    = ({
        product_info_box1,
        product_info_box2,
        relatedProducts, faqs
    }: Props) => {

        return (
            <>
                {/* Section 1 */}
                <section className="my-10">
                    <div className="hale_container md:flex items-center gap-5 md:gap-10 flex-row-reverse">
                        <figure className="md:w-1/2">
                            <Image
                                alt="Why Us Image"
                                src={product_info_box1.image}
                                width={800}
                                height={600}
                                className="rounded-2xl"
                            />
                        </figure>

                        <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col">
                            <h4 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
                                {product_info_box1.title}
                            </h4>

                            <p className="mb-7 text-center md:text-left">
                                {product_info_box1.description}
                            </p>

                            <Link
                                href="/get-quote-now"
                                className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
                            >
                                Get Custom Quote
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="my-10">
                    <div className="hale_container md:flex items-center gap-5 md:gap-10 flex-row">
                        <figure className="md:w-1/2">
                            <Image
                                alt="Why Us Image"
                                src={product_info_box2.image}
                                width={800}
                                height={600}
                                className="rounded-2xl"
                            />
                        </figure>

                        <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col">
                            <h4 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
                                {product_info_box2.title}
                            </h4>

                            <p className="mb-7 text-center md:text-left">
                                {product_info_box2.description}
                            </p>

                            <Link
                                href="/get-quote-now"
                                className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md"
                            >
                                Get Custom Quote
                            </Link>
                        </div>
                    </div>
                </section>
                <ProReviews />
                {/* Related Products */}
                <section className="bg-[#F5F5F5] py-20 mt-28">
                    <div className="container mx-auto px-3 text-center">
                        <Faqs col={2} data={faqs} />
                    </div>
                </section>
                        </>
        );
    };

export default ProTab1;