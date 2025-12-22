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
    "2xl": "text-lg md:text-2xl font-title",
    "4xl": "text-xl md:text-4xl font-title",
    "5xl": "text-2xl md:text-5xl font-title",
  };

  const alignMap: Record<string, string> = {
    left: "md:text-left text-center",
    center: "text-center",
    right: "md:text-right text-center",
  };

  const sizeClass = sizeMap[size] || size;

  return (
    <h1 className={`${sizeClass} ${color} ${alignMap[align]} ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
