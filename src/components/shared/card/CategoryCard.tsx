"use client";
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import ScrollAnimator from "../../../utils/animation/scrollAnimation/ScrollAnimator";
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
    <div className="flex flex-col items-center animate-slide-up duration-700 ease-bounce offset-medium">
      <div
        className="xl:w-40 xl:h-40 2xl:w-[213px] 2xl:h-[213px] md:w-40 md:h-40 w-[175px] h-[175px] rounded-full border-[3px] border-primary flex items-center justify-center bg-white relative"
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
              className="inline-block xl:w-40 xl:h-40 lg:h-36 lg:w-28 md:h-28 md:w-32 w-[98px] h-[98px]"
            />
          </ScrollAnimator>
        </div>
      </div>

      <Button
        variant="tertiary"
        iconPosition="left"
        className="2xl:w-[213px] xl:w-[180px] lg:w-[213px] md:w-[180px] w-[175px] h-[50px]  -mt-12  z-20  pr-2"
        icon={<IoArrowForward size={16} />}
        onClick={onClick}
        href="/shop"
        iconClassName=""
      >
        {label}
      </Button>
    </div>
  );
};

export default CategoryCard;
