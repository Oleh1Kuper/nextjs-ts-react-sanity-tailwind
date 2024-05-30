import React from 'react';
import { client } from '@/sanity/lib/client';
import { Product } from '@/types/product';
import { groq } from 'next-sanity';
import ProductCard from './ProductCard';

const Products = async () => {
  const products = (await client.fetch(
    groq`*[_type=='product']`,
    {},
    { cache: 'no-store' },
  )) as Product[];

  return (
    <div className="mt-44 bg-[#f8f8f8] py-12">
      <div className="container">
        <div>
          <h1 className="text-2xl font-extrabold">Best Selling Products.</h1>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
