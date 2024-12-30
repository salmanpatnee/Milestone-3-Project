import React from 'react';
import Home from './Home';

const HomePage = async () => {

  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();
    
  return <Home products={products} />;
};

export default HomePage;
