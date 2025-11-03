// "use client";
// import React from "react";
// import Image from "next/image";
// import { Post } from "@/types/blog";

// interface BlogRecentPostsProps {
//   posts: Post[];
//   onPostClick: (post: Post) => void;
// }

// export const BlogRecentPosts: React.FC<BlogRecentPostsProps> = ({
//   posts,
//   onPostClick,
// }) => {
//   if (posts.length === 0) {
//     return <p className="text-sm text-gray-500">No posts found</p>;
//   }

//   return (
//     <div className="space-y-4">
//       {posts.map((post) => (
//         <button
//           key={post.id}
//           onClick={() => onPostClick(post)}
//           className="flex gap-3 w-full text-left hover:bg-gray-50 p-2 -mx-2 rounded transition-colors"
//         >
//           <Image
//             src={post.image}
//             alt={post.title}
//             fill
//             className="w-20 h-20 object-cover rounded Shrink-0"
//           />
//           <div className="flex-1 min-w-0">
//             <h4 className="text-sm font-semibold text-gray-900 mb-1.5 leading-snug line-clamp-2">
//               {post.title}
//             </h4>
//             <p className="text-xs text-gray-500">Posted {post.date}</p>
//           </div>
//         </button>
//       ))}
//     </div>
//   );
// };

// components/blog/recentPosts/BlogRecentPosts.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/blog";

interface BlogRecentPostsProps {
  posts: Post[];
  onPostClick?: (post: Post) => void; // Make it optional
}

export const BlogRecentPosts: React.FC<BlogRecentPostsProps> = ({
  posts,
  onPostClick,
}) => {
  if (posts.length === 0) {
    return <p className="text-sm text-gray-500">No posts found</p>;
  }

  const handlePostClick = (post: Post) => {
    if (onPostClick) {
      onPostClick(post);
    }
    // If no onPostClick provided, the Link will handle navigation
  };

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex gap-3 w-full text-left hover:bg-gray-50 p-2 -mx-2 rounded transition-colors group"
        >
          {/* Use Link for server-side navigation */}
          <Link
            href={`/blog/${post.slug}`}
            className="flex gap-3 w-full"
            onClick={() => handlePostClick(post)}
          >
            <div className="relative w-20 h-20 Shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded"
                sizes="80px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 mb-1.5 leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500">Posted {post.date}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
