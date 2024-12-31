import {
  ChevronRight,
  Trash,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import Image from "next/image";
import Features from "../components/Features";

const ShopPage = () => {


  return (
    <div>
      <header className='text-center py-28 bg-[url("/images/banners/shop.png")] bg-cover bg-fixed bg-no-repeat bg-left'>
        <Image
          src="/images/furniro-icon.png"
          width={70}
          height={70}
          alt="Furniro"
          className="mx-auto"
        />
        <h1 className="font-medium text-5xl mb-4">Cart</h1>
        <nav className="flex justify-center">
          <ul className="flex items-center space-x-2 font-medium text-base">
            <li className="font-medium">
              <Link href="/">Home</Link>
            </li>
            <li>
              <ChevronRight />
            </li>
            <li className="font-light">Cart</li>
          </ul>
        </nav>
      </header>

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

            {/* Cart Item */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-6 items-center shadow-custom-light py-6 px-4 lg:px-10 mb-10 text-base text-black">
              {/* Product Image */}
              <div className="flex items-center gap-5 relative group cursor-pointer">
                <Image
                  src="/images/cart-item-1.png"
                  alt="cart"
                  width={80}
                  height={80}
                  className="bg-[#efe6d1] rounded p-2 mx-auto lg:mx-0"
                />
              </div>

              {/* Product Name */}
              <div className="text-center">
                <span className="text-base text-[#9F9F9F]">Sofa</span>
              </div>

              {/* Price */}
              <div className="text-center">
                <span className="text-base text-[#9F9F9F]">Rs. 250,000</span>
              </div>

              {/* Quantity */}
              <div className="flex justify-center">
                <input
                  type="number"
                  className="border rounded w-12 h-8 text-center border-gray-500"
                  defaultValue={1}
                />
              </div>

              {/* Subtotal */}
              <div className="text-center text-base">Rs. 250,000</div>

              {/* Remove */}
              <div className="text-center text-base flex justify-center lg:justify-start">
                <Trash className="fill-primary stroke-primary cursor-pointer hover:fill-red-300 hover:stroke-red-500" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 lg:col-span-4 p-2">
            <div className="bg-[#F9F1E7] py-6 px-6 lg:px-10">
              <h4 className="font-semibold text-2xl lg:text-3xl text-center mb-10">
                Cart Totals
              </h4>
              <div className="flex justify-between mb-5 text-sm lg:text-base">
                <p>Subtotal</p>
                <p className="text-[#9F9F9F] font-medium">Rs. 520,000.00</p>
              </div>
              <div className="flex justify-between pb-8 text-sm lg:text-base">
                <p>Total</p>
                <p className="text-primary font-medium text-lg lg:text-xl">
                  Rs. 250,000.00
                </p>
              </div>
              <div className="text-center">
                <button  className="bg-transparent text-black border border-black rounded-lg h-12 lg:h-14 px-8 lg:px-12 text-sm lg:text-base hover:bg-primary hover:text-white hover:border-primary">
                  <Link href="/checkout">
                    Checkout
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features/>
    </div>
  );
};

export default ShopPage;
