import React from "react";
import { notFound } from "next/navigation";
import { Product } from "@/lib/types";
import ProductDetail from "./_components/Product";

interface Props {
  params: { slug: string };
}

const ProductDetailPage = async ({ params }: Props) => {
  // Fetch data from the API endpoint
  const response = await fetch(
    `http://localhost:3000/api/products/${params.slug}`
  );

  // If the response is not OK, trigger a 404 page
  if (!response.ok) {
    notFound();
  }

  const product: Product = await response.json();

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
