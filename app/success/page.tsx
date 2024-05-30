import Link from 'next/link';
import React from 'react';

const SuccessPage = () => {
  return (
    <div className="container">
      <div className="mt-32 flex flex-col items-center gap-5">
        <h1 className="text-center text-4xl font-extrabold lg:text-6xl">
          Your order has been placed! 🎉
        </h1>

        <p className="text-center text-xl font-semibold text-[#787878]">
          Thank you for your purchase!
        </p>

        <Link
          href="/"
          className="rounded-md bg-[#4f46e5] px-4 py-3 text-2xl text-white"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
