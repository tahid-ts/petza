/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { useState } from "react";
import ThumbGallerySlider from "@/components/shared/slider/ThumbGallerySlider";
import Container from "@/components/shared/container/Container";

import ProductDescriptionTab from "./productDescriptionTab/ProductDescriptionTab";
import ProductContent from "./productContent/ProductContent";

interface ProductDetailsProps {
  id: string;
}

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
        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Left: Image Gallery */}
          <div className="flex-1 max-w-[806px]">
            <ThumbGallerySlider images={images} />
          </div>

          {/* Right: Product Info */}
          <ProductContent />
        </div>
      </Container>
      <ProductDescriptionTab />
    </div>
  );
}
