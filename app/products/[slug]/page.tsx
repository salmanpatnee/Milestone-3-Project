import React from "react";
import { notFound } from "next/navigation";
import { Product } from "@/lib/types";
import ProductDetail from "./_components/Product";

interface Props {
  params: { slug: string };
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.slug}`
  );

  if (!response.ok) {
    return {
      title: "Product Not Found - My Store",
      description: "The product you are looking for does not exist.",
    };
  }

  const product = await response.json();

  return {
    title: `${product.title} - NextCart`,
    description: product.description || "Buy the best products at NextCart!",
  };
}



const ProductDetailPage = async ({ params }: Props) => {
  // Fetch data from the API endpoint
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.slug}`
  );

  // If the response is not OK, trigger a 404 page
  if (!response.ok) {
    notFound();
  }

  const product: Product = await response.json();



  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
