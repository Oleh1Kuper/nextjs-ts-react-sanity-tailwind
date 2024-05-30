'use client';

import React from 'react';
import { useAppContext } from '@/provider/Provider';
import { urlForImage } from '@/sanity/lib/image';
import { Product } from '@/types/product';
import Image from 'next/image';
import { MdDeleteOutline } from 'react-icons/md';
import QuantityButtons from './QuantityButtons';

type Props = {
  product: Product;
};

const CartItem: React.FC<Props> = ({ product }) => {
  const { removeItem } = useAppContext();

  return (
    <div>
      <div className="mb-3 flex justify-between">
        <h3>{product.name}</h3>
        <p>{`$${product.price * product.quantity}`}</p>
      </div>

      <div className="flex items-center gap-5">
        <Image
          src={urlForImage(product.images[0])}
          width="40"
          height="40"
          alt="Galery Image"
          className="rounded-md border hover:cursor-pointer"
        />
        <QuantityButtons product={product} />

        <MdDeleteOutline
          onClick={() => removeItem(product._id)}
          size={20}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartItem;
