import { NextResponse } from "next/server";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";

const PRODUCT_QUERY = defineQuery(
  `*[ _type == "product" && slug.current == $slug ][0]`
);

const { projectId, dataset } = client.config();

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  if (!slug) {
    return NextResponse.json(
      { error: "Slug parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Fetch the product using the defined query
    const { data: product } = await sanityFetch({
      query: PRODUCT_QUERY,
      params: { slug },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Error fetching product" },
      { status: 500 }
    );
  }
}
