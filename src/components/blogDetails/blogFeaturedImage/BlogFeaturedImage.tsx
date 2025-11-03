import Image from "next/image";
import React from "react";

interface FeaturedImageProps {
  src: string;
  alt: string;
}

export const FeaturedImage: React.FC<FeaturedImageProps> = ({ src, alt }) => {
  return (
    <div className="bg-linear-to-r from-green-600 via-yellow-500 to-yellow-600 rounded-lg overflow-hidden mb-6 shadow-lg">
      <div className="relative" style={{ paddingTop: "50%" }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
