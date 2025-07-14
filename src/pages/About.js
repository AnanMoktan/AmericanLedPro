// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h1>About American LED Wholesale</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, American LED Wholesale has been providing
            high-quality, energy-efficient lighting solutions to businesses and
            contractors across the country. We specialize in commercial and
            industrial LED lighting products that offer superior performance and
            long-term savings.
          </p>
          <h2>Our Mission</h2>
          <p>
            To provide our customers with the best LED lighting products at
            competitive prices, backed by exceptional customer service and
            technical support.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://via.placeholder.com/500x300/2a5c8b/ffffff?text=Our+Warehouse"
            alt="Our Warehouse"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
