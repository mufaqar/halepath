import { gql } from "@apollo/client";

export const GET_HOME = gql`
  query GetFrontPage {
    page(id: "home", idType: URI) {
      title
      homeInfo {
        aboutSection {
          aboutlink
          content
        }
        bannerSlider {
          btnlink
          desc
          title
        }
        corrugatedSection {
          content
          title
        }
        homeServices {
          title
          subtitle
          service {
            content
            title
            image {
              node {
                mediaItemUrl
              }
            }
          }
        }
        workWeDo {
          title
          subtitle
          service {
            content
            title
            servicelink
            image {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
        homePage {
      flexiblePackaging {
        edges {
          node {
            date
          }
        }
      }
    }
    }
  }
`;
