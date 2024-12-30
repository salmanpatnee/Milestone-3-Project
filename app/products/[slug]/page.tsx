import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  name: string;
  price: number;
  description: string;
  category: string;
  image: {
    asset: {
      url: string;
    };
  };
}

interface ProductDetailPageProps {
  params: { slug: string };
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  // Fetch data from the API endpoint
  const response = await fetch(
    `http://localhost:3000/api/products/${params.slug}`
  );

  // If the response is not OK, trigger a 404 page
  if (!response.ok) {
    notFound();
  }

  const product: Product = await response.json();

  // Destructure the fetched product data
  const { name, price, description, category, image } = product;

    const productImageUrl = image
    ? urlFor(image)?.width(550).height(310).url()
    : null;

    console.log(image);
    

  return (
    <main className="container mx-auto grid gap-12 p-12">
      <div className="grid items-top gap-12 sm:grid-cols-2">
        <Image
          src={productImageUrl}
          alt={name || "Product"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          width="550"
        />
        <div className="flex flex-col justify-center space-y-4">
          {name && (
            <h1 className="text-4xl font-bold tracking-tighter mb-8">{name}</h1>
          )}

          {price && (
            <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
              <dd className="font-semibold">Price</dd>
              <dt>{`$${price}`}</dt>
            </dl>
          )}

          {description && (
            <div>
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
