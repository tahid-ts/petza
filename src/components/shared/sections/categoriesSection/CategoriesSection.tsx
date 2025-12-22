"use client";
import CategoryCard from "@/components/shared/card/CategoryCard";
import Container from "@/components/shared/container/Container";
import Button from "@/components/ui/button/Button";
import Decoration from "@/components/ui/decoration/Decoration";
import Title from "@/components/ui/title/Title";
import { useRouter } from "next/navigation";
import React from "react";
import { PiHandbagSimple } from "react-icons/pi";

const CategoriesSection: React.FC = () => {
  const topRowCategories = [
    { image: "/img/basic-needs/basic-needs-thumb1_1.png", label: "Food" },
    { image: "/img/basic-needs/basic-needs-thumb1_2.png", label: "DOG" },
    { image: "/img/basic-needs/basic-needs-thumb1_3.png", label: "Cat" },
    { image: "/img/basic-needs/basic-needs-thumb1_4.png", label: "Medicine" },
  ];

  const bottomRowCategories = [
    {
      image: "/img/basic-needs/basic-needs-thumb1_5.png",
      label: "Vitamin B 12",
    },
    { image: "/img/basic-needs/basic-needs-thumb1_6.png", label: "Cloth" },
    { image: "/img/basic-needs/basic-needs-thumb1_7.png", label: "Bird" },
    { image: "/img/basic-needs/basic-needs-thumb1_8.png", label: "Rabbit" },
    { image: "/img/basic-needs/basic-needs-thumb1_9.png", label: "Bag" },
    { image: "/img/basic-needs/basic-needs-thumb1_10.png", label: "Belts" },
  ];
  const router = useRouter();
  return (
    <div className="bg-white h-auto py-12 md:py-16 lg:py-20 relative">
      <Container>
        <div className="flex flex-col gap-6">
          {/* Top Row: Title + 4 Category Cards */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start  gap-6 md:gap-2 lg:gap-6">
            <div className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0 ">
              <Title
                align="left"
                size="5xl"
                className="font-bold mb-4 md:mb-6 leading-tight md:whitespace-normal whitespace-nowrap"
              >
                Explore Our Best
                <br />
                Categories
              </Title>
              <Button
                iconPosition="left"
                variant="primary-two"
                size="none"
                href="/categories"
                className="flex justify-between w-[150px] md:w-[171px] h-12 md:h-14 whitespace-nowrap pr-2"
                icon={<PiHandbagSimple size={20} />}
              >
                Shop Now
              </Button>
            </div>
            <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6  lg:gap-[26px]">
              {topRowCategories.map((category, index) => (
                <CategoryCard
                  key={index}
                  image={category.image}
                  label={category.label}
                  onClick={() => router.push("/shop")}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row: 6 Category Cards */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-4 md:gap-6 lg:gap-[26px] justify-items-center">
            {bottomRowCategories.map((category, index) => (
              <CategoryCard
                key={index}
                image={category.image}
                label={category.label}
                onClick={() => router.push("/shop")}
              />
            ))}
          </div>
        </div>
      </Container>
      <Decoration
        src="/img/basic-needs/basic-needs--section-shape1_1.png"
        alt="Decoration"
        preset={"topLeft"}
      />
    </div>
  );
};

export default CategoriesSection;
