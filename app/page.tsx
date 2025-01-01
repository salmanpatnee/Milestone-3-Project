import { Product } from '@/lib/types';
import Link from 'next/link';
import Hero from './components/Hero';
import HomeSlider from './components/HomeSlider';
import ProductCard from './components/ProductCard';

const HomePage = async () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseURL}/api/products`, { cache: "no-store" });
  const products: Product[] = await response.json();

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
};

export default HomePage;

