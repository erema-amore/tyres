import React from "react";
import "./CatalogPages.css";

const CatalogPages = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    let pages = [];
    const visiblePages = 5;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 2 && i <= currentPage + 2)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="pagination">
      {getPages().map((page, index) => (
        <button
          key={index}
          className={`page-item ${page === currentPage ? "active" : ""}`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
      <button className="next-btn" onClick={() => onPageChange(currentPage + 1)}>
        Дальше
      </button>
    </div>
  );
};

export default CatalogPages;
