import React from "react";
import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import ProductDetails from "@/components/shop/productDetails/ProductDetails";
import { notFound } from "next/navigation";
type ProductDetailsPageProps = {
  params: {
    slug: string;
  };
};

const page = ({ params }: ProductDetailsPageProps) => {
  const { slug } = params;
  if (!slug || typeof slug !== "string") {
    console.error("Invalid slug:", slug);
    notFound();
  }
  return (
    <HomeLayout>
      <ProductDetails id={slug} />
    </HomeLayout>
  );
};

export default page;
