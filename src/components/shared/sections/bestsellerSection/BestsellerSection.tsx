"use client";

import React from "react";
import ProductCard from "@/components/shared/card/ProductCard";
import TabbedView from "@/components/ui/tabs/TabbedView";
import Container from "@/components/shared/container/Container";
import Button from "@/components/ui/button/Button";
import Title from "@/components/ui/title/Title";
import Decoration from "@/components/ui/decoration/Decoration";

const products = [
  {
    id: 1,
    name: "Green & Yellow Parakeet",
    price: 290,
    image: "/img/product/product1_1.png",
    category: "Birds",
    offerName: "Summer Sale",
    offerPrice: 250,
  },
  {
    id: 2,
    name: "Cat Tartan Clothing",
    price: 290,
    image: "/img/product/product1_2.png",
    category: "Accessories",
    offerName: "Best Seller",
    offerPrice: 250,
  },
  {
    id: 3,
    name: "Himalayan Dog",
    price: 290,
    image: "/img/product/product1_3.png",
    category: "Dog",
    offerName: "New",
    offerPrice: 250,
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
  {
    id: 5,
    name: "Pet Foods Vegetarian Cuisine",
    price: 290,
    image: "/img/product/product1_5.png",
    category: "Foods",
  },
  {
    id: 6,
    name: "Cat Kitten Cuteness",
    price: 290,
    image: "/img/product/product1_6.png",
    category: "Cat",
    offerName: "Summer Sale",
    offerPrice: 10,
  },
  {
    id: 7,
    name: "Dog Cat Pet Carrier Leash",
    price: 290,
    image: "/img/product/product1_6.png",
    category: "Accessories",
  },
  {
    id: 8,
    name: "Puppy Dog Food Pedigree Pet Foods Milk",
    price: 290,
    image: "/img/product/product1_7.png",
    category: "Foods",
    offerName: "Summer Sale",
    offerPrice: 250,
  },
];

const categories = [
  { label: "All", value: "All" },
  { label: "Dog", value: "Dog" },
  { label: "Accessories", value: "Accessories" },
  { label: "Foods", value: "Foods" },
  { label: "Cat", value: "Cat" },
  { label: "Birds", value: "Birds" },
];

export default function BestsellerSection() {
  // build tabs dynamically from categories
  const tabs = categories.map((category, index) => ({
    id: index + 1,
    title: category.label,
    component: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:gap-6 xl:gap-4 lg:gap-2 gap-4">
        {products
          .filter(
            (p) => category.value === "All" || p.category === category.value
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} offer />
          ))}
      </div>
    ),
  }));

  return (
    <section className=" md:py-20 py-10 h-full bg-bg-color-two relative">
      <Container>
        <header className="flex items-center  justify-between mb-6">
          <Title
            align="left"
            size="5xl"
            className="text-start  font-title font-bold mb-5 "
          >
            Our Bestseller Collection
          </Title>
          <Button
            size="sm"
            href="/shop"
            variant="iconOnly"
            className="text-gray-700! w-20  hover:text-gray-900 font-medium underline"
          >
            View All
          </Button>
        </header>

        {/* === Category Tabs === */}
        <TabbedView
          showId={false}
          variant="card"
          tabs={tabs}
          className="mb-8"
        />
      </Container>
      <Decoration
        src={"/img/basic-needs/basic-needs--section-shape1_1.png"}
        alt="Decoration"
        preset="topLeft"
        responsive="hidden-on-mobile"
        opacity="full"
      />
    </section>
  );
}
