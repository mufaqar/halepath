import CategoriesProducts from "@/components/category/Category-Products";
import FormTabs from "@/components/formTabs";
import Faqs from "@/components/home/faqs";
import { getProductsByCategory } from "@/lib/data/getProductsData";
import { resolveSlug } from "@/lib/extra";
import { buildSeo } from "@/lib/seo/generateSeo";


import Image from "next/image";
import { notFound } from "next/navigation";



export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const { page, category } = await resolveSlug(slug);

  const data = page || category;

  return await buildSeo(data, slug);
}
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { page, category } = await resolveSlug(slug);

  /**
   * NOT FOUND
   */
  if (!page && !category) {
    notFound();
  }

  /**
   * PAGE TEMPLATE
   */
  if (page) {
    return (
      <main className="py-10 lg:pb-16">
        <div className="hale_container">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{page.title}</h1>

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
   * CATEGORY TEMPLATE
   */
  const products = await getProductsByCategory(slug);

  return (
    <>
      <main className="py-10 lg:py-16">
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
            <h4 className="font-bold text-3xl lg:text-5xl">{category.name}</h4>

            <p className="xl:text-[19px] mt-4">{category.excerpt}</p>

            <FormTabs productName={category.name} productPrice={650} />
          </div>
        </div>
      </main>

      <CategoriesProducts productsRes={products} />

      <Faqs data={category.faqs} col={2} />
    </>
  );
}
