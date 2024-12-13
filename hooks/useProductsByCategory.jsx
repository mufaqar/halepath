import { useEffect, useState } from 'react';

const useProductsByCategory = (productsRes) => {
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    const processData = () => {
      const newProductsByCategory = {};

      productsRes.forEach((item) => {
        const categories = item.categories || [{ name: "Uncategorized", slug: "uncategorized" }];
        categories.forEach((category) => {
          const categoryName = category.name;
          const categorySlug = category.slug.current || "uncategorized";
          if (!newProductsByCategory[categoryName]) {
            newProductsByCategory[categoryName] = [];
          }
          newProductsByCategory[categoryName].push({ ...item, categorySlug });
        });
      });

      setProductsByCategory(newProductsByCategory);
    };

    processData();
  }, [productsRes]);

  const formattedData = Object.entries(productsByCategory).map(
    ([categoryName, products]) => ({
      categoryName,
      categorySlug: products[0].categorySlug, // assuming all products in a category have the same slug
      products,
    })
  );

  return formattedData;
};

export default useProductsByCategory;
