import Link from 'next/link';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

const NavBar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="text-3xl font-extrabold text-[#000000a5]">
          Shop
        </Link>

        <div className="relative">
          <FiShoppingBag className="h-10 w-10" color="#000000a5" />
          <span
            className="absolute right-0 top-0 flex
            h-[22px] w-[22px] items-center justify-center rounded-full
            bg-[#f00] text-xs font-extrabold text-white"
          >
            0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
