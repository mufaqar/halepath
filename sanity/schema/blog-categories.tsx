export const blogCategories = {
  name: "blogCategories",
  type: "document",
  title: "Blog Categories",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
};
