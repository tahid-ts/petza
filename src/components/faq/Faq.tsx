import React from "react";
import FaqAccordian from "./faqAccordian/FaqAccordian";
import FaqImage from "./faqImage/FaqImage";
import Container from "../shared/container/Container";

const Faq = () => {
  const images = [
    { src: "/img/faq/faq-thumb1_1.jpg", alt: "Image 1" },
    { src: "/img/faq/faq-thumb1_2.jpg", alt: "Image 2" },
    { src: "/img/faq/faq-thumb1_3.jpg", alt: "Image 3" },
  ];
  return (
    <div className="bg-bg-color-one">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 py-20 gap-6 w-full">
          <div>
            <FaqAccordian />
          </div>
          <div>
            <FaqImage images={images} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
