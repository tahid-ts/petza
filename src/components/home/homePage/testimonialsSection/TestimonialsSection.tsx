import Container from "@/components/shared/container/Container";
import TestimonialSwiper, {
  Testimonial,
} from "@/components/shared/slider/TestimonialSwiper";
import Image from "next/image";
import React from "react";
const data: Testimonial[] = [
  {
    id: 1,
    name: "Ashlynn Rhiel Madsen",
    company: "CEO AT Code Nova",
    image: "/img/review/Avatar1.png",
    desc: "Ashlynn Rhiel Madsen Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.ab illo inventore veritatis et quasi architecto beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam!",
  },
  {
    id: 2,
    name: "Livia Philips",
    company: "CEO AT Code Nova",
    image: "/img/review/Avatar2.png",
    desc: "Livia Philips Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.ab illo inventore veritatis et quasi architecto beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam!",
  },
  {
    id: 3,
    name: "Erin Wervelt",
    company: "CEO AT Code Nova",
    image: "/img/review/Avatar3.png",
    desc: "Erin Wervelt Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.ab illo inventore veritatis et quasi architecto beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam!",
  },
  {
    id: 4,
    name: "Erin Wervelt",
    company: "CEO AT Code Nova",
    image: "/img/review/Avatar1.png",
    desc: "Erin Wervelt Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.ab illo inventore veritatis et quasi architecto beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam!",
  },
];
const TestimonialsSection = () => {
  return (
    <div className="md:py-20 py-[60px] bg-bg-color-one ">
      <div className="relative md:h-[716px] h-full flex items-center justify-center">
        <div className="absolute top-0 left-0 z-0 hidden lg:block">
          <Image
            src={"/img/testimonial/testimonial-shape1_1.png"}
            alt="Hero"
            width={757}
            height={716}
            className="w-full h-full object-cover "
          />
        </div>

        <Container className="rounded-2xl bg-white z-40 w-full">
          <TestimonialSwiper
            testimonials={data}
            className="h-[556px] py-16 bg-white rounded-2xl"
          />
        </Container>
      </div>
    </div>
  );
};

export default TestimonialsSection;
