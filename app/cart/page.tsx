'use client';

import React from "react";
import { Trash } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Features from "../components/Features";
import PageHeader from "../components/PageHeader";
import { useCart } from "@/context/cartContext";
import { urlFor } from "@/sanity/lib/image";
import toast, { Toaster } from "react-hot-toast";

const ShopPage = () => {
  const { cart, removeItemFromCart } = useCart(); // Get the removeItemFromCart function

  const calculateSubtotal = (price: number, quantity: number) =>
    price * quantity;

  const calculateTotal = () =>
    parseFloat(
      cart.cartItems.reduce(
        (total, item) =>
          total + calculateSubtotal(item.price, item.quantity || 1),
        0
      ).toFixed(2)
    );
  

  return (
    <div>
      <PageHeader title="Cart" />

      <section className="wrapper lg:py-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-1 lg:col-span-8 p-2">
            {/* Header */}
            <header className="hidden md:grid grid-cols-4 lg:grid-cols-6 bg-[#F9F1E7] justify-items-center items-center shadow-custom-light py-4 px-4 lg:px-10 mb-12 text-black text-base font-medium">
              <div className="w-full text-center"></div>
              <div className="w-full text-center">Product</div>
              <div className="w-full text-center">Price</div>
              <div className="w-full text-center">Quantity</div>
              <div className="w-full text-center">Subtotal</div>
              <div className="w-full text-center"></div>
            </header>

            {/* Cart Items */}
            {cart.cartItems.map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-1 gap-6 sm:grid-cols-6 items-center shadow-custom-light py-6 px-4 lg:px-10 mb-10 text-base text-black"
              >
                {/* Product Image */}
                <div className="flex items-center gap-5 relative group cursor-pointer">
                  <Image
                    src={
                      item.image
                        ? urlFor(item.image)?.width(80).height(80).url()
                        : "/images/placeholder.png"
                    }
                    alt={item.slug.current}
                    width={80}
                    height={80}
                    className="border-primary border rounded mx-auto lg:mx-0"
                  />
                </div>

                {/* Product Name */}
                <div className="text-center">
                  <span className="text-base text-[#9F9F9F]">{item.title}</span>
                </div>

                {/* Price */}
                <div className="text-center">
                  <span className="text-base text-[#9F9F9F]">
                    Rs. {item.price}
                  </span>
                </div>

                {/* Quantity */}
                <div className="flex justify-center">
                  <input
                    type="number"
                    className="border rounded w-12 h-8 text-center border-gray-500"
                    defaultValue={item.quantity || 1}
                  />
                </div>

                {/* Subtotal */}
                <div className="text-center text-base">
                  Rs. {calculateSubtotal(item.price, item.quantity || 1)}
                </div>

                {/* Remove */}
                <div className="text-center text-base flex justify-center lg:justify-start">
                  <Trash
                    className="fill-primary stroke-primary cursor-pointer hover:fill-red-300 hover:stroke-red-500"
                    onClick={() => {
                      removeItemFromCart(item._id)
                      toast.success(`${item.title} removed from cart.`);
                    }} // Call removeItemFromCart
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="col-span-1 lg:col-span-4 p-2">
            <div className="bg-[#F9F1E7] py-6 px-6 lg:px-10">
              <h4 className="font-semibold text-2xl lg:text-3xl text-center mb-10">
                Cart Totals
              </h4>
              <div className="flex justify-between mb-5 text-sm lg:text-base">
                <p>Subtotal</p>
                <p className="text-[#9F9F9F] font-medium">
                  Rs. {calculateTotal()}
                </p>
              </div>
              <div className="flex justify-between pb-8 text-sm lg:text-base">
                <p>Total</p>
                <p className="text-primary font-medium text-lg lg:text-xl">
                  Rs. {calculateTotal()}
                </p>
              </div>
              <div className="text-center">
                <button className="bg-transparent text-black border border-black rounded-lg h-12 lg:h-14 px-8 lg:px-12 text-sm lg:text-base hover:bg-primary hover:text-white hover:border-primary">
                  <Link href="/checkout">Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
            <Toaster  />
      <Features />
    </div>
  );
};

export default ShopPage;
