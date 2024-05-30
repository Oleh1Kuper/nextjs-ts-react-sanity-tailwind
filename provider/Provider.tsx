'use client';

/* eslint-disable no-unused-vars */

import { Product } from '@/types/product';
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  isOpenCart: boolean;
  toggleOpen: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  itemCarts: Product[];
};

const Context = createContext({} as ContextType);

export const useAppContext = () => useContext(Context);

const Provider: React.FC<Props> = ({ children }) => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [itemCarts, setItemCarts] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    setItemCarts((prev) => [...prev, product]);
  };

  const removeItem = (id: string) => {
    const filteredItems = itemCarts.filter((item) => item._id !== id);

    setItemCarts(filteredItems);
  };

  const increaseQuantity = (id: string) => {
    const updatedItems = itemCarts.map((item) => item._id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item);

    setItemCarts(updatedItems);
  };

  const decreaseQuantity = (id: string) => {
    const updatedItems = itemCarts.map((item) => item._id === id
      ? { ...item, quantity: item.quantity < 2 ? 1 : item.quantity - 1 }
      : item);

    setItemCarts(updatedItems);
  };

  const toggleOpen = () => {
    const body = document.querySelector('body');

    body?.classList.toggle('overflow');
    setIsOpenCart((prev) => !prev);
  };

  const value = useMemo(() => {
    return {
      isOpenCart,
      toggleOpen,
      increaseQuantity,
      decreaseQuantity,
      addItem,
      removeItem,
      itemCarts,
    };
  }, [isOpenCart, itemCarts]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
