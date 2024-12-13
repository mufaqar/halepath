import React from 'react'
import { client } from '../../../sanity/lib/client';
import { QSingleBlog } from '../../../sanity/queries'
import Image from 'next/image';
import { convertTimestamp } from '@/utils'
// import { PortableText } from '@portabletext/react';
const BlockContent = require('@sanity/block-content-to-react')
import { FaFacebook } from "react-icons/fa6";
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const BlogDetails = ({ blog }) => {
  console.log("🚀 ~ BlogDetails ~ blog:", blog)
  return (
    <>
    <section className='bg-gray-100 text-center text-4xl py-32'>
      <h2>Blog</h2>
    </section>
    <div className='max-w-[1180px] my-20 mx-auto px-4'>
      <Image src={blog?.image?.asset?.url} alt='make-product' width={793} height={472} className='w-full object-cover rounded-lg' />
      <div className='flex items-center my-8 gap-3'>
        <p className='bg-secondary text-white p-2 rounded-lg'> {convertTimestamp(blog?._createdAt)}</p>
        <h2 className='text-3xl capitalize'>{blog?.title}</h2>
      </div>
      <div className='desc_content my-4'>
        <BlockContent
          blocks={blog?.content}
          projectId="byl8ndcu"
          dataset="production"
        />      
        </div>
        <div>
          <h2 className='text-3xl capitalize'>Share this post</h2>
          <ul className="text-3xl flex gap-4 mt-3">
            <li className='hover:text-secondary hover:scale-105'><Link href={``}><FaFacebook /></Link></li>
            <li className='hover:text-secondary hover:scale-105'><Link href={``}><FaXTwitter /></Link></li>
            <li className='hover:text-secondary hover:scale-105'><Link href={``}><FaLinkedin /></Link></li>
            <li className='hover:text-secondary hover:scale-105'><Link href={``}><FaInstagram /></Link></li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default BlogDetails



export async function getServerSideProps(pageContext) {
  const slug = pageContext.query.slug;

  const blog = await client.fetch(QSingleBlog, { slug });

  if (!blog) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blog,
      preview: true
    }
  }
}