import { ChevronRight, Grip, Laptop, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Features from "../components/Features";
import axios from "axios";
import { Product } from "@/lib/types";

const ShopPage = async () => {
  const response = await axios.get(`http://localhost:3000/api/products`);

  const products: Product[] = await response.data;

  return (
    <div>
      <header className='text-center py-32 bg-[url("/images/banners/shop.png")] bg-cover bg-fixed bg-no-repeat bg-left'>
        <h1 className="font-medium text-5xl mb-4">Shop</h1>
        <nav className="flex justify-center">
          <ul className="flex items-center space-x-2 font-medium text-base">
            <li className="font-medium">
              <Link href="/">Home</Link>
            </li>
            <li>
              <ChevronRight />
            </li>
            <li className="font-light">Shop</li>
          </ul>
        </nav>
      </header>


      {/* <section className="bg-secondary">
        <div className="wrapper py-10 flex lg:flex-row flex-col lg:space-y-0 space-y-5  items-center justify-between">
          <div className="flex">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal size={19} />{" "}
              <span className="text-xl ">Filter</span>
            </div>
            <div className="flex items-center space-x-6 ms-5 pe-7 border-e-2 border-[#9F9F9F]">
              <Grip size={20} />
              <Laptop size={22} />
            </div>
            <div>
              <p className="text-base ms-8">Showing 1–16 of 32 results</p>
            </div>
          </div>
          <div className="flex flex-col lg:justify-end justify-start lg:space-x-7 lg:space-y-0 space-y-5">
            <div className="flex items-center space-x-5">
              <label className="text-xl">Show</label>
              <Select>
                <SelectTrigger className="lg:w-[55px] h-[55px] w-full bg-white rounded-none border-none text-[#9F9F9F] text-lg focus:ring-0">
                  <SelectValue placeholder="16" />
                </SelectTrigger>
                <SelectContent className="text-xl text-[#9F9F9F]">
                  <SelectItem value="light">16</SelectItem>
                  <SelectItem value="dark">25</SelectItem>
                  <SelectItem value="system">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex lg:flex-row flex-col items-center space-x-5">
              <label className="text-xl">Soty By</label>
              <Select>
              <SelectTrigger className="lg:w-[155px] h-[55px] w-full bg-white rounded-none border-none text-[#9F9F9F] text-lg focus:ring-0">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent className="text-xl text-[#9F9F9F]">
                  <SelectItem value="light">Price</SelectItem>
                  <SelectItem value="dark">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section> */}
      <section className="wrapper">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
          {products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>

        <Pagination />
      </section>

      <Features />
    </div>
  );
};

export default ShopPage;
