// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
// import React from "react";

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
//   itemsPerPage?: number;
//   totalItems?: number;
// }

// const Pagination: React.FC<PaginationProps> = ({
//   currentPage,
//   totalPages,
//   onPageChange,
//   itemsPerPage = 8,
//   totalItems = 0,
// }) => {
//   const maxVisiblePages = 5; // Number of page buttons to show at once

//   const getPageNumbers = () => {
//     const pages = [];
//     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

//     if (endPage - startPage + 1 < maxVisiblePages) {
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       pages.push(i);
//     }
//     return pages;
//   };

//   return (
//     <div className="flex justify-center items-center gap-2 mt-8">
//       <button
//         onClick={() => onPageChange(Math.max(1, currentPage - 1))}
//         disabled={currentPage === 1}
//         className={`px-3 py-1 rounded-md border ${
//           currentPage === 1
//             ? "bg-gray-200 cursor-not-allowed"
//             : "bg-white hover:bg-gray-100 border-gray-300"
//         }`}
//       >
//         Previous
//       </button>

//       {getPageNumbers().map((page) => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={`px-3 py-1 rounded-md border ${
//             currentPage === page
//               ? "bg-primary text-white border-primary"
//               : "bg-white hover:bg-gray-100 border-gray-300"
//           }`}
//         >
//           {page}
//         </button>
//       ))}

//       <button
//         onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
//         disabled={currentPage === totalPages}
//         className={`px-3 py-1 rounded-md border ${
//           currentPage === totalPages
//             ? "bg-gray-200 cursor-not-allowed"
//             : "bg-white hover:bg-gray-100 border-gray-300"
//         }`}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;

"use client";
import React from "react";
import Button from "../button/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
  totalItems?: number;
  showPageNumbers?: boolean;
  showItemCount?: boolean;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage = 8,
  totalItems = 0,
  showPageNumbers = true,
  showItemCount = true,
  className = "",
}) => {
  const maxVisiblePages = 5;

  const getPageNumbers = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const half = Math.floor(maxVisiblePages / 2);
    let startPage = currentPage - half;
    let endPage = currentPage + half;

    if (startPage < 1) {
      startPage = 1;
      endPage = maxVisiblePages;
    } else if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const getItemRange = () => {
    if (!totalItems) return null;

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return `${startItem}-${endItem} of ${totalItems.toLocaleString()}`;
  };

  const handlePreviousPage = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNextPage = () =>
    onPageChange(Math.min(totalPages, currentPage + 1));

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  if (totalPages <= 1) return null;

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 ${className}`}
    >
      {showItemCount && totalItems > 0 && (
        <div className="text-sm text-gray-600">Showing {getItemRange()}</div>
      )}

      <div className="flex items-center gap-1">
        <Button
          size="xs"
          className=""
          onClick={handlePreviousPage}
          disabled={isFirstPage}
        >
          <ChevronLeftIcon />
        </Button>

        {showPageNumbers && (
          <div className="flex items-center gap-1 mx-2">
            {getPageNumbers().map((page, index, array) => {
              const showStartEllipsis = index === 0 && page > 1;
              const showEndEllipsis =
                index === array.length - 1 && page < totalPages;

              return (
                <React.Fragment key={page}>
                  {showStartEllipsis && (
                    <span className="px-3 py-2 text-gray-500">...</span>
                  )}

                  <Button
                    size="xs"
                    variant="primary-outline"
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-2 border text-dark!  transition-all duration-200 min-w-[42px] ${
                      currentPage === page
                        ? "bg-primary!  text-white! border-primary shadow-sm"
                        : "bg-white text-dark   hover:bg-gray-100"
                    }`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </Button>

                  {showEndEllipsis && (
                    <span className="px-3 py-2 text-gray-500">...</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}

        <Button
          size="xs"
          className=""
          onClick={handleNextPage}
          disabled={isLastPage}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};

const ChevronLeftIcon: React.FC = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRightIcon: React.FC = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default Pagination;
