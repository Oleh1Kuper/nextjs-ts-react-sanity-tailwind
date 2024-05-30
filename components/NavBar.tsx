import React from 'react';
import Link from 'next/link';
import Cart from './Cart';
import ShoppingBag from './ShoppingBag';

const NavBar = () => {
  return (
    <>
      <nav className="border-b bg-white">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="text-3xl font-extrabold text-[#000000a5]">
            Shop
          </Link>

          <ShoppingBag />
        </div>
      </nav>

      <Cart />
    </>
  );
};

export default NavBar;
