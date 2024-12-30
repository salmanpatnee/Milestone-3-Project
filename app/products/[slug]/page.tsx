import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

const PRODUCT_QUERY = defineQuery(`*[
  _type == "product" &&
  slug.current == $slug
][0]`);

const { projectId, dataset } = client.config();

// Image URL builder function
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

interface Props {
  params: { slug: string };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
  const { data: product } = await sanityFetch({
    query: PRODUCT_QUERY,
    params: await params,
  });

  if (!product) {
    notFound();
  }

  const { name, price, description, category, image } = product;
  const productImageUrl = image
    ? urlFor(image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto grid gap-12 p-12">
      {/* <div className="mb-4">
        <Link href="/">← Back to products</Link>
      </div> */}
      <div className="grid items-top gap-12 sm:grid-cols-2">
        <Image
          src={productImageUrl || "https://placehold.co/550x310/png"}
          alt={name || "Product"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          width="550"
        />
        <div className="flex flex-col justify-center space-y-4">
          {name && <h1 className="text-4xl font-bold tracking-tighter mb-8">{name}</h1>}
         
          {price && (
            <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
              <dd className="font-semibold">Price</dd>
              <dt>{`$${price}`}</dt>
            </dl>
          )}
        
        </div>
      </div>
    </main>
  );
}
