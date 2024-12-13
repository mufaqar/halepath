export const products = {
  name: 'products',
  type: 'document',
  title: 'Products',
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
      title: 'Featured',
      name: 'featured',
      type: 'boolean'
    },    
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt'
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
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'secound_title',
      type: 'string',
      title: '2nd Title'
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
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'categories'},
          ]
        }
      ]
    },
    {
      title: 'Grid',
      name: 'grid',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title'
            },
            {
              title: 'List',
              name: 'list',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Title'
                    },
                    {
                      name: 'content',
                      type: 'text',
                      title: 'Content'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'orderprocess',
      title: 'Order Process',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'orderprocess'},
          ]
        }
      ]
    },
    {
      title: 'Faqs',
      name: 'faqs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'faqs'},
          ]
        }
      ]
    },
    {
      title: 'Mailer Box',
      name: 'mailerbox',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'List',
              name: 'list',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Title'
                    },
                    {
                      name: 'content',
                      type: 'text',
                      title: 'Content'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    
  ]
}