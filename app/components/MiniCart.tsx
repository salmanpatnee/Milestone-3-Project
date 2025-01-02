"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCart } from "@/context/cartContext"; // Assuming the cart context is set up
import { urlFor } from "@/sanity/lib/image";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge"

const MiniCart = () => {
  const { cart, removeItemFromCart } = useCart();

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
    <>
    
    <Popover>
      <PopoverTrigger className="group relative">
        <ShoppingCart
          size={32}
          className="stroke-current text-black transition-colors group-hover:stroke-primary"
        /><Badge className="bg-primary text-white rounded-full w-6 h-6 absolute -top-3 -right-4  text-center p-2 text-xs">{cart.cartItems.length}</Badge>

      </PopoverTrigger>

      {/* Popover Content (Shopping Cart Summary) */}
      <PopoverContent className="rounded-none white w-96 py-7 px-8">
        <h4 className="font-semibold text-xl border-b border-[#D9D9D9] pb-7 mb-10">
          Shopping Cart
        </h4>

        {/* Dynamically rendering cart items */}
        {cart.cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          cart.cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between mb-5"
            >
              <div>
                <Image
                  src={
                    item.image
                      ? urlFor(item.image)?.width(80).height(80).url()
                      : "/images/placeholder.png"
                  }
                  alt={item.title}
                  width={60}
                  height={60}
                  className="rounded-lg bg-[#efe6d1]"
                />
              </div>
              <div>
                <p className="text-base mb-2">{item.title}</p>
                <p className="flex space-x-4 items-center">
                  <span className="font-light text-base">
                    {item.quantity || 1}
                  </span>
                  <span className="font-light text-base">X</span>
                  <span className="font-medium text-primary text-xs">
                    Rs. {item.price}
                  </span>
                </p>
              </div>
              <div>
                <Image
                  src="/images/icons/close.png"
                  width={20}
                  height={20}
                  alt="Close"
                  className="cursor-pointer" onClick={() => {
                    removeItemFromCart(item._id)
                  }} // Call removeItemFromCart
                />
              </div>
            </div>
          ))
        )}

        {/* Cart Summary */}
        <div className="mt-20 flex text-base justify-between border-b border-[#D9D9D9] pb-6">
          <p>Subtotal</p>
          <p className="text-primary font-medium">Rs. {calculateTotal()}</p>
        </div>

        {/* Cart Actions */}
        <div className="flex items-center justify-between pt-7 space-x-2">
          <Link
            href="/cart"
            className="border rounded-2xl text-xs py-2 px-6 hover:bg-primary hover:text-white transition-colors"
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            className="border rounded-2xl text-xs py-2 px-6 hover:bg-primary hover:text-white transition-colors"
          >
            Checkout
          </Link>
          <Link
            href="/cart"
            className="border rounded-2xl text-xs py-2 px-6 hover:bg-primary hover:text-white transition-colors"
          >
            Comparison
          </Link>
        </div>
      </PopoverContent>
    </Popover>
    </>
  );
};

export default MiniCart;
