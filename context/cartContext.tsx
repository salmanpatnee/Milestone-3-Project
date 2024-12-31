"use client";

import { Product } from "@/lib/types";
import { createContext, useContext, useEffect, useState } from "react";

// Define types
interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

interface CartContextType {
  cart: Cart;
  addItemToCart: (item: Product) => void;
  updateCart: (cartItems: CartItem[]) => void;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ cartItems: [] });

  // Initialize cart from localStorage
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    setCart(cartData ? JSON.parse(cartData) : { cartItems: [] });
  }, []);

  const addItemToCart = (item: CartItem) => {

    
    const newCartItems = cart.cartItems.some((i) => i?._id === item?._id)
      ? cart.cartItems.map((i) => (i?._id === item?._id ? item : i))
      : [...cart?.cartItems, item];

    updateCart(newCartItems);
    return;
  };

  const updateCart = (cartItems: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify({ cartItems }));
    setCart({ cartItems });
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
