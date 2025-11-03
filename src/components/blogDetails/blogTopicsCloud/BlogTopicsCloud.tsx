// "use client";

// import { Topic } from "@/types/blog";
// import React from "react";

// interface BlogTopicsCloudProps {
//   topics: Topic[];
//   selectedTopic: string | null;
//   onTopicClick: (topic: string) => void;
// }

// export const BlogTopicsCloud: React.FC<BlogTopicsCloudProps> = ({
//   topics,
//   selectedTopic,
//   onTopicClick,
// }) => {
//   return (
//     <div className="flex flex-wrap gap-2">
//       {topics.map((topic) => (
//         <button
//           key={topic.name}
//           onClick={() => onTopicClick(topic.name)}
//           className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
//             selectedTopic === topic.name
//               ? "bg-primary text-white shadow-sm"
//               : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-primary"
//           }`}
//         >
//           {topic.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// components/blog/topicsCloud/BlogTopicsCloud.tsx
// components/blog/topicsCloud/BlogTopicsCloud.tsx
"use client";

import { Topic } from "@/types/blog";
import { useRouter } from "next/navigation";

interface BlogTopicsCloudProps {
  topics: Topic[];
}

export const BlogTopicsCloud: React.FC<BlogTopicsCloudProps> = ({ topics }) => {
  const router = useRouter();

  const handleTopicClick = (topicName: string) => {
    router.push(`/blog?topic=${topicName}`);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <button
          key={topic.name}
          onClick={() => handleTopicClick(topic.name)}
          className="px-3 py-1.5 border border-border-color-one text-gray-700 rounded-lg text-xs hover:bg-orange-100 hover:text-primary transition-colors"
        >
          {topic.name}
        </button>
      ))}
    </div>
  );
};
// import { Topic } from "@/types/blog";
// import { BlogTopicsCloudClient } from "./BlogTopicsCloud.client";

// interface BlogTopicsCloudProps {
//   topics: Topic[];
//   currentTopic?: string;
//   variant?: "default" | "compact";
// }

// export async function BlogTopicsCloud({
//   topics,
//   currentTopic,
//   variant = "default",
// }: BlogTopicsCloudProps) {
//   return (
//     <BlogTopicsCloudClient
//       topics={topics}
//       currentTopic={currentTopic}
//       variant={variant}
//     />
//   );
// }
