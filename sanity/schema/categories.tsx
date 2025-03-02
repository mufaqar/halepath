export const categories = {
  name: 'categories',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'metatitle',
      type: 'string',
      title: 'Meta Title'
    },
    {
      name: 'metadescription',
      type: 'text',
      title: 'Meta Description'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      name: 'product_title',
      type: 'string',
      title: 'Product Title',
      initialValue: "Explore Packaging Solutions"
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },

    {
      title: 'Feature Image',
      name: 'feature_image',
      type: 'image',
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt'
    },

    {
      title: 'Image',
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
            name: 'Info',
            type: 'text',
            title: 'info'
           },
           {
            name: 'button_link',
            type: 'string',
            title: 'Button Link'
           }
          ]
        }
      ]
    },
    
    {
      title: "Our Capabilities",
      name: "Our_capabilities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Image",
              name: "image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "title",
              type: "string",
              title: "Title",
            },
          ],
        },
      ],
    },

    {
      title: "Faqs",
      name: "faqs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "faqs" }],
        },
      ],
    },
    
  ]
}