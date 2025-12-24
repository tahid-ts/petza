/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { useState } from "react";
import ThumbGallerySlider from "@/components/shared/slider/ThumbGallerySlider";
import Container from "@/components/shared/container/Container";

import ProductDescriptionTab from "./productDescriptionTab/ProductDescriptionTab";
import ProductContent from "./productContent/ProductContent";
import Title from "@/components/ui/title/Title";
import ProductCard from "@/components/shared/card/ProductCard";

interface ProductDetailsProps {
  id: string;
}
const products = [
  {
    id: 1,
    name: "Green & Yellow Parakeet",
    price: 290,
    image: "/img/product/product1_1.png",
    category: "Birds",
    offerName: "Summer Sale",
    offerPrice: 260,
  },
  {
    id: 2,
    name: "Cat Tartan Clothing",
    price: 300,
    image: "/img/product/product1_2.png",
    category: "Accessories",
    offerName: "Best Seller",
    offerPrice: 220,
  },
  {
    id: 3,
    name: "Himalayan Dog",
    price: 280,
    image: "/img/product/product1_3.png",
    category: "Dog",
    offerName: "New",
    offerPrice: 210,
  },
  {
    id: 4,
    name: "Easter Bunny Domestic Rabbit",
    price: 290,
    image: "/img/product/product1_4.png",
    category: "Cat",
    offerName: "Summer Sale",
    offerPrice: 250,
  },
];
const images = [
  {
    src: "/img/product-details/product-details-thumb1_1.png",
    alt: "Product Image 1",
  },
  {
    src: "/img/product-details/product-details-thumb1_2.png",
    alt: "Product Image 2",
  },
  {
    src: "/img/product-details/product-details-thumb1_3.png",
    alt: "Product Image 3",
  },
  {
    src: "/img/product-details/product-details-thumb1_4.png",
    alt: "Product Image 4",
  },
  {
    src: "/img/product-details/product-details-thumb1_5.png",
    alt: "Product Image 5",
  },
];

export default function ProductDetails({ id }: ProductDetailsProps) {
  return (
    <div className="bg-bg-color-one">
      <Container className="md:py-20 py-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <ThumbGallerySlider images={images} />
          </div>
          <div className="lg:col-span-2">
            <ProductContent />
          </div>
        </div>
      </Container>
      <ProductDescriptionTab />
      <Container className=" md:py-20 py-10 ">
        <Title align="left" className="pb-10 font-bold">
          Related Products
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:gap-6 xl:gap-4 lg:gap-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} offer />
          ))}
        </div>
      </Container>
    </div>
  );
}
