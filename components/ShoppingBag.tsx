'use client';

import React from 'react';
import { useAppContext } from '@/provider/Provider';
import { FiShoppingBag } from 'react-icons/fi';

const ShoppingBag = () => {
  const { toggleOpen, itemCarts } = useAppContext();

  return (
    <div className="relative">
      <FiShoppingBag
        onClick={toggleOpen}
        className="h-10 w-10 cursor-pointer"
        color="#000000a5"
      />
      <span
        className="absolute right-0 top-0 flex
        h-[22px] w-[22px] items-center justify-center rounded-full
        bg-[#f00] text-xs font-extrabold text-white"
      >
        {itemCarts.length}
      </span>
    </div>
  );
};

export default ShoppingBag;
