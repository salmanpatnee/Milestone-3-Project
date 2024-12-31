'use client'
import { useCart } from "@/context/cartContext";
import { Product } from "@/lib/types";
import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";

interface Props {
    product: Product
}

const AddToCart = ({product}: Props) => {
  
    const { cart, addItemToCart } = useCart();
    const router = useRouter()



  const addToCart = () => {
    addItemToCart(product)
    toast.success("Item added to cart.")
    router.push(`/cart`);
    
  }
    return (
        <>
    <button onClick={addToCart} className="flex items-center bg-primary text-white border border-primary rounded-lg text-center h-16 px-12 text-base hover:bg-black hover:text-white hover:border-black">
      Add To Cart
    </button>
    <Toaster />
    </>
  );
};

export default AddToCart;
