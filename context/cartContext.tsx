// cartContext.ts
import React, { createContext, useContext, useState } from "react";
import { Product } from "@/lib/types"; // Import both Product and CartItem

// Define the shape of the CartContext
interface CartContextType {
  cart: { cartItems: Product[] };
  addItemToCart: (item: Product) => void; // Accept CartItem
  updateCart: (cartItems: Product[]) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState({ cartItems: [] as Product[] });

  // Function to add item to cart
  const addItemToCart = (item: Product) => {
    const isItemExist = cart.cartItems.find((i) => i._id === item._id);
    
    let newCartItems;

    if (isItemExist) {
      newCartItems = cart.cartItems.map((i) =>
        i._id === item._id ? { ...i, quantity: i.quantity! + item.quantity! } : i
      );
    } else {
      newCartItems = [...cart.cartItems, item];
    }

    // Update cart in context
    updateCart(newCartItems);
  };

  // Update cart
  const updateCart = (cartItems: Product[]) => {
    setCart({ cartItems });
    localStorage.setItem("cart", JSON.stringify({ cartItems }));
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use CartContext in any component
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
