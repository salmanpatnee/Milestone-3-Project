import React from 'react';
import Home from './Home';
import axios from "axios"



const HomePage = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  
  const products = await response.json()
    
  return <Home products={products} />;
};

export default HomePage;
