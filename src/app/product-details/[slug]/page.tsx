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
