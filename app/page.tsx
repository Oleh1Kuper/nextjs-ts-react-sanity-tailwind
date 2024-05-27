import React from 'react';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

const Home = async () => {
  const products = await client.fetch(groq`*[_type=="product"]`);

  console.log(products);

  return <h1 className="text-4xl">Hello world</h1>;
};

export default Home;
