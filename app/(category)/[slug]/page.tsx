import CategoriesProducts from "@/components/category/Category-Products";
import FormTabs from "@/components/formTabs";
import Faqs from "@/components/home/faqs";
import { getPageBySlug } from "@/lib/data/getHomeData";

import {
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/data/getProductsData";



import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  /**
   * Fetch page + category together
   */
  const [page, category] = await Promise.all([
    getPageBySlug(slug),
    getCategoryBySlug(slug),
  ]);

  /**
   * PAGE TEMPLATE
   */
  if (page) {
    return (
      <main className="py-10 lg:py-20">
        <div className="hale_container">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {page.title}
          </h1>

          <div
            dangerouslySetInnerHTML={{
              __html: page.content || "",
            }}
          />
        </div>
      </main>
    );
  }

  /**
   * CATEGORY NOT FOUND
   */
  if (!category) {
    notFound();
  }

  /**
   * Fetch products only if category exists
   */
  const products = await getProductsByCategory(slug);

  /**
   * CATEGORY TEMPLATE
   */
  return (
    <>
      <main className="py-10 lg:py-20">
        <div className="hale_container grid items-center md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 xl:gap-[70px]">
          <div className="h-full">
            <Image
              src={
                category?.image?.sourceUrl ||
                "https://via.placeholder.com/651x375?text=No+Image"
              }
              alt={category?.name || ""}
              width={651}
              height={375}
              className="img-full rounded-[22px]"
            />
          </div>

          <div>
            <h4 className="font-bold text-3xl lg:text-5xl">
              {category?.name}
            </h4>

            <p className="xl:text-[19px] mt-4">
              {category?.excerpt}
            </p>

            <FormTabs
              productName={category?.name}
              productPrice={650}
            />
          </div>
        </div>
      </main>

      <CategoriesProducts productsRes={products} />

      <Faqs data={category?.faqs} col={2} />
    </>
  );
}