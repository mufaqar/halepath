import Faqs from "@/components/faqs/faqs";
import ImageCarousel from "@/components/image-crousel/ImageCarousel";
import Banner from "@/components/products/banner";
import ProductTabs from "@/components/products/productTabs";
import CenterSlider from "@/components/slider/center-slider";
import { getProductBySlug } from "@/lib/data/getProductsData";
import Image from "next/image";
import Link from "next/link";

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const product = await getProductBySlug(params.slug);

//   return {
//     title: product?.name || "Product Not Found",
//     description: product?.name
//       ? `Details for ${product.name}`
//       : "Product details",
//   };
// }

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  console.log("Product Data:", product); // Debugging log

  const relatedProducts = product.related?.nodes ?? [];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">
          The requested product could not be found.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <main>
        <Banner data={product} />
        <section className="mt-20 w-full mx-auto px-3 lg:px-0 overflow-hidden">
          <h2 className="text-2xl text-center mb-8 sm:text-3xl md:text-5xl font-bold">
            {product?.name} Gallery
          </h2>
          <ImageCarousel
            data={product?.productSpecifications?.productGallery}
          />
        </section>
        <ProductTabs prodata={product} />
        <section className="mt-20">
          <div className="container mx-auto px-4">
            <span className="md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-4">
              Related Products
            </span>
          </div>
          <CenterSlider data={relatedProducts} />
        </section>
      </main>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          {product.image?.sourceUrl && (
            <div className="aspect-square relative">
              <Image
                src={product.image.sourceUrl}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
