import PageBanner from "@/components/page-banner";
import React, { useState } from "react";
import Featured_Posts from "@/components/blog/featured-post";
import { client } from "../../../sanity/lib/client";
import { Qblogs } from "../../../sanity/queries";

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
  
  return {
    props: {
      blogs,
      preview: true,
    },
  };
}
