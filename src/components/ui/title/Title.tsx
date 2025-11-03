// import React, { ReactNode } from "react";

// export interface TitleProps {
//   children: ReactNode;
//   size?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl";
//   color?: string;
//   align?: "left" | "center" | "right";
//   className?: string;
// }

// const Title: React.FC<TitleProps> = ({
//   children,
//   size = "5xl",
//   color = "text-black",
//   align = "center",
//   className = "",
// }) => {
//   const sizeMap: Record<string, string> = {
//     sm: "text-sm md:text-sm",
//     md: "text-base md:text-base",
//     lg: "text-lg md:text-lg",
//     xl: "text-xl md:text-xl",
//     "2xl": "text-xl md:text-2xl",
//     "4xl": "text-2xl md:text-4xl",
//     "5xl": "text-3xl md:text-5xl",
//   };

//   const alignMap: Record<string, string> = {
//     left: "text-left",
//     center: "text-center",
//     right: "text-right",
//   };

//   return (
//     <h1
//       className={`${sizeMap[size]} ${color} ${alignMap[align]} font-semibold  ${className}`}
//     >
//       {children}
//     </h1>
//   );
// };

// export default Title;

import React, { ReactNode } from "react";

export interface TitleProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | string;
  color?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  size = "5xl",
  color = "text-black",
  align = "center",
  className = "",
}) => {
  const sizeMap: Record<string, string> = {
    sm: "text-xs md:text-sm font-title",
    md: "text-sm md:text-base font-title",
    lg: "text-md md:text-lg font-title",
    xl: "text-lg md:text-xl font-title",
    "2xl": "text-xl md:text-2xl font-title",
    "4xl": "text-2xl md:text-4xl font-title",
    "5xl": "text-3xl md:text-5xl font-title",
  };

  const alignMap: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const sizeClass = sizeMap[size] || size;

  return (
    <h1 className={`${sizeClass} ${color} ${alignMap[align]} ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
