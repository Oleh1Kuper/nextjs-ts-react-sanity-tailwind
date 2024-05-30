import type { Image } from 'sanity';

export interface Product {
  name: string;
  description: string;
  _id: string;
  _updatedAt: string;
  slug: { current: string; _type: string };
  images: Image[];
  price: 249;
  _createdAt: string;
  quantity: number;
}
