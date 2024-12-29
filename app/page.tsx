import React from 'react'
import Home from './Home'
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

const PRODUCTS_QUERY = defineQuery(`*[_type == "product"]`);

const HomePage = async () => {
  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

  return (    
    <Home products={products}/>
  )
}

export default HomePage
