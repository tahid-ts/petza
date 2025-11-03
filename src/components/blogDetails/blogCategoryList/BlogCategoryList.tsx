// "use client";
// import { Category } from "@/types/blog";
// import React from "react";

// interface BlogCategoryListProps {
//   categories: Category[];
//   selectedCategory: string | null;
//   onCategoryClick: (category: string) => void;
// }

// export const BlogCategoryList: React.FC<BlogCategoryListProps> = ({
//   categories,
//   selectedCategory,
//   onCategoryClick,
// }) => {
//   return (
//     <div className="space-y-1">
//       {categories.map((category) => (
//         <button
//           key={category.name}
//           onClick={() => onCategoryClick(category.name)}
//           className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
//             selectedCategory === category.name
//               ? "bg-orange-50 text-primary font-medium"
//               : "text-gray-600 hover:text-primary hover:bg-gray-50"
//           }`}
//         >
//           {category.name}
//         </button>
//       ))}
//     </div>
//   );
// };
import { Category } from "@/types/blog";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BlogCategoryListProps {
  categories: Category[];
  currentCategory?: string;
  showCount?: boolean;
  variant?: "default" | "compact";
}

export const BlogCategoryList: React.FC<BlogCategoryListProps> = ({
  categories,
  currentCategory,
  showCount = true,
  variant = "default",
}) => {
  const baseButtonClasses =
    "w-full text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

  const variantClasses = {
    default: " text-sm rounded-lg ",
    compact: " text-sm rounded-md",
  };

  const stateClasses = (isCurrent: boolean) =>
    isCurrent
      ? "bg-orange-50 text-primary  font-semibold shadow-sm"
      : "text-gray-700 hover:text-primary ";

  return (
    <nav
      aria-label="Blog categories"
      className="max-h-[342px] overflow-y-auto "
    >
      <ul>
        {categories.map((category) => {
          const isCurrent = currentCategory === category.name;

          return (
            <li key={category.name} className="border-b  py-2 ">
              <Link
                href={`/blog?category=${encodeURIComponent(category.name)}`}
                className={`${baseButtonClasses} ${
                  variantClasses[variant]
                } ${stateClasses(isCurrent)}`}
                aria-current={isCurrent ? "page" : undefined}
              >
                <div className="flex items-center justify-between w-full ">
                  <div className="flex items-center gap-2">
                    <span className="truncate">{category.name}</span>
                    {isCurrent && (
                      <ChevronRight
                        size={16}
                        className="text-primary Shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {showCount && (
                    <span
                      className={`px-2 py-1 text-xs rounded-full min-w-8 text-center Shrink-0 ${
                        isCurrent
                          ? "bg-orange-100 text-primary"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {category.count}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {categories.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-4">
          No categories available
        </p>
      )}
    </nav>
  );
};
// "use client";
// import { Category } from "@/types/blog";
// import React from "react";
// import { ChevronRight } from "lucide-react";

// interface BlogCategoryListProps {
//   categories: Category[];
//   selectedCategory: string | null;
//   onCategoryClick: (category: string) => void;
//   showCount?: boolean;
//   variant?: "default" | "compact";
// }

// export const BlogCategoryList: React.FC<BlogCategoryListProps> = ({
//   categories,
//   selectedCategory,
//   onCategoryClick,
//   showCount = true,
//   variant = "default",
// }) => {
//   const handleCategoryClick = (categoryName: string) => {
//     onCategoryClick(categoryName);
//   };

//   const handleKeyDown = (event: React.KeyboardEvent, categoryName: string) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       onCategoryClick(categoryName);
//     }
//   };

//   const baseButtonClasses =
//     "w-full text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

//   const variantClasses = {
//     default: " text-sm rounded-lg border",
//     compact: "px-3 py-2 text-sm rounded-md",
//   };

//   const stateClasses = (isSelected: boolean) =>
//     isSelected
//       ? "bg-orange-50 text-primary border-orange-200 font-semibold shadow-sm"
//       : "text-gray-700 hover:text-primary hover:bg-orange-25 hover:border-orange-100 border-transparent";

//   return (
//     <nav aria-label="Blog categories">
//       <ul className="space-y-2">
//         {categories.map((category) => {
//           const isSelected = selectedCategory === category.name;

//           return (
//             <li key={category.name}>
//               <button
//                 onClick={() => handleCategoryClick(category.name)}
//                 onKeyDown={(e) => handleKeyDown(e, category.name)}
//                 className={`${baseButtonClasses} ${
//                   variantClasses[variant]
//                 } ${stateClasses(isSelected)}`}
//                 aria-pressed={isSelected}
//                 aria-label={`${category.name} category, ${category.count} posts`}
//                 role="button"
//                 tabIndex={0}
//               >
//                 <div className="flex items-center justify-between w-full">
//                   <div className="flex items-center gap-2">
//                     <span className="truncate">{category.name}</span>
//                     {isSelected && (
//                       <ChevronRight
//                         size={16}
//                         className="text-primary Shrink-0"
//                         aria-hidden="true"
//                       />
//                     )}
//                   </div>

//                   {showCount && (
//                     <span
//                       className={`px-2 py-1 text-xs rounded-full min-w-8 text-center Shrink-0 ${
//                         isSelected
//                           ? "bg-orange-100 text-primary"
//                           : "bg-gray-100 text-gray-600"
//                       }`}
//                     >
//                       {category.count}
//                     </span>
//                   )}
//                 </div>
//               </button>
//             </li>
//           );
//         })}
//       </ul>

//       {categories.length === 0 && (
//         <p className="text-sm text-gray-500 text-center py-4">
//           No categories available
//         </p>
//       )}
//     </nav>
//   );
// };
