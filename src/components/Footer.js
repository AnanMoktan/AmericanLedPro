// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>American LED Pro Wholesale</h3>
          <p>Providing high-quality LED lighting solutions since 2010.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/americanledprocom/">
              <FaFacebook />
            </a>

            <a href="https://www.instagram.com/americanledproofficial/">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Product Categories</h4>
          <ul>
            <li>
              <Link to="/category/flood-light">Flood Lights</Link>
            </li>
            <li>
              <Link to="/category/led-panel">LED Panels</Link>
            </li>
            <li>
              <Link to="/category/shoe-box-light">Shoe Box Lights</Link>
            </li>
            <li>
              <Link to="/category/canopy-light">Canopy Lights</Link>
            </li>
            <li>
              <Link to="/category/dusk-to-dawn-light">Dusk To Dawn Lights</Link>
            </li>
            <li>
              <Link to="/category/pole-light">Pole Lights</Link>
            </li>
            <li>
              <Link to="/category/ufo-light">UFO / High Bay Lights</Link>
            </li>
            <li>
              <Link to="/category/wall-pack-light">Wall Pack Lights</Link>
            </li>
            <li>
              <Link to="/category/accessories">Accessories</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>
              <FaPhone /> (510) 688-4433
              <br />
              <FaPhone /> (972) 685-0112
            </li>
            <li>
              <FaEnvelope />
              americanledpro@yahoo.com
            </li>
            <li>
              <FaMapMarkerAlt /> 9840 Monroe Dr UNIT #105, Dallas, TX 75220
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} American LED pro Wholesale. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
