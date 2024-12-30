"use client";
import slide1 from "@/public/images/slide-1.png";
import slide2 from "@/public/images/slide-2.png";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { Product } from "@/lib/types";


interface Props {
  products: Product[];
}

export default function Home({ products }: Props) {
  const slides = [
    { imageUrl: slide1, href: "#" },
    { imageUrl: slide2, href: "#" },
    { imageUrl: slide1, href: "#" },
    { imageUrl: slide2, href: "#" },
  ];

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

      <section className="bglight py-11">
        <div className="wrapper flex items-center">
          <div className="lg:w-4/12 w-full">
            <h3 className="font-bold lg:text-[40px] text-3xl mb-2">
              50+ Beautiful rooms inspiration
            </h3>
            <p className="font-medium text-base text-[#616161] mb-8">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <Link
              href="/shop"
              className="bg-primary   border border-primary text-white text-center py-3 px-10 text-base font-semibold hover:bg-black transition-all"
            >
              Explore More
            </Link>
          </div>
          <div className="lg:w-8/12 lg:block hidden">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              spaceBetween={24}
              slidesPerView={2}
              loop={true}
              navigation={true}
              centeredSlides={true}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {slides.map((slide) => {
                return (
                  <SwiperSlide key={slide.href}>
                    <Link href={slide.href}>
                      <Image
                        src={slide.imageUrl}
                        alt="Slide"
                        width="372"
                        height="486"
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
