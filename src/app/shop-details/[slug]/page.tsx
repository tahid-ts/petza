// "use client";
// import React, { useState } from "react";
// import ThumbGallerySlider from "@/components/shared/slider/ThumbGallerySlider";
// import Container from "@/components/shared/container/Container";
// import { Star, Minus, Plus, ShoppingCart } from "lucide-react";
// import Title from "@/components/ui/title/Title";
// import { PiHandbagSimple } from "react-icons/pi";
// import Button from "@/components/ui/button/Button";
// import {
//   FaWhatsapp,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaRedditAlien,
// } from "react-icons/fa";

// interface ProductDetailsProps {
//   id: string;
// }

// const images = [
//   {
//     src: "/img/product-details/product-details-thumb1_1.png",
//     alt: "Product Image 1",
//   },
//   {
//     src: "/img/product-details/product-details-thumb1_2.png",
//     alt: "Product Image 2",
//   },
//   {
//     src: "/img/product-details/product-details-thumb1_3.png",
//     alt: "Product Image 3",
//   },
//   {
//     src: "/img/product-details/product-details-thumb1_4.png",
//     alt: "Product Image 4",
//   },
//   {
//     src: "/img/product-details/product-details-thumb1_5.png",
//     alt: "Product Image 5",
//   },
// ];

// export default function ProductDetails({ id }: ProductDetailsProps) {
//   const [selectedColor, setSelectedColor] = useState("orange");
//   const [selectedSize, setSelectedSize] = useState("XS");
//   const [quantity, setQuantity] = useState(1);

//   const colors = [
//     { name: "orange", value: "#FF6B4A" },
//     { name: "red", value: "#EF4444" },
//     { name: "blue", value: "#3B82F6" },
//   ];

//   const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

//   const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
//   const increaseQuantity = () => setQuantity((prev) => prev + 1);

//   return (
//     <div className="bg-bg-color-one">
//       <Container className="py-20">
//         <div className="flex gap-8 flex-col lg:flex-row">
//           {/* Left: Image Gallery */}
//           <div className="flex-1 max-w-[806px]">
//             <ThumbGallerySlider images={images} />
//           </div>

//           {/* Right: Product Info */}
//           <div className="w-full lg:w-[420px]">
//             {/* Rating */}
//             <div className="flex items-center gap-2 mb-3">
//               <span className="flex gap-0.5">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="h-4 w-4 fill-amber-500 text-amber-500"
//                   />
//                 ))}
//               </span>
//               <span className="text-sm text-gray-600">
//                 (260 Customer Reviews)
//               </span>
//             </div>

//             {/* Title */}
//             <Title align="left" size="2xl" className="font-bold mb-2">
//               Dog Food Pedigree Pet Foods
//             </Title>

//             {/* SKU */}
//             <p className="text-sm mb-2">
//               SKU: <span className="text-textColor">BELT-001236</span>
//             </p>

//             {/* Price */}
//             <p className="font-bold text-3xl mb-6">$260</p>

//             {/* Color Selector */}
//             <div className="mb-6">
//               <p className="text-sm font-medium mb-3">Color:</p>
//               <div className="flex gap-3">
//                 {colors.map((color) => (
//                   <button
//                     key={color.name}
//                     onClick={() => setSelectedColor(color.name)}
//                     className={`w-10 h-10 rounded-full transition-all ${
//                       selectedColor === color.name
//                         ? "ring-2 ring-offset-2 ring-gray-400"
//                         : ""
//                     }`}
//                     style={{ backgroundColor: color.value }}
//                     aria-label={`Select ${color.name} color`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Size Selector */}
//             <div className="mb-6">
//               <p className="text-sm font-medium mb-3">Size:</p>
//               <div className="flex gap-2 flex-wrap w-full justify-between">
//                 {sizes.map((size) => (
//                   <Button
//                     variant="primary-outline"
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4! py-0.5! h-9! border rounded-lg text-sm font-medium transition-all ${
//                       selectedSize === size
//                         ? "bg-primary! text-white! border-primary!"
//                         : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
//                     }`}
//                   >
//                     {size}
//                   </Button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity Selector and Add to Cart */}
//             <div className="flex gap-3 mb-4">
//               {/* Quantity Controls */}
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={decreaseQuantity}
//                   className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
//                   aria-label="Decrease quantity"
//                 >
//                   <Minus size={16} />
//                 </button>
//                 <input
//                   type="text"
//                   value={quantity}
//                   readOnly
//                   className="w-14 h-10 text-center border border-gray-300 rounded-lg font-medium"
//                 />
//                 <button
//                   onClick={increaseQuantity}
//                   className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
//                   aria-label="Increase quantity"
//                 >
//                   <Plus size={16} />
//                 </button>
//               </div>

//               {/* Add to Cart Button */}
//               <Button
//                 variant="primary-outline"
//                 iconPosition="left"
//                 className="w-full pr-2 h-full"
//                 icon={<PiHandbagSimple size={20} />}
//               >
//                 <span>Add To Cart</span>
//               </Button>
//             </div>

//             {/* Buy Now Button */}
//             <Button
//               aria-label="Buy now"
//               iconPosition="left"
//               variant="primary-two"
//               size="none"
//               className="flex justify-center items-center gap-2 w-full h-14 whitespace-nowrap mb-6 pr-2"
//               icon={<ShoppingCart size={20} />}
//             >
//               Buy Now
//             </Button>

//             {/* Social Share */}
//             <div>
//               <p className="text-sm font-semibold mb-3">Share:</p>
//               <div className="flex gap-3">
//                 <button
//                   className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
//                   aria-label="Share on WhatsApp"
//                 >
//                   <FaWhatsapp size={18} />
//                 </button>
//                 <button
//                   className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
//                   aria-label="Share on Facebook"
//                 >
//                   <FaFacebookF size={18} />
//                 </button>
//                 <button
//                   className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
//                   aria-label="Share on LinkedIn"
//                 >
//                   <FaLinkedinIn size={18} />
//                 </button>
//                 <button
//                   className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
//                   aria-label="Share on Reddit"
//                 >
//                   <FaRedditAlien size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

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
