import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Product } from "@/lib/types";
import Features from "../components/Features";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

const ShopPage = async () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!apiBaseUrl) {
    throw new Error("API Base URL is not defined in the environment variables");
  }

  // Fetch the products data from the API
  const response = await fetch(`${apiBaseUrl}/api/products`, {
    cache: "no-store", // Ensures fresh data is fetched each time
  });

  if (!response.ok) {
    console.error("Failed to fetch products:", response.statusText);
    notFound(); // Redirect to a 404 page if data fetch fails
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    console.error("Invalid response format:", await response.text());
    notFound();
  }

  const products: Product[] = await response.json();

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
          {products.map((product) => (
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
