import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Product } from "@/lib/types";
import Features from "../components/Features";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";


const ShopPage = async () => {
  
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseURL}/api/products`, { cache: "no-store" });
  const products = await response.json();

  return (
    <div>
      <header className="text-center py-32 bg-[url('/images/banners/shop.png')] bg-cover bg-fixed bg-no-repeat bg-left">
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

      <section className="wrapper">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
          {products.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <Pagination />
      </section>

      <Features />
    </div>
  );
};

export default ShopPage;
