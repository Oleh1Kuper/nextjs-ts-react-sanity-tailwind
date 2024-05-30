'use client';

import React from 'react';
import { useAppContext } from '@/provider/Provider';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Product } from '@/types/product';

type Props = {
  product: Product
}

const QuantityButtons: React.FC<Props> = ({ product }) => {
  const { increaseQuantity, decreaseQuantity } = useAppContext();

  return (
    <div className="flex w-48 items-center justify-between border-2 p-2">
      <FiMinus onClick={() => decreaseQuantity(product._id)} className="cursor-pointer" />
      {product.quantity || 1}
      <FiPlus onClick={() => increaseQuantity(product._id)} className="cursor-pointer" />
    </div>
  );
};

export default QuantityButtons;
