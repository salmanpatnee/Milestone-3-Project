"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/lib/types";

// Define the shape of the CartContext
interface CartContextType {
  cart: { cartItems: Product[] };
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (itemId: string) => void;
  updateCart: (cartItems: Product[]) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<{ cartItems: Product[] }>({ cartItems: [] });

  // Sync cart state with localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Function to add item to cart
  const addItemToCart = (product: Product): void => {
    const item = {
      ...product,
      quantity: product.quantity || 1, // Default quantity to 1 if not provided
    };

    // Find if the product already exists in the cart
    const isItemExist = cart.cartItems.find((i) => i._id === item._id);

    let newCartItems;
    if (isItemExist) {
      // If item exists, increment its quantity
      newCartItems = cart.cartItems.map((i) =>
        i._id === isItemExist._id
          ? { ...i, quantity: (i.quantity || 1) + (item.quantity || 1) }
          : i
      );
    } else {
      // Otherwise, add the new item
      newCartItems = [...cart.cartItems, item];
    }

    // Update the cart and persist to localStorage
    const updatedCart = { cartItems: newCartItems };
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // In CartContext

  const removeItemFromCart = (itemId: string): void => {
    // Filter out the item from the cart by ID
    const newCartItems = cart.cartItems.filter((item) => item._id !== itemId);

    // Update the cart state and persist to localStorage
    const updatedCart = { cartItems: newCartItems };
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to update the cart directly
  const updateCart = (cartItems: Product[]) => {
    const updatedCart = { cartItems };
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, updateCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use CartContext in any component
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
