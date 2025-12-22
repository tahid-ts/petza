"use client";

import React, { memo } from "react";
import CategoryCard from "../shared/card/CategoryCard";
import Container from "../shared/container/Container";
import Decoration from "../ui/decoration/Decoration";
import ScrollAnimator from "../../utils/animation/scrollAnimation/ScrollAnimator";
import type { ScrollEffectName } from "@/types/animation";

// ✅ Predefined data (duplicated labels are fine now since we use unique keys)
const categories = [
  { image: "/img/basic-needs/basic-needs-thumb1_1.png", label: "Food" },
  { image: "/img/basic-needs/basic-needs-thumb1_2.png", label: "Dog" },
  { image: "/img/basic-needs/basic-needs-thumb1_3.png", label: "Cat" },
  { image: "/img/basic-needs/basic-needs-thumb1_4.png", label: "Medicine" },
  { image: "/img/basic-needs/basic-needs-thumb1_5.png", label: "Vitamin B12" },
  { image: "/img/basic-needs/basic-needs-thumb1_6.png", label: "Cloth" },
  { image: "/img/basic-needs/basic-needs-thumb1_7.png", label: "Bird" },
  { image: "/img/basic-needs/basic-needs-thumb1_8.png", label: "Rabbit" },
  { image: "/img/basic-needs/basic-needs-thumb1_9.png", label: "Bag" },
  { image: "/img/basic-needs/basic-needs-thumb1_10.png", label: "Belts" },
  { image: "/img/basic-needs/basic-needs-thumb1_3.png", label: "Cat" },
  { image: "/img/basic-needs/basic-needs-thumb1_4.png", label: "Medicine" },
  { image: "/img/basic-needs/basic-needs-thumb1_5.png", label: "Vitamin B12" },
  { image: "/img/basic-needs/basic-needs-thumb1_6.png", label: "Cloth" },
  { image: "/img/basic-needs/basic-needs-thumb1_7.png", label: "Bird" },
  { image: "/img/basic-needs/basic-needs-thumb1_8.png", label: "Rabbit" },
  { image: "/img/basic-needs/basic-needs-thumb1_9.png", label: "Bag" },
  { image: "/img/basic-needs/basic-needs-thumb1_10.png", label: "Belts" },
];

// ✅ Alternate only two effects for variety
const EFFECTS: ScrollEffectName[] = ["slideInRight", "slideInUp"];

const Categories: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <Container className="pt-14 lg:mt-14 lg:mb-[104px] mb-20">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 justify-items-center">
          {categories.map(({ image, label }, index) => (
            <ScrollAnimator
              key={`${label}-${index}`}
              effect={EFFECTS[index % 2]}
              duration={0.8}
              delay={index * 0.05}
              threshold={0.25}
              repeatOnScroll
            >
              <CategoryCard
                image={image}
                label={label}
                onClick={() => console.log(`Clicked ${label}`)}
              />
            </ScrollAnimator>
          ))}
        </div>
      </Container>

      <Decoration
        src="/img/basic-needs/basic-needs--section-shape1_1.png"
        preset="topLeft"
        responsive="always-visible"
        opacity="full"
      />
    </section>
  );
};

export default memo(Categories);
