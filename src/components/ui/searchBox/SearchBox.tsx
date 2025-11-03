// // components/SearchBox.tsx
// import React, { useState } from "react";
// import { Search } from "lucide-react";

// interface SearchBoxProps {
//   onSearch: (query: string) => void;
//   placeholder?: string;
// }

// export const SearchBox: React.FC<SearchBoxProps> = ({
//   onSearch,
//   placeholder = "Search",
// }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     onSearch(searchQuery);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         placeholder={placeholder}
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         onKeyDown={handleKeyDown}
//         className="w-full px-4 py-2.5 pr-11 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
//       />
//       <button
//         onClick={handleSearch}
//         className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//         aria-label="Search"
//       >
//         <Search size={18} />
//       </button>
//     </div>
//   );
// };

// components/SearchBox.tsx

// "use client";

// import React, { useState, useCallback, useMemo } from "react";
// import { Search } from "lucide-react";

// interface SearchBoxProps {
//   onSearch: (query: string) => void;
//   placeholder?: string;
//   debounceDelay?: number;
// }

// export const SearchBox: React.FC<SearchBoxProps> = ({
//   onSearch,
//   placeholder = "Search",
//   debounceDelay = 300,
// }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   // Debounce the search to avoid excessive calls
//   const debounce = useCallback(
//     (func: (...args: any[]) => void, delay: number) => {
//       let timer: NodeJS.Timeout;
//       return (...args: any[]) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => func(...args), delay);
//       };
//     },
//     []
//   );

//   const handleSearch = useMemo(
//     () =>
//       debounce((query: string) => {
//         onSearch(query);
//       }, debounceDelay),
//     [onSearch, debounceDelay, debounce]
//   );

//   const handleChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       const query = e.target.value;
//       setSearchQuery(query);
//       handleSearch(query);
//     },
//     [handleSearch]
//   );

//   const handleKeyDown = useCallback(
//     (e: React.KeyboardEvent) => {
//       if (e.key === "Enter") {
//         handleSearch(searchQuery);
//       }
//     },
//     [handleSearch, searchQuery]
//   );

//   return (
//     <div className="relative w-full max-w-md">
//       <input
//         type="text"
//         placeholder={placeholder}
//         value={searchQuery}
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//         className="w-full px-4 py-2.5 pr-11 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 transition-all duration-200"
//         aria-label="Search input"
//       />
//       <button
//         onClick={() => handleSearch(searchQuery)}
//         className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
//         aria-label="Search"
//       >
//         <Search size={18} />
//       </button>
//     </div>
//   );
// };

// components/SearchBox.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/blog/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2.5 pr-11 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 bg-input"
      />
      <button
        onClick={handleSearch}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Search"
      >
        <Search size={18} />
      </button>
    </div>
  );
}
