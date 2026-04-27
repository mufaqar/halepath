import { gql } from "@apollo/client";

/* ---------------------------
   PRODUCT BY SLUG
---------------------------- */
export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      name
      slug
      featuredImage {
        node {
          mediaItemUrl
        }
      }

      related(first: 4) {
        nodes {
          name
          slug
          ... on SimpleProduct {
            id
            name
            featuredImage {
              node {
                mediaItemUrl
                sourceUrl
              }
            }
          }
        }
      }
      galleryImages {
        nodes {
          mediaItemUrl
        }
      }
      ... on SimpleProduct {
        price
        fAQs {
          faqsSections {
            title
            description
          }
        }
        productSpecifications {
          productGallery {
            nodes {
              mediaItemUrl
              altText
            }
          }

          productExtraInfo {
            infoBox {
              description
              title
              image {
                node {
                  mediaItemUrl
                }
              }
            }
            infoBox2 {
              description
              title
              image {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

/* ---------------------------
   ALL PRODUCTS
---------------------------- */
export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 10) {
      nodes {
        name
        slug
        description

        ... on SimpleProduct {
          id
          name
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          galleryImages {
            nodes {
              ...MediaItemFragment
            }
          }
          productCategories {
            ...ProductToProductCategoryConnectionFragment
          }
        }
      }
    }
  }
  fragment MediaItemFragment on MediaItem {
    mediaItemUrl
  }

  fragment ProductToProductCategoryConnectionFragment on ProductToProductCategoryConnection {
    nodes {
      uri
      slug
      name
    }
  }
`;

/* ---------------------------
   PRODUCTS BY CATEGORY
---------------------------- */
export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($category: String = "branded-finishes") {
    products(first: 100, where: { category: $category }) {
      nodes {
        id
        name
        slug
        image {
          sourceUrl
        }
        ... on SimpleProduct {
          price
        }
      }
    }
  }
`;

/* ---------------------------
   ALL CATEGORIES
---------------------------- */
export const GET_CATEGORIES = gql`
  query GetCategories {
    productCategories(first: 50) {
      nodes {
        id
        name
        slug
        image {
          sourceUrl
        }
      }
    }
  }
`;

/* ---------------------------
   ⭐ SINGLE CATEGORY BY SLUG (FIXED)
---------------------------- */
export const GET_CATEGORY_BY_SLUG = gql`
  query GetCategoryBySlug($slug: ID = "branded-finishes") {
    productCategory(idType: SLUG, id: $slug) {
      id
      name
      slug
      image {
        sourceUrl
      }
      fAQs {
        faqsSections {
          title
          description
        }
      }
    }
  }
`;
