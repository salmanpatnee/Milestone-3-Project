"use client";

import { useCart } from "@/context/cartContext";
import { Product } from "@/lib/types";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

const AddToCart = ({ product }: Props) => {
  const { addItemToCart } = useCart();
  const router = useRouter();

  const addToCart = () => {
    const item = {
      ...product,
      quantity: product.quantity || 1, // Default to 1 if not provided
    };

    addItemToCart(item); // Pass the complete product object
    toast.success("Item added to cart.");

    setTimeout(() => {
      router.push(`/cart`);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={addToCart}
        className="flex items-center bg-primary text-white border border-primary rounded-lg text-center h-16 px-12 text-base hover:bg-black hover:text-white hover:border-black"
      >
        Add To Cart
      </button>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default AddToCart;
