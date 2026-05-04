import CategoriesProducts from '@/components/Category-Products';
import {  getProductsData } from '@/lib/data/getProductsData';
import React from 'react'

const Products = async () => {

     const products = await getProductsData();
  return (
    <div>

    <CategoriesProducts productsRes={products} />
      
    </div>
  )
}

export default Products
