"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/lib/types";

interface CartContextType {
  cart: { cartItems: Product[] };
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (itemId: string) => void;
  updateCart: (cartItems: Product[]) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<{ cartItems: Product[] }>({ cartItems: [] });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addItemToCart = (product: Product): void => {
    const item = {
      ...product,
      quantity: product.quantity || 1,
    };

    const isItemExist = cart.cartItems.find((i) => i._id === item._id);

    let newCartItems;
    if (isItemExist) {
      newCartItems = cart.cartItems.map((i) =>
        i._id === isItemExist._id
          ? { ...i, quantity: (i.quantity || 1) + (item.quantity || 1) }
          : i
      );
    } else {
      newCartItems = [...cart.cartItems, item];
    }

    const updatedCart = { cartItems: newCartItems };
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItemFromCart = (itemId: string): void => {
    const newCartItems = cart.cartItems.filter((item) => item._id !== itemId);
    const updatedCart = { cartItems: newCartItems };
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateCart = (cartItems: Product[]) => {
    const updatedCart = { cartItems };
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const clearCart = () => {
    const updatedCart = { cartItems: [] };
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, updateCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
