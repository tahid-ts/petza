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
          className="px-3 py-1.5 border border-border-color-one text-gray-700 rounded-lg text-xs hover:bg-orange-100 hover:text-primary transition-colors cursor-pointer"
        >
          {topic.name}
        </button>
      ))}
    </div>
  );
};
