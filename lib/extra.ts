import { getPageBySlug } from "./data/getHomeData";
import { getProductBySlug } from "./data/getProductsData";

export async function resolveSlug(slug: string) {
  const page = await getPageBySlug(slug).catch(() => null);

  if (page) {
    return { type: "page", data: page };
  }

  const product = await getProductBySlug(slug).catch(() => null);

  if (product) {
    return { type: "product", data: product };
  }

  return null;
}