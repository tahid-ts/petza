import React from "react";

interface BlogArticleHeaderProps {
  title: string;
  date: string;
  author: string;
}

export const BlogArticleHeader: React.FC<BlogArticleHeaderProps> = ({
  title,
  date,
  author,
}) => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
        {title}
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-6 pb-6 ">
        <span>Posted {date}</span>
        <span className="mx-2">•</span>
        <span>By {author}</span>
      </div>
    </>
  );
};
