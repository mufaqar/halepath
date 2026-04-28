import client from "@/lib/apollo-client";
import { GET_HOME } from "../queries/GetFrontPage";
import { GET_TESTIMONAILS } from "../queries/gql-query";

export async function getHomeData() {
  const { data } = await client.query<any>({ query: GET_HOME });
  return data.page.homeInfo || {};
}

export async function getTestimonails(): Promise<any[]> {
  try {
    const { data } = await client.query<any>({
      query: GET_TESTIMONAILS,
      variables: { first: 20 }, // optional
    });

    // Ensure only valid posts are returned
    return (data?.testimonials?.nodes ?? []).filter((t:any): t is any => !!t);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// export async function getBlogData(): Promise<Post[]> {
//   try {
//     const { data } = await client.query<GetPostsQuery>({
//       query: GET_POSTS,
//       variables: { first: 30 }, // optional
//     });

//     // Ensure only valid posts are returned
//     return (data?.posts?.nodes ?? []).filter((p): p is Post => !!p);
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);
//     return [];
//   }
// }

// export async function getBlogPostBySlug(slug: string): Promise<Post | null> {
//   try {
//     const { data } = await client.query<{ post: Post }>({
//       query: GET_POST_BY_SLUG,
//       variables: { slug },
//     });

//     // Return the post if it exists, otherwise null
//     return data?.post ?? null;
//   } catch (error) {
//     console.error(`Error fetching blog post for slug "${slug}":`, error);
//     return null;
//   }
// }

// /**
//  * Fetch FAQs by category slug (e.g., "home")
//  */
// export async function getFaqData(categorySlug: string = "home"): Promise<Faq[]> {
//   try {
//     const { data } = await client.query<GetFaqByCatQuery>({
//       query: GET_FAQ_BY_CAT,
//       variables: { id: categorySlug },

//     });

//     // ✅ Make sure to access the actual FAQs array correctly
//     const faqs = data?.faqType?.faqs?.nodes ?? [];

//     // ✅ Filter out null values & enforce correct type
//     return faqs.filter((faq): faq is Faq => !!faq);
//   } catch (error) {
//     console.error("Error fetching FAQs:", error);
//     return [];
//   }
// }

// export async function getDomiciliaryPageData() {
//   const { data } = await client.query<GetDomiciliaryQuery>({
//     query: GET_DOMICILIARY,
//   });

//   return data?.page?.domiciliaryInfo || {};
// }

// export async function getServicesData(): Promise<Service[]> {
//   try {
//     const { data } = await client.query<ServicesTypes>({
//       query: GET_SERVICES,
//       variables: { first: 6 }, // optional
//     });

//      // ✅ safely return the nodes array
//     return data?.services?.nodes ?? [];
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);
//     return [];
//   }
// }

// export async function getReviewsData(): Promise<Review[]> {
//   try {
//     const { data } = await client.query<ReviewsData>({
//       query: GET_REVIEWS,
//       variables: { first: 6 }, // ✅ fetch only 6 reviews
//     });

//     return data?.reviews?.nodes ?? [];
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     return [];
//   }
// }

// export async function getSupportedLivingData() {
//   const { data } = await client.query<GetSupportedQuery>({
//     query: GET_SUPPORTED,
//   });

//   return data?.page?.supportedInfo || {};
// }

// export async function getPostCategories(): Promise<ICategoryNode[]> {
//   const { data } = await client.query<ICategoriesResponse>({
//     query: Query_Post_Categories,
//   });

//   return data?.categories?.nodes || [];
// }

// export async function getPostByCateSlug(
//   slug: string
// ): Promise<PostByCategory[]> {
//   const { data } = await client.query<GetPostByCategoryResponse>({
//     query: GET_POST_BY_CAT,
//     variables: { id: slug },
//   });

//   return data?.category?.posts?.nodes || [];
// }
