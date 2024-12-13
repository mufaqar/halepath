export const blogs = {
  name: 'blogs',
  type: 'document',
  title: 'Blogs',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'metatitle',
      type: 'string',
      title: 'Meta Title'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt'
    },
    {
      title: 'category',
      name: 'Category',
      type: 'reference',
      to: [{type: 'blogCategories'}]
    },
    {
      name: 'metadescription',
      type: 'text',
      title: 'Meta Description'
    },
    {
      name: 'metatags',
      type: 'text',
      description: "Please seprate tag with ','",
      title: 'Meta Tags'
    },
    {
      title: 'Feature Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        },
      ]
    },
    
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
              options: {
                isHighlighted: true
              }
            }
          ]
        },
      ]
    },

  ]
}