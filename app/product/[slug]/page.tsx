import React from 'react';
import Galery from '@/components/Galery';
import { client } from '@/sanity/lib/client';
import { Product } from '@/types/product';
import { groq } from 'next-sanity';
import AddCartButton from '@/components/AddCartButton';

type Props = {
  params: { slug: string };
};

const ProductDeatailPage: React.FC<Props> = async ({ params: { slug } }) => {
  const product = (await client.fetch(
    groq`*[_type=='product' && slug.current=='${slug}'][0]`,
    {},
    { cache: 'no-store' },
  )) as Product;

  return (
    <div className="container">
      <div className="mt-24 flex flex-col text-gray-800 lg:flex-row">
        <Galery images={product.images} />

        <div className="flex basis-2/4 flex-col gap-10 px-7 pb-14 pt-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold">{product.name}</h2>
            <p className="text-2xl font-extrabold text-[#a9a9a9]">
              {`$${product.price}`}
            </p>
            <p className="text-2xl">{product.description}</p>
          </div>

          <AddCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDeatailPage;
