// src/pages/Contact.js
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>(972) 685-0112</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>(510) 688-4433</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>americanledpro@yahoo.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <address>
              9840 Monroe Dr UNIT #105
              <br />
              Dallas, TX 75220
              <br />
              United States
            </address>
          </div>
          <div className="business-hours">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:30 PM</p>
            <p>Saturday: 9:30 AM - 5:30 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/americanledprocom"
              className="social-link"
            >
              <FaFacebook />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/americanledproofficial/"
              className="social-link"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="map-container">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.0265797627426!2d-96.88023058341165!3d32.87545405909565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9d77f48deb33%3A0x32ef19d96f80b67a!2sAmerican%20Led%20Pro%20-%20Wholesale%20Led%2C%20Flood%20%26%20Shoebox%20Lights%20Dallas%20TX!5e0!3m2!1sen!2sus!4v1752350331291!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
