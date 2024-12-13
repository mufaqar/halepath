import React from "react";
import { client } from "../../../sanity/lib/client";
import { Qproducts } from "../../../sanity/queries";
import Packing_Design from "@/components/home/packing-design";
import DesignBox from "@/components/home/designBox";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import useProductsByCategory from "../../../hooks/useProductsByCategory.jsx";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const Products = ({ productsRes }: any) => {
  const formattedData = useProductsByCategory(productsRes);

  return (
    <>
      <PageBanner
        title="All Products"
        content="Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques."
      />
      {formattedData.map((item, idx) => (
        <section key={idx} className={`py-10 mb-6 ${idx % 2 !== 0 && ""}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center gap-5">
              <h2 className="md:text-2xl text-2xl font-semibold text-title_Clr">
                {item.categoryName}
              </h2>
              {/* <Link
                href={item.categorySlug}
                className="bg-primary hover:bg-secondary md:px-8 px-6 md:py-4 py-2 text-sm font-semibold text-white rounded-[5px]"
              >
                View All
              </Link> */}
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
              {item?.products?.slice(0, 4)?.map((product: any, i: number) => (
                <Link
                  href={`/${product.slug?.current}`}
                  key={i}
                  className="p-4 group bg-[#E8F6F5] rounded-xl"
                >
                  <div className="bg-[#ffffff] rounded-xl max-h-[260px]">
                    <Image
                      src={urlForImage(product?.image.asset._ref)
                        .width(306)
                        .url()}
                      alt={product.title}
                      width={210}
                      height={260}
                      className="mx-auto cursor-pointer h-[260px] object-contain mb-4 group-hover:scale-105 transition-all duration-150 ease-linear"
                    />
                  </div>
                  <div className="block mx-auto md:text-xl text-base font-semibold text-title_Clr px-3">
                    {product.title}
                  </div>
                  <Link
                    href={`/${product.slug?.current}`}
                    className="flex items-center gap-1 px-3 pt-2 text-[#FF4A02]"
                  >
                    Learn More
                    <IoIosArrowForward />
                  </Link>
                </Link>
              ))}
              <Link
                href={"/" + item.categorySlug}
                className="bg-primary hover:bg-secondary md:px-8 px-6 md:py-4 text-2xl md:text-4xl gap-4 py-6 flex flex-row md:flex-col justify-center items-center font-semibold text-white rounded-xl"
              >
                View All
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </section>
      ))}
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
