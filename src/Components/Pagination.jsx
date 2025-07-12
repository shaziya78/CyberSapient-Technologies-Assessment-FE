// components/Pagination.jsx
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`px-3 py-1 border rounded ${
          currentPage === i ? 'bg-black text-white' : 'bg-white text-black'
        } text-sm`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      {/* <div className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div> */}
      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="p-2 rounded-full border text-gray-700  disabled:opacity-40"
        >
          <FaChevronLeft />
        </button>

        <div className="flex gap-1">{pages}</div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="p-2 rounded-full border text-gray-700  disabled:opacity-40"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
