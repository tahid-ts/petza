import { Blog } from "@/components/blog/Blog";
import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import { getBlogData } from "@/lib/blogApi";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Blog Page",
    description: "Explore our latest blog posts and articles.",
  };
}

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
