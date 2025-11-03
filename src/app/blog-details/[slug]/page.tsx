import { BlogDetails } from "@/components/blogDetails/BlogDetails";
import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import { getBlogData, getPostBySlug } from "@/lib/blogApi";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  console.log("generateMetadata - Slug:", params.slug);
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Health Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  console.log("Page - Slug from params:", params.slug);

  const post = await getPostBySlug(params.slug);
  const blogData = await getBlogData();

  console.log("Post found:", post);
  console.log(
    "Available posts:",
    blogData.posts.map((p) => p.slug)
  );

  if (!post) {
    console.log("Post not found, showing 404");
    notFound();
  }

  return (
    <HomeLayout>
      <BlogDetails
        article={post}
        categories={blogData.categories}
        recentPosts={blogData.posts.slice(0, 5)}
        topics={blogData.topics}
      />
    </HomeLayout>
  );
}
// import { BlogDetails } from "@/components/blogDetails/BlogDetails";
// import HomeLayout from "@/components/home/homeLayout/HomeLayout";
// import { getBlogData, getPostBySlug } from "@/lib/blogApi";
// import { notFound } from "next/navigation";

// interface BlogPostPageProps {
//   params: {
//     slug: string;
//   };
// }

// export async function generateMetadata({ params }: BlogPostPageProps) {
//   const post = await getPostBySlug(params.slug);

//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     title: `${post.title} | Health Blog`,
//     description: post.content,
//   };
// }

// export default async function BlogPostPage({ params }: BlogPostPageProps) {
//   const post = await getPostBySlug(params.slug);
//   const blogData = await getBlogData();
//   console.log(post);
//   if (!post) {
//     notFound();
//   }

//   return (
//     <>
//       <HomeLayout>
//         <BlogDetails
//           article={post}
//           categories={blogData.categories ?? []}
//           recentPosts={blogData.posts.slice(0, 5)}
//           topics={blogData.topics ?? []}
//         />
//       </HomeLayout>
//     </>
//   );
// }
