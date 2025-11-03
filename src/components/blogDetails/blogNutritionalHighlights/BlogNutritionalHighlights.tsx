import { NutritionalHighlight } from "@/types/blog";
import React from "react";

interface BlogNutritionalHighlightssProps {
  title: string;
  items: NutritionalHighlight[];
}

export const BlogNutritionalHighlights: React.FC<
  BlogNutritionalHighlightssProps
> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start">
            <span className="text-orange-500  mr-2 font-bold">-</span>
            <span className="text-gray-700">
              <span className="font-semibold">{item.title}</span> —{" "}
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
