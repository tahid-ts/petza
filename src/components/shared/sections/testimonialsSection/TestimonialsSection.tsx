import Container from "@/components/shared/container/Container";
import TestimonialSwiper from "@/components/shared/slider/TestimonialSwiper";
import { ReviewData } from "@/data";
import Image from "next/image";
import React from "react";
const TestimonialsSection = () => {
  return (
    <div className="md:py-20 py-[60px] bg-bg-color-one ">
      <div className="relative md:h-[816px] lg:h-[716px] h-full flex items-center justify-center">
        <div className="absolute top-0 left-0 z-0 hidden lg:block">
          <Image
            src={"/img/testimonial/testimonial-shape1_1.png"}
            alt="Hero"
            width={757}
            height={716}
            className="w-full h-full object-cover "
          />
        </div>

        <Container className="rounded-2xl h-full z-40 w-full">
          <TestimonialSwiper
            testimonials={ReviewData}
            className="xl:h-[556px] h-full  bg-white py-[72px] rounded-2xl"
          />
        </Container>
      </div>
    </div>
  );
};

export default TestimonialsSection;
