import { urlForImage } from '@/sanity/lib/image';
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div key={product._id} className="rounded-lg bg-white pt-10 drop-shadow-md">
      <Link href={`/product/${product.slug.current}`}>
        <Image
          src={urlForImage(product.images[0])}
          alt={product.name}
          width="220"
          height="100"
          className="mx-auto object-contain"
        />
      </Link>

      <div className="my-8 text-center font-extrabold">
        <h2 className="text-2xl text-gray-600 ">{product.name}</h2>
        <p className="text-lg text-gray-500">{`$${product.price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
