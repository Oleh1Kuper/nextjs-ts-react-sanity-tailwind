'use client';

import { useAppContext } from '@/provider/Provider';
import { Product } from '@/types/product';
import React from 'react';

type Props = {
  product: Product;
};

const AddCartButton: React.FC<Props> = ({ product }) => {
  const { addItem, itemCarts } = useAppContext();
  const isAdded = itemCarts.some((item) => item._id === product._id);

  return (
    <button
      disabled={isAdded}
      onClick={() => addItem({ ...product, quantity: 1 })}
      className="border-2 border-gray-800 p-2"
      type="button"
    >
      {isAdded ? 'Added' : 'Add to cart'}
    </button>
  );
};

export default AddCartButton;
