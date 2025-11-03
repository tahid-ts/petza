"use client";
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import ScrollAnimator from "../animation/scrollAnimation/ScrollAnimator";
interface CategoryCardProps {
  image: string;
  label: string;
  onClick?: () => void;
}
const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  label,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-end animate-slide-up duration-700 ease-bounce offset-medium">
      <div
        className="md:w-[213px] md:h-[213px] w-[175px] h-[175px] rounded-full border-[3px] border-orange-500 flex items-center justify-center bg-white relative"
        style={{
          backgroundImage: "url(/img/basic-needs/basic-needs-shape1_1.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <ScrollAnimator effect="zoomIn" repeatOnScroll duration={1.5}>
            <Image
              src={image}
              alt="category image"
              width={144}
              height={144}
              className="inline-block md:h-36 md:w-36 w-[98px] h-[98px]"
            />
          </ScrollAnimator>
        </div>
      </div>

      <Button
        variant="tertiary"
        iconPosition="left"
        className="md:w-[213px] w-[175px] h-[50px] transition-colors -mt-12  z-20  pr-2"
        icon={<IoArrowForward size={16} />}
        onClick={onClick}
        iconClassName=""
      >
        {label}
      </Button>
    </div>
  );
};

export default CategoryCard;
