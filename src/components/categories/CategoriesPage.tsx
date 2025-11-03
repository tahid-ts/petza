import React from "react";
import CategoryCard from "../shared/card/CategoryCard";
import Container from "../shared/container/Container";

const CategoriesPage: React.FC = () => {
  const categories = [
    { image: "/img/basic-needs/basic-needs-thumb1_1.png", label: "Food" },
    { image: "/img/basic-needs/basic-needs-thumb1_2.png", label: "DOG" },
    { image: "/img/basic-needs/basic-needs-thumb1_3.png", label: "Cat" },
    { image: "/img/basic-needs/basic-needs-thumb1_4.png", label: "Medicine" },
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
  return (
    <section>
      <Container>
        <div className="grid grid-cols-6 gap-6 justify-items-center">
          {categories?.map((category, index) => (
            <CategoryCard
              key={index}
              image={category.image}
              label={category.label}
              onClick={() => console.log(`Clicked ${category.label}`)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoriesPage;
