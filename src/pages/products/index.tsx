import React from "react";
import { client } from "../../../sanity/lib/client";
import { Qproducts } from "../../../sanity/queries";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import useProductsByCategory from "../../../hooks/useProductsByCategory.jsx";
import Image from "next/image";

const Products = ({ productsRes }: any) => {
  const formattedData = useProductsByCategory(productsRes);

  return (
    <>
      <PageBanner
        title="All Products"
        content="Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques."
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-[30px] gap-7">
            {productsRes?.map((product: any, idx: number) => (
              <div key={idx} className="shadow-[0px_0px_5px_0px_rgba(0,0,0,0.39)]">
                <div className="h-[333px] ">
                <Link href={`/${product?.slug?.current}`}>
                  <Image
                    src={product?.gallery[0].asset.url}
                    alt="Featured"
                    width={344}
                    height={344}
                    className="w-full h-full object-cover object-center"
                  />
                  </Link>
                </div>
                <div className="md:p-6 p-5">
                  <h4>
                    <Link
                      href={`/${product?.slug?.current}`}
                      className="md:text-xl text-lg font-bold text-black inline-flex my-5"
                    >
                      {product?.title}
                    </Link>
                  </h4>
                  <p className="text-sm font-normal text-title_Clr">
                    {product?.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

export async function getServerSideProps() {
  const productsRes = await client.fetch(Qproducts);
  return {
    props: {
      productsRes,
      preview: true,
    },
  };
}
