import { gql } from "@apollo/client";

/* ---------------------------
   PRODUCT BY SLUG
---------------------------- */
export const GET_PRODUCT_BY_SLUG = gql`
 query GetProductBySlug($id: ID = "standing-banner-printing") {
  product(id: $id, idType: SLUG) {
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
    products(first: 10) {
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
  query GetProductsByCategory($category: String = "branded-finishes") {
    products(first: 20, where: { category: $category }) {
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
    }
  }
`;
