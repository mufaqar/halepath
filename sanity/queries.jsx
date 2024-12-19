export const Qtestimonials = `*[ _type == "testimonial"]`;

export const Qfaqs = `*[ _type == "faqs"]`;

export const Qcategories = `*[ _type == "categories"]{
     feature_image{
          asset->{
               url
          }
     },
     name,
     metatitle,
     metadescription,
     slug,
     icon{
          asset->{
               url
          }
     },
     excerpt,
     image{
          asset->{
               url
          }
     },
     content,
     grid[]{
          image{
               asset->{
                    url
               }
          },
          title,
          info,
          button_link
     },
     Our_capabilities[]{
          image{
          asset->{
               url
          }
     },
          title,

     },
     faqs[]->{
          question,
          answer
     }
}`;

export const Qproducts = `*[ _type == "products"]{
     title,
     secound_title,
     _createdAt,
     image,
     gallery,
     slug,
     excerpt,
     content,
     featured,
     categories[]->{
          name,
          slug
     },
     
}`;


export const QSingleCategory = ` *[ _type == "categories" && slug.current == $slug ][0]{
    feature_image{
          asset->{
               url
          }
     },
     name,
     metatitle,
     metadescription,
     slug,
     icon{
          asset->{
               url
          }
     },
     excerpt,
     image{
          asset->{
               url
          }
     },
     content,
     grid[]{
          image{
               asset->{
                    url
               }
          },
          title,
          info,
          button_link
     },
     Our_capabilities[]{
          image{
          asset->{
               url
          }
     },
          title,

     },
     faqs[]->{
          question,
          answer
     }
}`;

export const QSingleProducts = ` *[ _type == "products" && slug.current == $slug ][0]{
     title,
     secound_title,
     _createdAt,
     image,
     gallery,
     slug,
     excerpt,
     content,
     categories[]->{
          name,
          slug
     },
     grid,
     mailerbox,
     orderprocess[]->{
          title,
          detail
     },
     _createdAt,
     _updatedAt,
     metatitle,
     metadescription,
     metatags
}`;


export const QNavcategories = `*[ _type == "categories"]{
     name,
     icon{
          asset->{
               url
          }
     },
     slug
}`;


export const Qblogs = `*[ _type == "blogs"]{
     title,
     _createdAt,
     image{
          asset->{
               url
          }
     },
     slug,
     excerpt,
     content,
     category->{
          name,
          slug
     }
     
}`;


export const QSingleBlog = `*[ _type == "blogs" && slug.current == $slug ][0]{
     title,
     _createdAt,
     image{
          asset->{
               url
          }
     },
     slug,
     excerpt,
     content,
     
}`;
