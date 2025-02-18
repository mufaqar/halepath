import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CategoriesProducts = ({ productsRes }: any) => {
  const [visibleCount, setVisibleCount] = useState(15);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <section className="mt-20 container mx-auto px-3">
      <div>
        <h2 className="font-extrabold text-4xl text-center">
          Explore Packaging Solutions
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-16 gap-x-4">
        {productsRes?.slice(0, visibleCount).map((item: any, idx: number) => (
          <div key={idx} className="">
            <Link href={`/${item?.slug.current}`}>
              <Image
                src={item?.gallery[0]?.asset?.url}
                alt={item?.title || "Product Image"}
                width={363}
                height={369}
                className="w-full"
              />
            </Link>
            <h4 className="text-xl text-center my-4">
              <Link href={`/${item?.slug.current}`}>
                {item?.title}
              </Link>
            </h4>
          </div>
        ))}
      </div>
      {visibleCount < productsRes?.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="bg-primary hover:bg-transparent px-5 py-2.5 text-[15px] uppercase font-medium text-white hover:text-primary rounded-full border-2 border-primary"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default CategoriesProducts;