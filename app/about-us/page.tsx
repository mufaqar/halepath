"use client";

import Image from "next/image";
import Link from "next/link";

const featureproductsRes = [
  {
    title: "R&D Department Helping in Branding",
    excerpt:
      "Hale Path Packaging works as a modern solution provider for all types of printing and packaging needs...",
    gallery: "/images/design/1.png",
  },
  {
    title: "Customize Packaging",
    excerpt:
      "We are wholesale manufacturers of customized packaging serving thousands of satisfied clients...",
    gallery: "/images/design/2.png",
  },
  {
    title: "Graphic Designing Support",
    excerpt:
      "Our in-house design team works closely with clients to bring their ideas to life...",
    gallery: "/images/design/3.png",
  },
  {
    title: "Largest Production Facility",
    excerpt:
      "Our facility can produce up to 500,000 mixed-category units per day...",
    gallery: "/images/design/4.png",
  },
  {
    title: "Logistics Solutions",
    excerpt:
      "We offer warehouse storage within our facility for clients...",
    gallery: "/images/design/5.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="my-16">
        <div className="hale_container md:flex items-center gap-5 md:gap-10 flex-row">
          <figure className="md:w-1/2">
            <Image alt="Why Us Image"
              src="/images/about-page/slider.png"
              width={600}
              height={500}
              className="rounded-2xl w-full" />
          </figure>
          <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col">
            <h4 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
              Packaging usually gets blamed for waste.</h4>
            <p className="mb-2 text-center md:text-left">
              Yet at Hale Path Packaging, we see it differently. We believe packaging can be strong, smart, and
              responsible at the same time.
              Hale Path Packaging offers complementary print technologies — Offset, UV offset, Flexo Printing, digital
              printing, and cold foil or hot foil — supported by state-of-the-art binding and finishing systems. That
              may sound technical, but here’s what it really means: we choose the right printing method for the right
              job. Some designs need sharp detail. Others need bold colour. Some need speed. We match the process to
              the purpose.
            </p>
            <p className="mb-2 text-center md:text-left">
              HPP leads the corrugated packaging market while operating as one of the largest renewable packaging
              facilities. In simple words, we don’t just produce boxes. We build packaging with long-term thinking. We
              even develop our own liner and fluting in-house. These inner layers give corrugated boxes the strength
              and durability required to pack and transport valuable products safely. If it needs to travel, stack, or
              sit on shelves, it needs structure. We make sure it has it.
            </p>
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="hale_container md:flex items-center gap-5 md:gap-10 flex-row-reverse">
          <figure className="md:w-1/2">
            <Image alt="Why Us Image"
              src="/images/about-page/slider.png"
              width={600}
              height={500}
              className="rounded-2xl w-full" />
          </figure>
          <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col">
            <h4 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
              Our Story! Who Are We?</h4>
            <p className="mb-2 text-center md:text-left">
              Our name wasn’t picked randomly. “Hale” means healthy. “Path” means way. And “Packaging” is what we do
              every day. Put it together, and it shows exactly what we stand for — a healthier, more responsible way
              of creating
              packaging.
            </p>
            <p className="mb-2 text-center md:text-left">
              At Hale Path Packaging, eco-friendly and sustainable packaging isn’t just a buzzword. We make sure our
              boxes, packaging, and inserts protect products while reducing environmental impact. Many businesses
              think they must choose between durability and sustainability. We don’t agree — we deliver both. Using
              renewable materials, careful production methods, and waste-minimizing systems, we help brands make
              smart, eco-conscious choices without compromising quality.
            </p>
            <p className="mb-2 text-center md:text-left">
              Let me tell you something more mesmerizing: A UK-based organic candle brand wanted packaging that
              reflected their commitment to sustainability. They approached us for custom eco-friendly candle boxes
              with inserts. Using recycled cardboard, soy-based inks, and minimal lamination, we delivered packaging
              that was durable, protective, and fully recyclable. The brand reported a 25% increase in customer
              appreciation for their eco-conscious efforts, and their boxes became a talking point in stores — showing
              that sustainable choices can also enhance brand appeal and sales.
            </p>
            <p className="mb-5 text-center md:text-left">
              At the end of the day, our goal is simple: create packaging that protects products, supports businesses,
              and moves the industry toward a healthier, greener path.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="hale_container">
          <h2 className="h2 md:mb-5!">
            The Work We Do And <span className="text-primary">Love Doing</span>
          </h2>
          <p className="md:text-xl text-base font-normal text-title_Clr text-center max-w-[880px] mx-auto">
            <b>It might sound strange, but yes — packaging can influence how people think and buy.</b>
            It’s not just a box. It’s the first thing a customer sees. Sometimes it’s the reason they pick one product
            over another.
            This mix of psychology, engineering, and creativity is exactly what we enjoy working with every day at Hale
            Path Packaging.

          </p>
        </div>
        <div className="hale_container mt-10 flex flex-col gap-8 ">
          {featureproductsRes.map((product, index) => (
            <div
              key={index} className='feature_box flex md:flex-row flex-col items-center even:md:flex-row-reverse'>
              <div className="md:w-1/3 w-full">
                <Image src={product?.gallery} alt="img"
                  width={500} height={400}
                  className='w-full object-cover object-center' />
              </div>
              <div className='md:w-2/3 w-full p-5'>
                <h3 className=''>
                  {product?.title}
                </h3>
                <p className='md:text-lg text-base font-normal text-title_Clr'>
                  {product?.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}