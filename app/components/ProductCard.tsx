import { Product } from "@/lib/types";
import { urlFor } from "@/sanity/lib/image";
import { ArrowRightLeft, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {

  const productImageUrl = product.image
      ? urlFor(product.image)?.width(285).height(301).url()
      : 'https://placehold.co/550x310/png';

  return (
    <div className="group relative rounded-md overflow-hidden">
      {/* Mask Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center z-10 transition-opacity duration-300">
        <Link
          href={`/products/${product.slug.current}`}
          className="bg-white text-primary px-9 py-3 font-semibold text-base mb-4"
        >
          View Product
        </Link>

        {/* Links Section */}
        <div className="flex items-center space-x-5 text-white text-base font-semibold">
          <a
            href="#"
            className="hover:text-gray-300 transition flex items-center"
            aria-label="Share product"
          >
            <Share2
              size={16}
              color="#ffffff"
              strokeWidth={1}
              className="fill-white me-1"
            />
            Share
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition flex items-center"
            aria-label="Compare product"
          >
            <ArrowRightLeft
              size={16}
              color="#ffffff"
              strokeWidth={1}
              className="fill-white me-1"
            />
            Compare
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition flex items-center"
            aria-label="Like product"
          >
            <Heart
              size={16}
              color="#ffffff"
              strokeWidth={1}
              className="stroke-white me-1"
            />
            Like
          </a>
        </div>
      </div>

      {/* Card Content */}
      <article className="relative z-0">
        <div className="relative">
          <Image
            src={productImageUrl}
            alt={product.title}
            width={285}
            height={301}
            className="rounded-t-md w-full"
          />

          {/* {product.discount && (
            <span className="bg-[#E97171] rounded-full w-12 h-12 text-white text-base font-medium absolute top-6 right-6 flex items-center justify-center z-20">
              -{product.discount}%
            </span>
          )}
          {product.newArrival && (
            <span className="bg-[#2EC1AC] rounded-full w-12 h-12 text-white text-base font-medium absolute top-6 right-6 flex items-center justify-center z-20">
              New
            </span>
          )} */}
        </div>

        <section className="bg-[#F4F5F7] p-4 rounded-b-md">
          <h3 className="text-2xl font-semibold text-[#3A3A3A] mb-2">
            {product.title}
          </h3>
          <p className="font-medium text-[#898989] text-base mb-2">
            {product.subtitle}
          </p>
          <p className="flex justify-between items-center">
            <ins className="font-semibold lg:text-[20px] text-[#3A3A3A] no-underline">
              PKR {product.salePrice}
            </ins>
            <del className="font-normal text-base text-[#B0B0B0]">
              PKR {product.price}
            </del>
          </p>
        </section>
      </article>
    </div>
  );
};

export default ProductCard;
