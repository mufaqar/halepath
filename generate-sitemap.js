const { createClient } = require("@sanity/client");
const fs = require("fs");
// import {createClient} from '@sanity/client'

const config = {
  projectId: "6s1xjwlm",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
};

const SITE_URL = "https://halepath.vercel.app";

const sanityClient = createClient(config);

async function generateSitemap() {
  const blogs = await sanityClient.fetch(`*[ _type == "blogs"]`);
  const products = await sanityClient.fetch(`*[ _type == "products"]`);
  const categories = await sanityClient.fetch(`*[ _type == "categories"]`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
          <loc>${SITE_URL}/</loc>
      </url>
      <url>
          <loc>${SITE_URL}/blog</loc>
      </url>
      <url>
          <loc>${SITE_URL}/categories</loc>
      </url>
      <url>
          <loc>${SITE_URL}/contact</loc>
      </url>
       <url>
          <loc>${SITE_URL}/about-us</loc>
      </url>
      <url>
          <loc>${SITE_URL}/products</loc>
      </url>
      <url>
          <loc>${SITE_URL}/faqs</loc>
      </url>
      ${blogs?.map((item) => `
        <url>
          <loc>${SITE_URL}/blog/${item.slug.current}</loc>
          <lastmod>${item._updatedAt}</lastmod>
          <priority>0.80</priority>
        </url>
      `).join("")}
      ${products?.map((item) => `
        <url>
          <loc>${SITE_URL}/products/${item.slug.current}</loc>
          <lastmod>${item._updatedAt}</lastmod>
          <priority>0.80</priority>
        </url>
      `).join("")}
      ${categories?.map((item) => `
        <url>
          <loc>${SITE_URL}/${item.slug.current}</loc>
          <lastmod>${item._updatedAt}</lastmod>
          <priority>0.80</priority>
        </url>
      `).join("")}
    </urlset>
  `;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();