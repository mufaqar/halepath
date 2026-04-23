import { getProductBySlug } from "@/lib/data/getProductsData";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  return {
    title: product?.name || "Product Not Found",
    description: product?.name ? `Details for ${product.name}` : "Product details",
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The requested product could not be found.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> / <Link href={`/category/sample-category`} className="hover:underline">Category</Link> / <span>{product.name}</span>
      </nav>

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

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          {"price" in product && (
            <p className="text-2xl text-blue-600 font-bold mb-6">${product.price}</p>
          )}

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700">
              This is a placeholder description for the product. In a real implementation,
              this would come from the WooCommerce product data.
            </p>
          </div>

          {"description" in product && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Product Details</h2>
              <div
                className="text-gray-700 prose"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          )}

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}