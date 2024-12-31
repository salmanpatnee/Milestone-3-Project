import Home from './Home';

const HomePage = async () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseURL}/api/products`, { cache: "no-store" });
  const products = await response.json();

  return <Home products={products} />;
};

export default HomePage;

