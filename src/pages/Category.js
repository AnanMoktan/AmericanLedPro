// src/pages/Category.js
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const Category = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const productsPerPage = 4;

  const category = categories.find((cat) => cat.id === categoryId);
  const categoryProducts = products.filter(
    (product) => product.category === categoryId
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = categoryProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(categoryProducts.length / productsPerPage);

  return (
    <div className="category-page">
      <h1>{category?.name || "Category"}</h1>
      <div className="products-container">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath={`/category/${categoryId}`}
      />
    </div>
  );
};

export default Category;
