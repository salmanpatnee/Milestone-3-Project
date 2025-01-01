import Link from "next/link";
import { Product } from "@/lib/types";
import Hero from "./components/Hero";
import HomeSlider from "./components/HomeSlider";
import ProductCard from "./components/ProductCard";

interface Props {
  products: Product[];
}

export default function Home({ products }: Props) {
  
  return (
    <div>
      <Hero />

      <section className="my-14 ">
        <div className="wrapper">
          {/* Section Title */}
          <header>
            <h2 className="title">Our Products</h2>
          </header>

          {/* Product Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="bg-white border border-primary text-primary text-center py-3 px-20 text-base font-semibold hover:bg-secondary"
            >
              Show More
            </Link>
          </div>
        </div>
      </section>

      <HomeSlider/>
    </div>
  );
}
