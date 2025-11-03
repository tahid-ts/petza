// components/BlogSidebarSection.tsx
import React from "react";

interface BlogSidebarSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const BlogSidebarSection: React.FC<BlogSidebarSectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div className={` rounded-lg  mb-6 ${className}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
};
