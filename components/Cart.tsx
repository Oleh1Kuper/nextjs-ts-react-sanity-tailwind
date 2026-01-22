'use client';

import React from 'react';
import { useAppContext } from '@/provider/Provider';
import { IoMdClose } from 'react-icons/io';
import CartItem from './CartItem';

const URL = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/checkout`;

const Cart = () => {
  const { isOpenCart, toggleOpen, itemCarts } = useAppContext();
  const totalAmount = itemCarts.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({ products: itemCarts }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <aside
        className={`fixed right-0 top-0 z-20 h-full w-1/3 bg-white
        ${isOpenCart ? 'translate-x-0' : 'translate-x-full'}
        overflow-y-auto transition`}
      >
        <div className="flex h-20 items-center justify-between p-10">
          <h2 className="text-2xl">{`Your cart (${itemCarts.length} items)`}</h2>
          <IoMdClose
            className="cursor-pointer"
            onClick={toggleOpen}
            size={30}
          />
        </div>

        <div className="flex flex-col gap-5 p-10">
          {itemCarts.map((item) => (
            <CartItem product={item} key={item._id} />
          ))}

          {!itemCarts.length || (
            <>
              <p>{`Total amount $${totalAmount}`}</p>
              <button
                onClick={handleCheckout}
                className="border-2 border-gray-800 p-2 transition hover:bg-gray-800 hover:text-white"
                type="button"
              >
                Pay with stripe
              </button>
            </>
          )}
        </div>
      </aside>

      {isOpenCart && (
        <div className="fixed right-0 top-0 z-10 h-full w-full bg-black bg-opacity-50" />
      )}
    </>
  );
};

export default Cart;
