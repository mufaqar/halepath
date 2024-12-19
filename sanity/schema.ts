import { type SchemaTypeDefinition } from 'sanity'
import { testimonial } from './schema/testimonial'
import { categories } from './schema/categories'
import { faqs } from './schema/faqs'
import { products } from './schema/products'
import { blogs } from './schema/bogs'
import { blogCategories } from './schema/blog-categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categories, products, testimonial, faqs, blogs, blogCategories],
}
