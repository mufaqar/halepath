import PageBanner from "@/components/page-banner";
import Link from "next/link";
import React, { useState } from "react";
import Featured_Posts from "@/components/blog/featured-post";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { Qblogs } from "../../../sanity/queries";
import { IoSearchOutline } from "react-icons/io5";
import {convertTimestamp} from '@/utils'

export default function Blogs({ blogs, blogsCategories }: any) {
  const [searchValue, setSearchValue] = useState("");
  const [allBlogs, setAllBlogs] = useState(blogs)

  const hanldeSearch = () => {
    const filter = blogs?.filter((item:any)=>item.title.toLowerCase().includes(searchValue?.toLowerCase()))
    setAllBlogs(filter)
};


  return (
    <>
      <PageBanner title="Blogs" />
      <section>
        <div className="bg-white shadow-lg mx-auto items-center px-4 max-w-[600px] z-10 -mt-7 flex p-2 rounded-xl">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search by title"
            className="p-2 w-full outline-none border-none"
          />
          <IoSearchOutline className="text-2xl cursor-pointer hover:text-secondary" onClick={hanldeSearch} />
        </div>
      </section>
      <section className="md:py-16 py-8">
        <div className="container mx-auto px-4 flex md:flex-row flex-col gap-7 md:divide-x divide-txt_Clr/50">
          <div className="md:w-2/3 w-full">
            {/* feature Blog */}
            <div className="mb-8">
                <Featured_Posts data={allBlogs[0]}/>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
              {allBlogs?.slice(1)?.map((item:any, idx:number) => {
                return <Featured_Posts key={idx} data={item}/>;
              })}
             
            </div>
          </div>
          <div className="md:w-1/3 w-full md:pl-7 md:block block">
            <h2 className="md:text-3xl text-xl font-semibold text-title_Clr mb-5">
              Latest posts
            </h2>
            <div className="grid gap-7">
              {blogs?.map((item:any, idx:any) => {
                return (
                  <div
                    key={idx}
                    className="flex md:flex-row flex-row gap-2 shadow-[0px_8px_5px_0px_rgb(23,43,77,8%)] hover:shadow-[0px_3px_2px_0px_rgb(23,43,77,8%)] rounded"
                  >
                    <div>
                      <Image
                        src={item?.image?.asset?.url}
                        alt="make-product"
                        width={144}
                        height={120}
                        className="object-cover h-[120px] rounded-l"
                      />
                    </div>
                    <div className="py-4">
                      <Link
                        href={`/blogs/${item?.slug?.current}`}
                        className="md:text-xl text-base font-medium text-title_Clr block w-fit"
                      >
                        {item?.title}
                      </Link>
                      <p className="md:text-base text-sm font-medium text-txt_Clr mt-1.5">
                        {
                            convertTimestamp(item?._createdAt)
                        }
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h2 className="md:text-3xl text-xl font-semibold text-title_Clr my-5">
                Featured Categories:
            </h2>
            <div className="bg-[#E8F6F5] p-4 flex flex-col gap-3 rounded-lg">
            {
                blogsCategories?.slice(0,6)?.map((item:any,idx:number)=>(
                    <Link href="#" className="bg-white rounded-lg hover:bg-secondary hover:text-white w-full p-4 block text-lg px-6 " key={idx}>{item.name}</Link>
                ))
            }
            </div>
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
