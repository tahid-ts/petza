"use client";

import React, { useState, useMemo, useCallback } from "react";
import Container from "@/components/shared/container/Container";
import ProductCard from "@/components/shared/card/ProductCard";
import Dropdown from "../ui/dropdown/Dropdown";
import { Settings2 } from "lucide-react";
import TabbedView from "../ui/tabs/TabbedView";
import Pagination from "../ui/pagination/Pagination";
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Green & Yellow Parakeet",
    price: 290,
    image: "/img/product/product1_1.png",
    category: "Birds",
    offerName: "Summer Sale",
    offerPrice: 250,
    rating: 4.4,
  },
  {
    id: 2,
    name: "Cat Tartan Clothing",
    price: 290,
    image: "/img/product/product1_2.png",
    category: "Accessories",
    offerName: "Best Seller",
    offerPrice: 250,
    rating: 1.4,
  },
  {
    id: 3,
    name: "Himalayan Dog",
    price: 290,
    image: "/img/product/product1_3.png",
    category: "Dog",
    offerName: "New",
    offerPrice: 250,
    rating: 3.2,
  },
  {
    id: 4,
    name: "Easter Bunny Domestic Rabbit",
    price: 290,
    image: "/img/product/product1_4.png",
    category: "Cat",
    offerName: "Summer Sale",
    offerPrice: 250,
    rating: 4,
  },
  {
    id: 5,
    name: "Pet Foods Vegetarian Cuisine",
    price: 290,
    image: "/img/product/product1_5.png",
    category: "Foods",
    rating: 3,
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
    rating: 4,
  },
  {
    id: 8,
    name: "Puppy Dog Food Pedigree Pet Foods Milk",
    price: 290,
    image: "/img/product/product1_7.png",
    category: "Foods",
    offerName: "Summer Sale",
    offerPrice: 250,
    rating: 3.4,
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
    rating: 2.4,
  },
  {
    id: 12,
    name: "Dog Leash",
    price: 180,
    image: "/img/product/product1_4.png",
    category: "Dog",
    rating: 4.1,
  },
];

const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A → Z", value: "name-asc" },
  { label: "Name: Z → A", value: "name-desc" },
];

const ratingsItems = [
  { label: "Highest First", value: "rating-desc" },
  { label: "Lowest First", value: "rating-asc" },
  { label: "Most Reviewed", value: "reviews-desc" },
];

const categories = [
  { label: "All", value: "All" },
  { label: "Dog", value: "Dog" },
  { label: "Accessories", value: "Accessories" },
  { label: "Foods", value: "Foods" },
  { label: "Cat", value: "Cat" },
  { label: "Birds", value: "Birds" },
];

const ShopSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");
  const itemsPerPage = 8;

  const sortProducts = useCallback(
    (list: typeof products) => {
      const sorted = [...list];

      switch (sortBy) {
        case "price-asc":
          sorted.sort(
            (a, b) => (a.offerPrice || a.price) - (b.offerPrice || b.price)
          );
          break;

        case "price-desc":
          sorted.sort(
            (a, b) => (b.offerPrice || b.price) - (a.offerPrice || a.price)
          );
          break;

        case "name-asc":
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;

        case "name-desc":
          sorted.sort((a, b) => b.name.localeCompare(a.name));
          break;

        case "rating-desc":
          sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;

        case "rating-asc":
          sorted.sort((a, b) => (a.rating || 0) - (b.rating || 0));
          break;
      }
      return sorted;
    },
    [sortBy]
  );

  /* ---------------------------------------------------------
    MEMOIZED PAGINATION FUNCTION
  --------------------------------------------------------- */
  const getPaginated = useCallback(
    (list: typeof products) => {
      const start = (currentPage - 1) * itemsPerPage;
      return list.slice(start, start + itemsPerPage);
    },
    [currentPage, itemsPerPage]
  );

  /* ---------------------------------------------------------
    BUILD TABS — fully memoized (NO warnings)
  --------------------------------------------------------- */
  const tabs = useMemo(() => {
    return categories.map((category, index) => {
      // Filter by category
      let categoryProducts =
        category.value === "All"
          ? products
          : products.filter((p) => p.category === category.value);

      // Apply sorting
      categoryProducts = sortProducts(categoryProducts);

      // Pagination
      const paginatedProducts = getPaginated(categoryProducts);
      const totalPages = Math.ceil(categoryProducts.length / itemsPerPage);

      return {
        id: index + 1,
        title: category.label,
        component: (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} offer />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-600 text-lg">
                  No products found.
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                itemsPerPage={itemsPerPage}
                totalItems={categoryProducts.length}
                showItemCount={true}
              />
            )}
          </div>
        ),
      };
    });
  }, [currentPage, itemsPerPage, sortProducts, getPaginated]);

  /* ---------------------------------------------------------
    RENDER
  --------------------------------------------------------- */
  return (
    <section className="bg-bg-color-one py-20">
      <Container>
        <TabbedView
          variant="card"
          showId={false}
          rightElement={
            <div className="flex md:gap-6 gap-4">
              {/* Rating Filter */}
              <Dropdown
                label={
                  <span className="flex gap-2 md:text-base text-sm">
                    Rating <Settings2 />
                  </span>
                }
                menuItems={ratingsItems.map((option) => ({
                  label: option.label,
                  onClick: () => {
                    setSortBy(option.value);
                    setCurrentPage(1);
                  },
                }))}
                labelClass="px-4 py-2 rounded-md font-medium text-gray-700 border border-primary hover:bg-gray-50 cursor-pointer h-full"
                position="bottom-center"
                itemClassName="py-1! cursor-pointer hover:bg-primary hover:text-white font-title"
                menuContainerClass="mt-1 p-2! "
                contentClass="pb-0! px-0!"
                triggerIconClass="group-hover:text-primary font-bold"
              />

              {/* Sort Dropdown */}
              <Dropdown
                label={<span className="md:text-base text-sm">Sort by</span>}
                menuItems={sortOptions.map((option) => ({
                  label: option.label,
                  onClick: () => {
                    setSortBy(option.value);
                    setCurrentPage(1);
                  },
                }))}
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
        />
      </Container>
    </section>
  );
};

export default ShopSection;
