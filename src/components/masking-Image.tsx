import Image from "next/image";
import Link from "next/link";
import React from "react";

const MaskingImage = ({data}:any) => {
  const link = data?._type === "products" ? `/products/${data?.slug.current}` : `/categories/${data?.slug.current}`
  return (
    <div className="w-fit p-4">
      <Link href={link}>
        <Image
          src={data?.feature_image?.asset?.url || data?.image?.asset?.url}
          alt="category1"
          width={363}
          height={375}
          className="maskimage w-80 h-[15rem] object-cover"
        />
      </Link>
      <Link
        href={link}
        className="text-xl font-normal text-title_Clr text-center flex w-fit mx-auto mt-8"
      >
        {data?.name || data?.title}
      </Link>
    </div>
  );
};

export default MaskingImage;
