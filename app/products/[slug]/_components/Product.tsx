"use client";

import { ChevronRight, Plus, Star } from "lucide-react";
import Link from "next/link";
// import { Heart, RefreshCw, Star, Truck } from "lucide-react";
// import React, { useState } from "react";
import { Product } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PortableText } from "next-sanity";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  product: Product;
}

const ProductDetail = ({ product }: Props) => {
  const productImageUrl = product.image
    ? urlFor(product.image)?.width(285).height(301).url()
    : "https://placehold.co/550x310/png";

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <article className={`product-${product.slug.current}`}>
      <section className="bg-bglight mb-9">
        <div className="wrapper py-10 flex items-center justify-between">
          <div className="flex">
            <div className="flex items-center space-x-2">
              <ul className="flex space-x-5 text-base text-[#9F9F9F]">
                <li>
                  <Link href="/" className="hover:text-black transition-all">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight />
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-black transition-all"
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ms-7 border-s-2 border-[#9F9F9F]">
              <p className="text-base ms-8">{product.title}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex lg:flex-row flex-col wrapper">
        <div className="lg:w-6/12 w-full lg:pe-10 mb-10 lg:mb-0">
          <div className="flex gap-8">
            <Image
              src={productImageUrl}
              alt={product.title}
              width={400}
              height={400}
              className="rounded-t-md w-full"
            />
          </div>
        </div>
        <div className="lg:w-6/12 w-full">
          <h2 className="text-[42px] text-black mb-1">{product.title}</h2>
          <p className="text-2xl mb-4 font-medium text-[#9F9F9F]">
            {product.salePrice ? (
              <>
                <del className="line-through text-red-500 mr-2">
                  PKR {product.price}
                </del>
                <span className="text-gray-500 font-bold">
                  PKR {product.salePrice}
                </span>
              </>
            ) : (
              `PKR ${product.price}`
            )}
          </p>

          <div className="flex items-center gap-3 mb-4">
            <div className="gap-1 flex border-e-2 pe-5">
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-gray-300 border-gray-300"
              />
            </div>
            <p className="text-[#9F9F9F] text-xs">5 Customer Review</p>
          </div>

          {product.details && product.details.length > 0 && (
            <div className="prose max-w-none mb-5">
              <PortableText value={product.details} />
            </div>
          )}

          {/* <p className="text-xs mb-5">
            <PortableText value={product.details}/>
            
          </p> */}
          {/* <div className="flex-col gap-6 items-center mb-6">
            <span className="text-sm text-[#9F9F9F] block mb-2">Size:</span>
            <div className="flex items-center gap-4">
              <button className="transition-all rounded bg-primary text-white border-0  hover:bg-primary hover:text-white w-8 h-8 text-sm">
                XS
              </button>
              <button className="transition-all rounded bg-[#F9F1E7] border-0  hover:bg-primary hover:text-white w-8 h-8 text-sm">
                S
              </button>
              <button className="transition-all rounded bg-[#F9F1E7] border-0  hover:bg-primary hover:text-white w-8 h-8 text-sm">
                M
              </button>
              <button className="transition-all rounded bg-[#F9F1E7] border-0  hover:bg-primary hover:text-white w-8 h-8 text-sm">
                X
              </button>
              <button className="transition-all rounded bg-[#F9F1E7] border-0  hover:bg-primary hover:text-white w-8 h-8 text-sm">
                XL
              </button>
            </div>
          </div>
          <div className="flex-col gap-6 items-center mb-6">
            <span className="text-sm text-[#9F9F9F] block mb-2">Colors:</span>
            <div className="flex items-center gap-2">
              <button className="transition-all rounded-full bg-[#A0BCE0] border-2 border-[#A0BCE0] hover:border-[#000000] w-8 h-8"></button>
              <button className="transition-all opacity-90 hover:opacity-1 rounded-full bg-primary border-2 border-primary hover:border-[#000000] w-8 h-8"></button>
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row gap-2 border-b pb-14 mb-10">
            <div className="flex items-center">
              <button
                onClick={decrement}
                className="w-10 h-16 text-gray-700 rounded-s-lg border border-black border-e-0 hover:bg-primary focus:outline-none hover:text-white hover:border-primary"
              >
                -
              </button>

              <input
                type="number"
                value={quantity}
                min="1"
                readOnly
                className="border-y border-black focus:outline-none h-16 text-center w-10"
              />

              <button
                onClick={increment}
                className="w-10 h-16 text-gray-700 rounded-e-lg border border-black border-s-0 hover:bg-primary focus:outline-none hover:text-white hover:border-primary"
              >
                +
              </button>
            </div>
            <Link
              href="/cart"
              className="flex items-center bg-primary text-white border border-primary rounded-lg text-center h-16 px-12 text-base hover:bg-black hover:text-white hover:border-black"
            >
              Add To Cart
            </Link>
            <button className="bg-white text-black border border-black rounded-lg text-center h-16 px-12 text-base hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center space-x-2">
              <Plus />
              <span>Compare</span>
            </button>
          </div>
          <div className="pb-10">
            <ul className="space-y-3">
              {" "}
              {/* Adds vertical space */}
              <li className="text-base text-[#9F9F9F] flex">
                <span className="font-medium min-w-[100px]">SKU</span>
                <span className="mx-2">:</span>
                <span className="font-medium">SS001</span>
              </li>
              <li className="text-base text-[#9F9F9F] flex">
                <span className="font-medium min-w-[100px]">Category</span>
                <span className="mx-2">:</span>
                <span className="font-medium">
                  <Link href="/shop?category=sofas" className="hover:underline">
                    Sofas
                  </Link>
                </span>
              </li>
              <li className="text-base text-[#9F9F9F] flex">
                <span className="font-medium min-w-[100px]">Tags</span>
                <span className="mx-2">:</span>
                <span className="font-medium space-x-2">
                  <Link href="/shop?tag=sofa" className="hover:underline">
                    Sofa
                  </Link>
                  ,
                  <Link href="/shop?tag=chair" className="hover:underline">
                    Chair
                  </Link>
                  ,
                  <Link href="/shop?tag=home" className="hover:underline">
                    Home
                  </Link>
                  ,
                  <Link href="/shop?tag=shop" className="hover:underline">
                    Shop
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className=" py-12 mb-10">
        <div className="wrapper">
          <Tabs
            defaultValue="account"
            className="lg:w-[1000px] w-full mx-auto "
          >
            <TabsList className="flex flex-col md:flex-row justify-center bg-white space-x-12  lg:mb-9 mb-20 text-center">
              <TabsTrigger
                className="text-2xl font-normal text-[#9F9F9F] "
                value="account"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                className="text-2xl font-normal text-[#9F9F9F] "
                value="password"
              >
                Additional Information
              </TabsTrigger>
              <TabsTrigger
                className="text-2xl font-normal text-[#9F9F9F] "
                value="reviews"
              >
                Reviews [5]
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">

            {product.details && product.details.length > 0 && (
            <div className="prose max-w-none mb-5 text-xl">
              <PortableText value={product.details} />
            </div>
          )}

              
            </TabsContent>
            <TabsContent value="password">
              <div className="text-xl">
                <p className="mb-8">
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
                <p>
                  Embodying the raw, wayward spirit of rock roll, the Kilburn
                  portable active stereo speaker takes the unmistakable look and
                  sound of Marshall, unplugs the chords, and takes the show on
                  the road.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="text-xl">
                <p className="mb-8">
                  Embodying the raw, wayward spirit of rock roll, the Kilburn
                  portable active stereo speaker takes the unmistakable look and
                  sound of Marshall, unplugs the chords, and takes the show on
                  the road.
                </p>
                <p>
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </article>
  );
};

export default ProductDetail;
