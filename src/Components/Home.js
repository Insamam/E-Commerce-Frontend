// Home.js
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import ProductCard from './ProductCard';
import Shimmer from './Shimmer';

const Home = () => {
  const { search, products, searchResults, isLoading } = useContext(DataContext);
  const shimmerCount = 10; // Set your desired shimmer count

  const displayProducts = search.length > 0 ? searchResults : products;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {isLoading ? (
            // Show shimmer or loading indicator here
            <Shimmer count={shimmerCount} />
          ) : (
            // Render ProductCard components
            displayProducts.map((product) => (
              <ProductCard key={product.id} productDetails={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
