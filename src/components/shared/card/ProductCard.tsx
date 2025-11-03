"use client";
import Image from "next/image";
import React, { memo } from "react";
import Button from "../../ui/button/Button";
import { PiHandbagSimple } from "react-icons/pi";
import Decoration from "../../ui/decoration/Decoration";
import { Product } from "@/types/product";
import ScrollAnimator from "../animation/scrollAnimation/ScrollAnimator";

export interface ProductCardProps {
  offer?: boolean;
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, offer }) => {
  const { id, name, price, image, offerName, offerPrice } = product;
  const offerPercentage =
    offerPrice && price ? Math.round(((price - offerPrice) / price) * 100) : 0;

  return (
    <div className="border border-border-color-one rounded-xl p-4 w-full  flex flex-col items-center text-center hover:border-primary transition-all duration-300 cursor-pointer relative animate-flip-down animate-once">
      {/* Product Image */}
      <ScrollAnimator repeatOnScroll effect="zoomIn" duration={1.5}>
        <div className="relative w-[300px] h-[300px] mb-4 group">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain hover:scale-105 transition-transform duration-300 hover:bg-white/10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/30 opacity-100 group-hover:opacity-0 group-hover:h-full h-0 transition-all duration-400 ease-linear pointer-events-none z-10"></div>
        </div>
      </ScrollAnimator>
      {/* Product Info */}
      <div className="flex flex-col justify-start items-start w-full">
        <h3 className="text-[#3A3A3A] text-start text-[15px] font-normal leading-snug mb-2 font-title">
          {name}
        </h3>
        <div className="flex items-center">
          <p className="text-[#3A3A3A] text-2xl font-semibold mb-2 font-title">
            {offer ? offerPrice : price}
          </p>
          {offer && (
            <p
              className={` font-title ${
                offerPrice
                  ? "text-textColor text-base font-semibold ml-4 line-through"
                  : "text-[#3A3A3A] text-2xl font-semibold mb-2 font-title"
              }`}
            >
              ${(offerPrice ?? 0) > 0 ? price : ""}
            </p>
          )}
        </div>
        {/* Add to Cart Button */}
        <Button
          aria-label={`Add ${name} to cart`}
          iconPosition="left"
          variant="primary-two"
          size="none"
          className="flex justify-between w-full max-w-[171px] h-14 whitespace-nowrap pr-2"
          icon={<PiHandbagSimple size={20} />}
          href={`/product-details/${id}`}
        >
          Shop Now
        </Button>
      </div>
      {/* Optional Offer Decoration */}
      {offer && offerName && (
        <Decoration
          preset="topLeft"
          opacity="full"
          className={`${
            offerName
              ? "bg-primary text-white z-40 px-2 py-1.5 m-4 rounded-lg"
              : "hidden"
          }`}
        >
          <h1>{offerName}</h1>
        </Decoration>
      )}
      {offer && (
        <Decoration
          preset="topRight"
          opacity="full"
          className={`${
            offerPercentage > 0
              ? "bg-primary text-white z-40 px-2 py-1.5 m-4 rounded-lg"
              : "hidden"
          }`}
        >
          <h1 className={`${offerPercentage > 0 ? "" : "hidden"}`}>
            -{offerPercentage}%
          </h1>
        </Decoration>
      )}
    </div>
  );
};

export default memo(ProductCard);

// import Image from "next/image";
// import React, { memo, useCallback } from "react";
// import Button from "../button/Button";
// import { PiHandbagSimple } from "react-icons/pi";
// import Decoration from "../decoration/Decoration";
// import { Product } from "@/types/product";
// import clsx from "clsx";

// // Extended props for greater flexibility
// export interface ProductCardProps {
//   product: Product;
//   offer?: boolean;
//   className?: string;
//   imageSize?: { width: number; height: number };
//   layout?: "vertical" | "horizontal";
//   showRating?: boolean;
//   rating?: number;
//   onClick?: (product: Product) => void;
//   buttonText?: string;
//   fallbackImage?: string;
//   decorationPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   product,
//   offer = false,
//   className = "",
//   imageSize = { width: 300, height: 300 },
//   layout = "vertical",
//   showRating = false,
//   rating,
//   onClick,
//   buttonText = "Shop Now",
//   fallbackImage = "/images/fallback-product.png",

//   decorationPosition = "topLeft",
// }) => {
//   const { name, price, image, offerName, offerPrice, decoration } = product;

//   // Handle card click with memoized callback
//   const handleClick = useCallback(() => {
//     if (onClick) onClick(product);
//   }, [onClick, product]);

//   // Dynamic layout classes
//   const layoutClasses = clsx({
//     "flex-col": layout === "vertical",
//     "flex-row items-center": layout === "horizontal",
//   });

//   // Image container classes
//   const imageContainerClasses = clsx(
//     "relative mb-4 group overflow-hidden",
//     layout === "vertical" ? "w-full" : "w-1/2"
//   );

//   return (
//     <div
//       className={clsx(
//         "border border-[#F3E3D5] rounded-xl p-4 w-full transition-all duration-300 cursor-pointer hover:border-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary",
//         layoutClasses,
//         className,
//         layout === "horizontal" && "md:max-w-[600px]"
//       )}
//       onClick={handleClick}
//       tabIndex={0}
//       role="button"
//       aria-label={`View details for ${name}`}
//       onKeyDown={(e) => e.key === "Enter" && handleClick()}
//     >
//       {/* Product Image */}
//       <div className={imageContainerClasses}>
//         <Image
//           src={image || fallbackImage}
//           alt={name || "Product image"}
//           width={imageSize.width}
//           height={imageSize.height}
//           className="object-contain transition-transform duration-300 group-hover:scale-105"
//           loading="lazy"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           placeholder="blur"
//           blurDataURL="/images/placeholder.png"
//         />
//         <div
//           className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-400 ease-linear"
//           aria-hidden="true"
//         />
//       </div>

//       {/* Product Info */}
//       <div
//         className={clsx(
//           "flex flex-col",
//           layout === "vertical"
//             ? "items-start w-full"
//             : "items-start w-1/2 pl-4"
//         )}
//       >
//         <h3 className="text-[#3A3A3A] text-[15px] font-normal leading-snug mb-2 font-title">
//           {name || "Unnamed Product"}
//         </h3>
//         <p className="text-[#3A3A3A] text-2xl font-semibold mb-2 font-title">
//           ${offer && offerPrice ? offerPrice : price}
//         </p>
//         {offer && price && (
//           <p className="text-[#3A3A3A] text-xl font-semibold mb-4 font-title line-through">
//             ${price}
//           </p>
//         )}
//         {showRating && rating && (
//           <div className="flex items-center mb-2">
//             <span className="text-yellow-400">
//               {"★".repeat(Math.floor(rating))}
//             </span>
//             <span className="text-gray-400">
//               {"★".repeat(5 - Math.floor(rating))}
//             </span>
//             <span className="ml-2 text-sm text-gray-600">({rating})</span>
//           </div>
//         )}
//         {/* Add to Cart Button */}
//         <Button
//           aria-label={`Add ${name || "product"} to cart`}
//           iconPosition="left"
//           size="none"
//           variant="primary-two"
//           className="flex justify-between w-full max-w-[171px] h-14 whitespace-nowrap pr-2"
//           icon={<PiHandbagSimple size={20} />}
//         >
//           {buttonText}
//         </Button>
//       </div>

//       {/* Optional Decoration */}
//       {offer && (
//         <Decoration src={decoration} preset={decorationPosition}>
//           {offerName || "Special Offer"}
//         </Decoration>
//       )}
//     </div>
//   );
// };

// // Memoize to prevent unnecessary re-renders
// export default memo(ProductCard);
