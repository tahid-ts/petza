"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/shared/container/Container";
import Button from "@/components/ui/button/Button";
import BlogCard from "@/components/shared/card/BlogCard";
import SliderOne from "@/components/shared/slider/SliderOne";
import ScrollAnimator from "@/components/shared/animation/scrollAnimation/ScrollAnimator";

const BlogSection: React.FC = () => {
  const blogs = [
    {
      id: 1,
      image: "/img/blog/blog-thumb1_1.jpg",
      date: "May 26, 2025",
      comments: 252,
      slug: "10-superfoods-you-should-be-eating-every-day",
      title: "Bag Dog Food With Picture Paws It Sits Bowl.",
      description:
        "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
    },
    {
      id: 2,
      image: "/img/blog/blog-thumb1_2.jpg",
      date: "May 26, 2025",
      comments: 252,
      slug: "ultimate-guide-to-meal-prepping",
      title: "Mother & Daughter With Their Poodle Puppy In Pet Shop.",
      description:
        "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
    },
    {
      id: 3,
      image: "/img/blog/blog-thumb1_3.jpg",
      date: "May 26, 2025",
      comments: 252,
      slug: "10-superfoods-you-should-be-eating-every-day",
      title: "The Pet Lover's Blog",
      description:
        "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
    },
    {
      id: 4,
      image: "/img/blog/blog-thumb1_1.jpg",
      date: "May 26, 2025",
      comments: 252,
      slug: "10-superfoods-you-should-be-eating-every-day",
      title: "Essential Pet Care Tips",
      description:
        "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
    },
  ];
  const prevRef = useRef<HTMLButtonElement>(null!);
  const nextRef = useRef<HTMLButtonElement>(null!);
  return (
    <section className="bg-[#FFF8F1] py-20 overflow-hidden">
      <Container className="flex flex-col lg:flex-row items-start gap-10 w-full">
        {/* LEFT SIDE */}
        <div className="lg:w-[320px] w-full flex flex-col items-start lg:gap-6 gap-5 relative shrink-0">
          <ScrollAnimator
            effect="slideInDown"
            className="overflow-hidden"
            repeatOnScroll
            duration={1.5}
          >
            <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 leading-tight font-title">
              Our Latest <br className="md:block hidden" /> Blogs
            </h2>
          </ScrollAnimator>

          <Button variant="primary">View All</Button>

          <div className="relative w-[180px] h-[180px] mt-4 hidden md:block">
            <Image
              src="/img/testimonial/testimonial-shape1_2.png"
              alt="Decorative paw shape"
              fill
              className="object-contain object-center rotate-90 opacity-90"
            />
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex items-center gap-3 md:mt-8">
            <button
              ref={prevRef}
              aria-label="Previous Slide"
              className="swiper-button-prev-custom w-8 h-8 bg-gray-900 hover:bg-gray-800 text-white rounded-md flex items-center justify-center transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              ref={nextRef}
              aria-label="Next Slide"
              className="swiper-button-next-custom w-8 h-8 bg-[#FF6B3D] hover:bg-[#FF5A2B] text-white rounded-md flex items-center justify-center transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: REUSABLE SLIDER COMPONENT */}
        <div className=" w-full min-w-0">
          <SliderOne
            items={blogs}
            renderItem={(blog) => (
              <div className="max-w-[500px] w-full mx-auto ">
                <BlogCard
                  image={blog.image}
                  date={blog.date}
                  comments={blog.comments}
                  title={blog.title}
                  description={blog.description}
                  slug={blog.slug}
                />
              </div>
            )}
            breakpoints={{
              // 320: { slidesPerView: 1, spaceBetween: 0 },
              // 640: { slidesPerView: 2, spaceBetween: 10 },
              // 1024: { slidesPerView: 3, spaceBetween: 20 },
              // 1280: { slidesPerView: 3, spaceBetween: 24 },
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1800: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            loop
            spaceBetween={24}
            autoplayDelay={5000}
            autoplay
            centeredSlides={false}
            navigation={false}
            externalPrevRef={prevRef}
            externalNextRef={nextRef}
            // navPosition="block"
            className="blog-slider"
          />
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;

// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";

// import BlogCard from "@/components/shared/card/BlogCard";
// import Container from "@/components/shared/container/Container";
// import Button from "@/components/ui/button/Button";

// const BlogSection: React.FC = () => {
//   const blogs = [
//     {
//       id: 1,
//       image: "/img/blog/blog-thumb1_1.jpg",
//       date: "May 26, 2025",
//       comments: 252,
//       slug: "10-superfoods-you-should-be-eating-every-day",
//       title: "Bag Dog Food With Picture Paws It Sits Bowl.",
//       description:
//         "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
//     },
//     {
//       id: 2,
//       image: "/img/blog/blog-thumb1_2.jpg",
//       date: "May 26, 2025",
//       comments: 252,
//       slug: "ultimate-guide-to-meal-prepping",
//       title: "Mother & Daughter With Their Poodle Puppy In Pet Shop.",
//       description:
//         "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
//     },
//     {
//       id: 3,
//       image: "/img/blog/blog-thumb1_3.jpg",
//       date: "May 26, 2025",
//       comments: 252,
//       slug: "10-superfoods-you-should-be-eating-every-day",
//       title: "The Pet Lover's Blog",
//       description:
//         "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
//     },
//     {
//       id: 4,
//       image: "/img/blog/blog-thumb1_1.jpg",
//       date: "May 26, 2025",
//       comments: 252,
//       slug: "10-superfoods-you-should-be-eating-every-day",
//       title: "Essential Pet Care Tips",
//       description:
//         "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
//     },
//   ];

//   return (
//     <section className="bg-[#FFF8F1] py-20 overflow-hidden">
//       <Container className="flex flex-col lg:flex-row items-start gap-10 w-full">
//         {/* LEFT SIDE */}
//         <div className="lg:w-[320px] w-full flex flex-col items-start gap-6 relative shrink-0">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//             Our Latest <br /> Blogs
//           </h2>

//           <Button variant="primary">View All</Button>

//           <div className="relative w-[180px] h-[180px] mt-4">
//             <Image
//               src="/img/testimonial/testimonial-shape1_2.png"
//               alt="Decorative paw shape"
//               fill
//               className="object-contain object-center rotate-90 opacity-90"
//             />
//           </div>

//           {/* NAVIGATION BUTTONS */}
//           <div className="flex items-center gap-3 mt-8">
//             <button
//               aria-label="Previous Slide"
//               className="swiper-button-prev-custom w-8 h-8 bg-gray-900 hover:bg-gray-800 text-white rounded-md flex items-center justify-center transition-all"
//             >
//               <ChevronLeft size={16} />
//             </button>
//             <button
//               aria-label="Next Slide"
//               className="swiper-button-next-custom w-8 h-8 bg-[#FF6B3D] hover:bg-[#FF5A2B] text-white rounded-md flex items-center justify-center transition-all"
//             >
//               <ChevronRight size={16} />
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE SWIPER */}
//         <div className="flex-1 w-full min-w-0">
//           <Swiper
//             modules={[Navigation, A11y, Autoplay]}
//             slidesPerView={1}
//             centeredSlides={false}
//             loop
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             navigation={{
//               prevEl: ".swiper-button-prev-custom",
//               nextEl: ".swiper-button-next-custom",
//             }}
//             breakpoints={{
//               320: { slidesPerView: 1, spaceBetween: 0 },
//               640: { slidesPerView: 1, spaceBetween: 10 },
//               1024: { slidesPerView: 2, spaceBetween: 20 },
//               1280: { slidesPerView: 2, spaceBetween: 24 },
//             }}
//             className="opacity-100! [&_.swiper-slide]:opacity-100!"
//           >
//             {blogs.map((blog) => (
//               <SwiperSlide key={blog.id} className="flex! justify-center!">
//                 <div className="max-w-[500px] w-full">
//                   <BlogCard
//                     image={blog.image}
//                     date={blog.date}
//                     comments={blog.comments}
//                     title={blog.title}
//                     description={blog.description}
//                     slug={blog.slug}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default BlogSection;
