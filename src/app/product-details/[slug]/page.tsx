// import React from "react";
// import HomeLayout from "@/components/home/homeLayout/HomeLayout";
// import ProductDetails from "@/components/shop/productDetails/ProductDetails";

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>; // Single segment, so slug is a string
// }) {
//   const { slug } = await params; // Await to get the slug
//   console.log("Page params:", { slug }); // Log for debugging

//   return (
//     <HomeLayout>
//       <h1>Path: /{slug}</h1>
//       <ProductDetails id={slug} /> {/* Pass slug as id prop */}
//     </HomeLayout>
//   );
// }

import React from "react";
import { notFound } from "next/navigation";
import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import ProductDetails from "@/components/shop/productDetails/ProductDetails";

type ProductDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = params;

  // Validate slug to ensure it's a non-empty string
  if (!slug || typeof slug !== "string") {
    console.error("Invalid slug:", slug);
    notFound();
  }

  // Log params for debugging (structured logging)
  console.log("ProductDetailsPage - Params:", { slug });

  // Optional: Fetch product data based on slug (uncomment and implement as needed)
  /*
  const product = await fetchProductBySlug(slug);
  if (!product) {
    console.error('Product not found for slug:', slug);
    notFound();
  }
  */

  return (
    <HomeLayout>
      <ProductDetails id={slug} />
    </HomeLayout>
  );
}
