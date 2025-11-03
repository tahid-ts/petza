// import { Blog } from "@/components/blog/Blog";
// import HomeLayout from "@/components/home/homeLayout/HomeLayout";
// import { getBlogData } from "@/lib/blogApi";
// import React from "react";

// const page = () => {
//     const blogData = await getBlogData();
//   return <HomeLayout>
//     <Blog />
//   </HomeLayout>
// };

// export default page;
import { Blog } from "@/components/blog/Blog";
import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import { getBlogData } from "@/lib/blogApi";
import React from "react";

// মেটাডেটা জেনারেটর
export async function generateMetadata() {
  return {
    title: "Blog Page",
    description: "Explore our latest blog posts and articles.",
    // অন্যান্য মেটাডেটা প্রপার্টি
  };
}

// ডিফল্ট পেজ কম্পোনেন্ট
export default async function BlogPage() {
  const blogData = await getBlogData();
  return (
    <HomeLayout>
      <Blog
        categories={blogData.categories ?? []}
        recentPosts={blogData.posts.slice(0, 5)}
        topics={blogData.topics ?? []}
      />
    </HomeLayout>
  );
}
