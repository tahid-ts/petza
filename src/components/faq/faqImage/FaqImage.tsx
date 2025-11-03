import React from "react";
import Image from "next/image";

type ImageItem = {
  src: string;
  alt: string;
};

type FaqImageProps = {
  images: ImageItem[];
};

const FaqImage: React.FC<FaqImageProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 w-full lg:gap-6 gap-2.5">
      {images.map((img, index) => (
        <div key={index} className="w-full h-full relative">
          <Image
            src={img.src}
            alt={img.alt}
            width={213}
            height={609}
            className="md:w-full md:h-[609px] w-[117px] h-[336px] object-cover rounded "
          />
        </div>
      ))}
    </div>
  );
};

export default FaqImage;
