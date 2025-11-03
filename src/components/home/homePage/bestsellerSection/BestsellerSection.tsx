// "use client";
// import React from "react";
// import ProductCard from "@/components/shared/card/ProductCard";
// import Tabs from "@/components/ui/tabs/Tabs";

// const products = [
//   {
//     id: 1,
//     name: "Green & Yellow Parakeet",
//     price: 290,
//     image: "/img/product/product1_1.png",
//     category: "Birds",
//     offerName: "Summer Sale",
//     offerPrice: 250,
//   },
//   {
//     id: 2,
//     name: "Cat Tartan Clothing",
//     price: 290,
//     image: "/img/product/product1_2.png",
//     category: "Accessories",
//     offerName: "Best seller",
//     offerPrice: 250,
//   },
//   {
//     id: 3,
//     name: "Himalayan Dog",
//     price: 290,
//     image: "/img/product/product1_3.png",
//     category: "Dog",
//     offerName: "New",
//     offerPrice: 250,
//   },
//   {
//     id: 4,
//     name: "Easter Bunny Domestic Rabbit",
//     price: 290,
//     image: "/img/product/product1_4.png",
//     category: "Cat",
//     offerName: "Summer Sale",
//     offerPrice: 250,
//   },
//   {
//     id: 5,
//     name: "Pet Foods Vegetarian Cuisine",
//     price: 290,
//     image: "/img/product/product1_5.png",
//     category: "Foods",
//   },
//   {
//     id: 6,
//     name: "Cat Kitten Cuteness",
//     price: 290,
//     image: "/img/product/product1_6.png",
//     category: "Cat",
//     offerName: "Summer Sale",
//     offerPrice: 0,
//   },
//   {
//     id: 7,
//     name: "Dog Cat Pet Carrier Leash",
//     price: 290,
//     image: "/img/product/product1_6.png",
//     category: "Accessories",
//   },
//   {
//     id: 8,
//     name: "Puppy Dog Food Pedigree Pet Foods Milk",
//     price: 290,
//     image: "/img/product/product1_7.png",
//     category: "Foods",
//     offerName: "Summer Sale",
//     offerPrice: 250,
//   },
// ];

// export default function BestsellerSection() {
//   const tabs = [
//     { label: "All", value: "All" },
//     { label: "Dog", value: "Dog" },
//     { label: "Accessories", value: "Accessories" },
//     { label: "Foods", value: "Foods" },
//     { label: "Cat", value: "Cat" },
//     { label: "Birds", value: "Birds" },
//   ];
//   return (
//     <div className="min-h-screen p-8 bg-bg-color-two">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-4xl font-bold text-gray-900">
//             Our Bestseller Collection
//           </h1>
//           <button className="text-gray-700 hover:text-gray-900 font-medium">
//             View All
//           </button>
//         </div>

//         {/* Category Tabs */}

//         <Tabs
//           tabs={tabs}
//           defaultTab="All"
//           onTabChange={(value) => console.log(`Active tab: ${value}`)}
//           className="mb-8"
//         >
//           {(activeTab) => (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {products
//                 .filter((p) => activeTab === "All" || p.category === activeTab)
//                 .map((product) => (
//                   <ProductCard
//                     key={product.id}
//                     product={product}
//                     offer={true}
//                   />
//                 ))}
//             </div>
//           )}
//         </Tabs>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import ProductCard from "@/components/shared/card/ProductCard";
import TabbedView from "@/components/ui/tabs/TabbedView";
import Container from "@/components/shared/container/Container";
import Button from "@/components/ui/button/Button";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    <section className=" md:p-8 py-8 h-full bg-bg-color-two">
      <Container>
        {/* === Section Header === */}
        <header className="flex items-center  justify-between mb-6">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900">
            Our Bestseller Collection
          </h1>
          <Button
            size="sm"
            variant="iconOnly"
            className="text-gray-700!  hover:text-gray-900 font-medium"
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
    </section>
  );
}
