// src/pages/Home.js
import React from "react";
import ProductSlider from "../components/ProductSlider";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-banner">
        <h1>Quality LED Lighting Solutions</h1>
        <p>Energy efficient commercial and industrial lighting</p>
      </div>
      <ProductSlider />
    </div>
  );
};

export default Home;
