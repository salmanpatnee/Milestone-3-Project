import React from 'react';
import Home from './Home';
import axios from "axios"



const HomePage = async () => {

  const response = await axios.get(`http://localhost:3000/api/products`);
  
  const products = await response.data
    
  return <Home products={products} />;
};

export default HomePage;
