import client from "@/lib/apollo-client";
import { GET_CATEGORIES, GET_CATEGORY_BY_SLUG, GET_PRODUCT_BY_SLUG, GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from "../queries/getProducts";

export async function getProductBySlug(slug: string) {
  const { data } = await client.query<any>({ query: GET_PRODUCT_BY_SLUG, variables: { slug } });
  return data?.product || null;
}
export async function getProductsData() {
  const { data } = await client.query<any>({ query: GET_PRODUCTS });
  return data?.products?.nodes || [];
}

export async function getProductsByCategory(slug: string) {
  const { data } = await client.query<any>({ query: GET_PRODUCTS_BY_CATEGORY, variables: { slug } });
  return data?.products?.nodes || [];
}

export async function getCategoriesData() {
  const { data } = await client.query<any>({ query: GET_CATEGORIES });
  return data?.productCategories?.nodes || [];
}
export async function getCategoryBySlug(slug: string) {
  try {
    const { data } = await client.query<any>({
      query: GET_CATEGORY_BY_SLUG,
      variables: { slug }
    });
    return data?.productCategory || null;
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
}