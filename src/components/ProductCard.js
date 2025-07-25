// src/components/ProductCard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>

          <button className="view-btn" onClick={openModal}>
            View Details
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "500px",
              width: "90%",
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div
              className="modal-images"
              style={{
                display: "flex",
                content: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {product.images &&
                product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "200px",
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.6)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                ))}

              {/* If product has more images, they can be rendered here */}
            </div>
            <p>
              To make this product yours. please call us at {"972-685-0112"} or
              To know more about our products click below button to chat.
            </p>
            <button className="buy-btn  ">
              <Link
                to="https://t.me/Americanledpro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
                Chat Now
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
