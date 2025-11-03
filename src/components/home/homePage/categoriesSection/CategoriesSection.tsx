// "use client";
// import CategoryCard from "@/components/shared/card/CategoryCard";
// import Container from "@/components/shared/container/Container";
// import Button from "@/components/ui/button/Button";
// import Decoration from "@/components/ui/decoration/Decoration";
// import Title from "@/components/ui/title/Title";
// import React from "react";
// import { PiHandbagSimple } from "react-icons/pi";

// const CategoriesSection: React.FC = () => {
//   const topRowCategories = [
//     { image: "/img/basic-needs/basic-needs-thumb1_1.png", label: "Food" },
//     { image: "/img/basic-needs/basic-needs-thumb1_2.png", label: "DOG" },
//     { image: "/img/basic-needs/basic-needs-thumb1_3.png", label: "Cat" },
//     { image: "/img/basic-needs/basic-needs-thumb1_4.png", label: "Medicine" },
//   ];

//   const bottomRowCategories = [
//     {
//       image: "/img/basic-needs/basic-needs-thumb1_5.png",
//       label: "Vitamin B 12",
//     },
//     { image: "/img/basic-needs/basic-needs-thumb1_6.png", label: "Cloth" },
//     { image: "/img/basic-needs/basic-needs-thumb1_7.png", label: "Bird" },
//     { image: "/img/basic-needs/basic-needs-thumb1_8.png", label: "Rabbit" },
//     { image: "/img/basic-needs/basic-needs-thumb1_9.png", label: "Bag" },
//     { image: "/img/basic-needs/basic-needs-thumb1_10.png", label: "Belts" },
//   ];

//   return (
//     <div className="bg-white h-auto py-[82px]  relative animate-accordion-up  duration-500">
//       <Container>
//         <div className="flex flex-col">
//           {/* Top Row - 4 items */}
//           <div className="flex md:flex-row flex-col justify-between mb-6">
//             <div>
//               <Title
//                 align="left"
//                 className="font-bold font-title mb-8 leading-[52.8px] animate-flip-in repeat-1 duration-300"
//               >
//                 Explore Our Best
//                 <br />
//                 Categories
//               </Title>
//               <Button
//                 iconPosition="left"
//                 variant="primary-two"
//                 size="none"
//                 className="flex justify-between w-[171px] h-14 whitespace-nowrap pr-2"
//                 icon={<PiHandbagSimple size={20} />}
//               >
//                 Shop Now
//               </Button>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-8 justify-items-center animate-slide-from-right">
//               {topRowCategories.map((category, index) => (
//                 <CategoryCard
//                   key={index}
//                   image={category.image}
//                   label={category.label}
//                   onClick={() => console.log(`Clicked ${category.label}`)}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Bottom Row - 6 items */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-6 grid-cols-2 gap-6 justify-items-center animate-slide-from-left">
//             {bottomRowCategories.map((category, index) => (
//               <CategoryCard
//                 key={index}
//                 image={category.image}
//                 label={category.label}
//                 onClick={() => console.log(`Clicked ${category.label}`)}
//               />
//             ))}
//           </div>
//         </div>
//       </Container>
//       <Decoration
//         src="/img/basic-needs/basic-needs--section-shape1_1.png"
//         alt="Decoration"
//         width={400}
//         height={400}
//         preset="topLeft"
//       />
//     </div>
//   );
// };
// export default CategoriesSection;

"use client";
import CategoryCard from "@/components/shared/card/CategoryCard";
import Container from "@/components/shared/container/Container";
import Button from "@/components/ui/button/Button";
import Decoration from "@/components/ui/decoration/Decoration";
import Title from "@/components/ui/title/Title";
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

  return (
    <div className="bg-white h-auto py-[82px]  relative">
      <Container>
        <div className="flex flex-col">
          {/* Top Row - 4 items */}
          <div className="flex md:flex-row flex-col justify-between mb-6">
            <div className="animate-smooth-fade-up flex flex-col md:items-start items-center md:p-0 p-5">
              <Title
                align="left"
                size="4xl"
                className="font-bold text-center md:text-start font-title mb-8 leading-[52.8px]  md:whitespace-normal whitespace-nowrap"
              >
                Explore Our Best
                <br className="hidden md:block" /> <span> </span>
                Categories
              </Title>
              <Button
                iconPosition="left"
                variant="primary-two"
                size="none"
                className="flex justify-between w-[171px] h-14 whitespace-nowrap pr-2"
                icon={<PiHandbagSimple size={20} />}
              >
                Shop Now
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-8 justify-items-center stagger-children animate-smooth-fade-up ripple">
              {topRowCategories.map((category, index) => (
                <CategoryCard
                  key={index}
                  image={category.image}
                  label={category.label}
                  onClick={() => console.log(`Clicked ${category.label}`)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row - 6 items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 grid-cols-2 gap-6 justify-items-center stagger-children animate-smooth-fade-up ripple  animate-delay-[200ms]">
            {bottomRowCategories.map((category, index) => (
              <CategoryCard
                key={index}
                image={category.image}
                label={category.label}
                onClick={() => console.log(`Clicked ${category.label}`)}
              />
            ))}
          </div>
        </div>
      </Container>
      <Decoration
        src="/img/basic-needs/basic-needs--section-shape1_1.png"
        alt="Decoration"
        width={400}
        height={400}
        preset="topLeft"
      />
    </div>
  );
};
export default CategoriesSection;
