// src/components/Pagination.js
import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, basePath }) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link to={`${basePath}?page=${currentPage - 1}`} className="page-link">
          Previous
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          to={`${basePath}?page=${page}`}
          className={`page-link ${page === currentPage ? "active" : ""}`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link to={`${basePath}?page=${currentPage + 1}`} className="page-link">
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
