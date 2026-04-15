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
      image {
        sourceUrl
      }
      ... on SimpleProduct {
        price
      }
    }
  }
`;

/* ---------------------------
   ALL PRODUCTS
---------------------------- */
export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 1000) {
      nodes {
        name
        slug
        description
        image {
          ...MediaItemFragment
        }
        ... on SimpleProduct {
          id
          name
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
    sourceUrl
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
  query GetProductsByCategory($slug: String!) {
    products(first: 20, where: { category: $slug }) {
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
  query GetCategoryBySlug($slug: ID!) {
    productCategory(id: $slug, idType: SLUG) {
      id
      name
      slug
      image {
        sourceUrl
      }
    }
  }
`;
