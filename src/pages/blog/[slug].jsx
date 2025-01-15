import React from 'react'
import { client } from '../../../sanity/lib/client';
import { Qblogs, QSingleBlog } from '../../../sanity/queries'
import Image from 'next/image';
import Featured_Posts from "@/components/blog/featured-post";
import Head from 'next/head';
const BlockContent = require('@sanity/block-content-to-react')

const BlogDetails = ({ blog, blogs }) => {

  return (
    <>
    <Head>
      <title>{blog?.metatitle} | Hale Path Packaging</title>
      <meta name="description" content={blog?.metadescription}/>
      <meta name="author" content="Hale Path Packaging"/>
      <link rel="canonical" href={`https://halepath.vercel.app/${blog.slug.current}`}/>
    </Head>
    
      <section className='pt-14'>
        <div className='container mx-auto px-4'>
          <h1 className='md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-4'>
            {blog?.title}
          </h1>
          <div className='max-w-[1054px] max-h-[454px] mx-auto '>
            <Image src={blog?.image?.asset?.url} alt='featured' width={1050} height={454} className='object-cover object-center rounded-[19px] mx-auto' />
          </div>
        </div>
      </section>
      <section className='pt-6 pb-14'>
        <div className='container mx-auto px-4'>
          <div className='desc_content my-4'>
            <BlockContent
              blocks={blog?.content}
              projectId="byl8ndcu"
              dataset="production"
            />
          </div>
        </div>
      </section>
      <section className='pb-14'>
        <div className='container mx-auto px-4'>
          <h2 className='md:text-[29px] md:leading-normal text-lg font-bold text-title_Clr text-center mb-4'>
            Most Popular Blog
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[30px] gap-7">
            {blogs?.map((item, idx) => {
              return <Featured_Posts key={idx} data={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetails



export async function getServerSideProps(pageContext) {
  const slug = pageContext.query.slug;

  const blog = await client.fetch(QSingleBlog, { slug });
  const blogs = await client.fetch(Qblogs);

  if (!blog) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blog,
      blogs,
      preview: true
    }
  }
}