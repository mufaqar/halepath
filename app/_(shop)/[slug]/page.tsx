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
      
    </>
  );
}
