import PageBanner from "@/components/page-banner";
import Link from "next/link";
import React, { useState } from "react";
import Featured_Posts from "@/components/blog/featured-post";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { Qblogs } from "../../../sanity/queries";
import { IoSearchOutline } from "react-icons/io5";
import { convertTimestamp } from '@/utils'

export default function Blogs({ blogs, blogsCategories }: any) {
  const [searchValue, setSearchValue] = useState("");
  const [allBlogs, setAllBlogs] = useState(blogs)

  const hanldeSearch = () => {
    const filter = blogs?.filter((item: any) => item.title.toLowerCase().includes(searchValue?.toLowerCase()))
    setAllBlogs(filter)
  };


  return (
    <>
      <PageBanner title="Blogs" content="Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques." />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[30px] gap-7">
            {blogs?.map((item: any, idx: number) => {
              return <Featured_Posts key={idx} data={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const blogs = await client.fetch(Qblogs);
  const blogsCategories = await client.fetch(`*[ _type == "blogCategories"]`);
  return {
    props: {
      blogs,
      blogsCategories,
      preview: true,
    },
  };
}
