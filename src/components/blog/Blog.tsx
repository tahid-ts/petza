/* eslint-disable @typescript-eslint/no-unused-vars */

import { Article, Category, Post, Topic } from "@/types/blog";
import Link from "next/link";
import { BlogSidebarSection } from "../blogDetails/blogSidebarSection/BlogSidebarSection";
import { SearchBox } from "../ui/searchBox/SearchBox";
import { BlogCategoryList } from "../blogDetails/blogCategoryList/BlogCategoryList";
import { BlogRecentPosts } from "../blogDetails/blogRecentPosts/BlogRecentPosts";
import { BlogTopicsCloud } from "../blogDetails/blogTopicsCloud/BlogTopicsCloud";
import BlogCard from "../shared/card/BlogCard";
import Container from "../shared/container/Container";

interface BlogProps {
  article?: Article;
  categories: Category[];
  recentPosts: Post[];
  topics: Topic[];
}
const blogs = [
  {
    id: 1,
    image: "/img/blog/blog-thumb1_1.jpg",
    date: "May 26-09-2025",
    comments: 252,
    slug: "10-superfoods-you-should-be-eating-every-day",
    title: "Bag Dog Food With Picture Paws It Sits Bowl.",
    description:
      "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
  },
  {
    id: 2,
    image: "/img/blog/blog-thumb1_2.jpg",
    date: "May 26-09-2025",
    comments: 252,
    slug: "ultimate-guide-to-meal-prepping",
    title: "Mother & Daughter With Their Poodle Puppy In Pet Shop.",
    description:
      "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
  },
  {
    id: 3,
    image: "/img/blog/blog-thumb1_3.jpg",
    date: "May 26-09-2025",
    comments: 252,
    title: "The Pet Lover's Blog",
    slug: "10-superfoods-you-should-be-eating-every-day",

    description:
      "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
  },
  {
    id: 4,
    image: "/img/blog/blog-thumb1_1.jpg",
    date: "May 26-09-2025",
    comments: 252,
    title: "Essential Pet Care Tips",
    slug: "10-superfoods-you-should-be-eating-every-day",

    description:
      "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
  },
];
export async function Blog({
  article,
  categories = [],
  recentPosts = [],
  topics = [],
}: BlogProps) {
  return (
    <div className="min-h-screen bg-bg-color-one">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <Container>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            {/* md:order-1 order-2 */}
            <div className="w-full 2xl:grid-cols-3 xl:grid-cols-2 grid md:grid-cols-2 grid-cols-1 md:w-full gap-6 ">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  slug={blog.slug}
                  image={blog.image}
                  date={blog.date}
                  comments={blog.comments}
                  title={blog.title}
                  description={blog.description}
                />
              ))}
            </div>

            {/* Sidebar */}
            {/* md:order-2 order-1 */}
            <div className="w-full lg:w-[356px]  ">
              <BlogSidebarSection>
                <SearchBox />
              </BlogSidebarSection>

              <BlogSidebarSection title="Categories">
                <BlogCategoryList categories={categories} />
              </BlogSidebarSection>

              <BlogSidebarSection title="Recent Posts">
                <BlogRecentPosts posts={recentPosts} />
              </BlogSidebarSection>

              <BlogSidebarSection title="Browse By Topics">
                <BlogTopicsCloud topics={topics} />
              </BlogSidebarSection>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
