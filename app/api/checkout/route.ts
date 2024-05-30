import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.NEXT_PUBLIC_SECRET_KEY);

export const POST = async (req: NextRequest) => {
  const { products } = await req.json();
  let activeProducts = await stripe.products.list({ active: true });

  try {
    for (const product of products) {
      const matchedProduct = activeProducts?.data?.find(
        (p: { name: string; }) => p.name.toLowerCase() === product.name.toLowerCase(),
      );

      if (!matchedProduct) {
        await stripe.product.create({
          name: product.name,
          default_price_data: {
            currency: 'usd',
            unit_amount: product.price * 100,
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
  }

  activeProducts = await stripe.products.list({ active: true });

  const stripeProducts = [];

  for (const product of products) {
    const stripeProduct = activeProducts.data.find(
      (p: { name: string; }) => p.name.toLowerCase() === product.name.toLowerCase(),
    );

    if (stripeProduct) {
      stripeProducts.push({
        price: stripeProduct?.default_price,
        quantity: product.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeProducts,
    mode: 'payment',
    success_url: 'https://nextjs-ts-react-sanity-tailwind.vercel.app/success',
    cancel_url: 'https://nextjs-ts-react-sanity-tailwind.vercel.app',
  });

  return NextResponse.json({ url: session.url });
};
