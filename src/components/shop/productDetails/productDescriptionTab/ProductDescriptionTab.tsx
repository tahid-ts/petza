"use client";

import React from "react";
import Container from "@/components/shared/container/Container";
import TabbedView from "@/components/ui/tabs/TabbedView";
import { PawPrint } from "lucide-react";

const featureList = [
  "Water-Repellant Fabric",
  "Adjustable Drawstrings",
  "Snap Closure Under Belly",
  "Removable Hood",
  "Mesh Lining",
  "Adjustable Drawstrings",
  "Two Small Pockets",
  "Gunmetal Hardware",
  "Leash Hole at Back",
  "Machine Washable",
];

const descriptionParagraphs = [
  `Crafted from water-repellent fabric, our top-rated Talon Raincoat brings
  classic anorak style to your pup’s wardrobe—with all the practicality you need
  for unpredictable weather. Designed for comfort and ease, it features a
  removable hood, adjustable drawstrings, and functional flap pockets that keep
  essentials close. Mesh lining ensures breathability, while snap closures under
  the belly make dressing a breeze. Whether it’s a light drizzle or a full-on
  downpour, your pup stays dry without compromising their look—or their fur.`,

  `This raincoat combines durability with a lightweight feel, offering full
  protection while maintaining mobility. Perfect for everyday walks, park
  adventures, or travel—it’s the go-to outerwear for style and functionality.`,
];

const ProductDescriptionTab = () => {
  return (
    <section className="bg-bg-color-two py-[60px] md:py-20">
      <Container>
        <TabbedView
          variant="card"
          tabPosition="center"
          tabPanelClass="text-gray-400"
          tabs={[
            {
              id: 1,
              title: "Product Description",
              component: (
                <div className="space-y-6">
                  {descriptionParagraphs.map((text, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2 text-dark font-title leading-relaxed"
                    >
                      <PawPrint className="h-5 w-5 text-gray-400 fill-gray-400 shrink-0" />
                      <p className="text-gray-600">{text}</p>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              id: 2,
              title: "Features",
              component: (
                <div className="grid md:grid-cols-5 grid-cols-2 gap-6">
                  {Array.from({ length: 5 }).map((_, colIdx) => (
                    <ul key={colIdx} className="space-y-4">
                      {featureList.map((feature, idx) => (
                        <li
                          key={`${colIdx}-${idx}`}
                          className="flex gap-2 text-dark font-title"
                        >
                          <PawPrint className="h-5 w-5 text-gray-400 fill-gray-400 shrink-0" />
                          <p className="text-gray-600">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              ),
            },
          ]}
        />
      </Container>
    </section>
  );
};

export default ProductDescriptionTab;
