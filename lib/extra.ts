import { getPageBySlug } from "./data/getHomeData";
import { getCategoryBySlug } from "./data/getProductsData";

export async function resolveSlug(slug: string) {
  const [page, category] = await Promise.all([
    getPageBySlug(slug),
    getCategoryBySlug(slug),
  ]);

  return {
    page,
    category,
  };
}