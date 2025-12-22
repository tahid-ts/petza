"use client";
import Image from "next/image";
import React, { memo } from "react";
import Button from "../../ui/button/Button";
import { PiHandbagSimple } from "react-icons/pi";
import Decoration from "../../ui/decoration/Decoration";
import { Product } from "@/types/product";
import ScrollAnimator from "../../../utils/animation/scrollAnimation/ScrollAnimator";

export interface ProductCardProps {
  offer?: boolean;
  product: Product;
}

interface PriceDisplayProps {
  price?: number | null;
  offer?: boolean;
  offerPrice?: number | null;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  offer,
  offerPrice,
}) => {
  // Validation and normalization
  const normalizedPrice = typeof price === "number" && price > 0 ? price : null;
  const normalizedOfferPrice =
    typeof offerPrice === "number" && offerPrice > 0 ? offerPrice : null;
  const isOffer = Boolean(offer);

  // Determine what to display
  const shouldShowOffer = isOffer && normalizedOfferPrice !== null;
  const shouldShowOriginalPrice = normalizedPrice !== null;
  const shouldShowStrikethrough = shouldShowOffer && normalizedPrice !== null;
  const hasValidPrice = shouldShowOffer || shouldShowOriginalPrice;

  // Early return if no valid price data
  if (!hasValidPrice) {
    return null;
  }

  // Format price: show decimals only if needed
  const formatPrice = (value: number): string => {
    return value % 1 === 0 ? value.toString() : value.toFixed(2);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Primary price (offer price if available, otherwise regular price) */}
      {shouldShowOffer && normalizedOfferPrice !== null && (
        <p className="font-title">
          <span className="text-primary text-2xl font-semibold leading-0">
            ${formatPrice(normalizedOfferPrice)}
          </span>
        </p>
      )}

      {/* Original price */}
      {shouldShowOriginalPrice &&
        !shouldShowOffer &&
        normalizedPrice !== null && (
          <p className="font-title">
            <span className="text-primary text-2xl font-semibold leading-0">
              ${formatPrice(normalizedPrice)}
            </span>
          </p>
        )}

      {/* Strikethrough price when offer is active */}
      {shouldShowStrikethrough && normalizedPrice !== null && (
        <p className="line-through text-gray-600 text-sm leading-0">
          ${formatPrice(normalizedPrice)}
        </p>
      )}
    </div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product, offer }) => {
  const { id, name, price, image, offerName, offerPrice } = product;

  // Calculate offer percentage with proper validation
  const offerPercentage =
    typeof offerPrice === "number" &&
    typeof price === "number" &&
    offerPrice > 0 &&
    price > 0
      ? Math.round(((price - offerPrice) / price) * 100)
      : 0;

  return (
    <div className="border border-border-color-one rounded-xl w-full flex flex-col items-center text-center hover:border-primary transition-all duration-300 relative animate-flip-down animate-once p-4">
      {/* Product Image */}
      <ScrollAnimator repeatOnScroll effect="zoomIn" duration={1.5}>
        <div
          className="relative aspect-square w-[300px] mb-4 group
                md:w-[260px]
                lg:w-60
                xl:w-[300px]"
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 260px, (max-width: 1024px) 280px, 300px"
            className="object-contain hover:scale-105 transition-transform duration-300 hover:bg-white/10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/30 opacity-100 group-hover:opacity-0 group-hover:h-full h-0 transition-all duration-400 ease-linear pointer-events-none z-10"></div>
        </div>
      </ScrollAnimator>

      {/* Product Info */}
      <div className=" flex flex-col items-start w-full">
        <div className="flex flex-col justify-start items-start w-full gap-5">
          <h3 className="text-[#3A3A3A] text-start text-[15px] font-normal leading-tight font-title">
            {name}
          </h3>
          <div className="flex items-start">
            <PriceDisplay price={price} offer={offer} offerPrice={offerPrice} />
          </div>

          {/* Add to Cart Button */}
          <Button
            aria-label={`Add ${name} to cart`}
            iconPosition="left"
            variant="primary-outline"
            size="none"
            className="flex justify-between w-full max-w-[171px] h-14 whitespace-nowrap pr-2 cursor-pointer"
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
            className="bg-primary text-white z-40 px-2 py-1.5 m-4 rounded-lg"
          >
            <h1>{offerName}</h1>
          </Decoration>
        )}

        {offer && offerPercentage > 0 && (
          <Decoration
            preset="topRight"
            opacity="full"
            className="bg-primary text-white z-40 px-2 py-1.5 m-4 rounded-lg"
          >
            <h1>-{offerPercentage}%</h1>
          </Decoration>
        )}
      </div>
    </div>
  );
};

export default memo(ProductCard);
