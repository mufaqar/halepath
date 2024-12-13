export const Qtestimonials = `*[ _type == "testimonial"]`;

export const Qfaqs = `*[ _type == "faqs"]`;

export const Qcategories = `*[ _type == "categories"]`;

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
     categories[] ->{
          name,
          slug
     },
     
}`;


export const QSingleCategory = ` *[ _type == "categories" && slug.current == $slug ][0]{
     name,
     metatitle,
     metadescription,
     metatags,
     slug,
     icon,
     excerpt,
     image,
     secound_title,
     content,
     grid,
     orderprocess[]->{
          title,
          detail
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
