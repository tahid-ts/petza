/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React, { useState } from "react";
import Container from "@/components/shared/container/Container";
import ProductCard from "@/components/shared/card/ProductCard";
import Dropdown from "../ui/dropdown/Dropdown";
import { Settings2 } from "lucide-react";
import TabbedView from "../ui/tabs/TabbedView";
import Pagination from "../ui/pagination/Pagination";

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
    offerPrice: 0,
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
  {
    id: 9,
    name: "Premium Dog Food",
    price: 350,
    image: "/img/product/product1_1.png",
    category: "Foods",
    offerName: "New",
    offerPrice: 300,
  },
  {
    id: 10,
    name: "Bird Cage",
    price: 450,
    image: "/img/product/product1_2.png",
    category: "Birds",
  },
  {
    id: 11,
    name: "Cat Toy Set",
    price: 150,
    image: "/img/product/product1_3.png",
    category: "Cat",
    offerName: "Best Seller",
    offerPrice: 120,
  },
  {
    id: 12,
    name: "Dog Leash",
    price: 180,
    image: "/img/product/product1_4.png",
    category: "Dog",
  },
];

const items = [
  { label: "Shop Grid", href: "/shop-grid" },
  { label: "Shop List", href: "/shop-list" },
  { label: "Shop Single", href: "/shop-single" },
];

const ShopSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const categories = [
    { label: "All", value: "All" },
    { label: "Dog", value: "Dog" },
    { label: "Accessories", value: "Accessories" },
    { label: "Foods", value: "Foods" },
    { label: "Cat", value: "Cat" },
    { label: "Birds", value: "Birds" },
  ];

  const getPaginatedProducts = (categoryProducts: typeof products) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return categoryProducts.slice(startIndex, endIndex);
  };

  const getTotalPages = (categoryProducts: typeof products) => {
    return Math.ceil(categoryProducts.length / itemsPerPage);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tabs = categories.map((category, index) => {
    const categoryProducts =
      category.value === "All"
        ? products
        : products.filter((p) => p.category === category.value);

    const totalPages = getTotalPages(categoryProducts);
    const paginatedProducts = getPaginatedProducts(categoryProducts);

    return {
      id: index + 1,
      title: category.label,
      component: (
        <div className="space-y-8">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} offer />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600 text-lg">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {paginatedProducts.length > 0 && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
              totalItems={categoryProducts.length}
              showItemCount={true}
              className="mt-8"
            />
          )}
        </div>
      ),
    };
  });

  // Reset to page 1 when tab changes

  return (
    <section className="bg-bg-color-one py-20">
      <Container>
        <TabbedView
          variant="card"
          showId={false}
          rightElement={
            <div className="flex md:gap-6 gap-4">
              <Dropdown
                label={
                  <span className="flex gap-2 group-hover:text-primary md:text-base text-sm">
                    Filter <Settings2 />{" "}
                  </span>
                }
                menuItems={items}
                labelClass="px-4 py-2 rounded-md font-medium text-gray-700 border border-primary hover:bg-gray-50 cursor-pointer h-full"
                position="bottom-left"
                itemClassName="py-1! cursor-pointer hover:bg-primary hover:text-white font-title"
                menuContainerClass="mt-1 p-2!"
                contentClass="pb-0! px-0!"
                showTriggerIcon={false}
                triggerIconClass="group-hover:text-primary font-bold"
              />
              <Dropdown
                label={
                  <span className="flex gap-2 group-hover:text-primary md:text-base text-sm">
                    Sort by
                  </span>
                }
                menuItems={items}
                labelClass="px-4 py-2 rounded-md font-medium text-gray-700 border border-primary hover:bg-gray-50 cursor-pointer h-full"
                position="bottom-right"
                itemClassName="py-1! cursor-pointer hover:bg-primary hover:text-white font-title"
                menuContainerClass="mt-1 p-2! "
                contentClass="pb-0! px-0!"
                triggerIconClass="group-hover:text-primary font-bold"
              />
            </div>
          }
          tabs={tabs}
          className="mb-8"
        />
      </Container>
    </section>
  );
};

export default ShopSection;
