import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const PRODUCTS_QUERY = defineQuery(`*[_type == "product"]`);
  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });
  return NextResponse.json(products);
}
