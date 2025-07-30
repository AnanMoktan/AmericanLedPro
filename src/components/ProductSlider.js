// src/components/ProductSlider.js
import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const ProductSlider = () => {
  // Shuffle products and take the first 4 for the slider
  const featuredProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <div className="product-slider">
      <h2>Featured Products</h2>
      <div className="slider-container">
        {featuredProducts.map((product) => (
          <div key={product.id} className="slide">
            <img src={product.image} alt={product.name} />
            <div className="slide-info">
              <h3>{product.name}</h3>

              <Link to={`/products`} className="shop-btn">
                view products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
