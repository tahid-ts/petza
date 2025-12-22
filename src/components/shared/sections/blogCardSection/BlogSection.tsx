"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/shared/container/Container";
import Button from "@/components/ui/button/Button";
import BlogCard from "@/components/shared/card/BlogCard";
import SliderOne from "@/components/shared/slider/SliderOne";
import ScrollAnimator from "@/utils/animation/scrollAnimation/ScrollAnimator";

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
    {
      id: 5,
      image: "/img/blog/blog-thumb1_2.jpg",
      date: "May 26, 2025",
      comments: 252,
      slug: "10-superfoods-you-should-be-eating-every-day",
      title: "Essential Pet Care Tips",
      description:
        "Fuel your dog's day with nutritious dry food served in a sturdy, easy-to-clean bowl. Keep the fun going with a durable toy ball designed for hours of play.",
    },
    {
      id: 6,
      image: "/img/blog/blog-thumb1_4.jpg",
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
    <section className="bg-[#FFF8F1] py-16 md:py-20 overflow-hidden">
      <Container className="flex flex-col lg:flex-row items-start gap-10 w-full">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[320px] flex flex-col gap-5 lg:gap-6 shrink-0 relative">
          <ScrollAnimator
            effect="slideInDown"
            className="overflow-hidden"
            repeatOnScroll
            duration={1.5}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-title">
              Our Latest <br className="hidden md:block" /> Blogs
            </h2>
          </ScrollAnimator>
          <div>
            <Button href="/blog" variant="primary">
              View All
            </Button>
          </div>

          {/* DECORATIVE SHAPE */}
          <div className="relative w-40 h-40 lg:w-[180px] lg:h-[180px] mt-4 hidden md:block">
            <Image
              src="/img/testimonial/testimonial-shape1_2.png"
              alt="Decorative paw shape"
              fill
              sizes="(min-width: 1024px) 180px, 160px"
              className="object-contain rotate-90 opacity-90"
            />
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex items-center gap-3 md:mt-6">
            <button
              ref={prevRef}
              aria-label="Previous Slide"
              className="w-9 h-9 bg-gray-900 hover:bg-gray-800 text-white rounded-md flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              ref={nextRef}
              aria-label="Next Slide"
              className="w-9 h-9 bg-[#FF6B3D] hover:bg-[#FF5A2B] text-white rounded-md flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT PANEL - SLIDER */}
        <div className="w-full overflow-hidden">
          <SliderOne
            items={blogs}
            renderItem={(blog) => (
              <div className="max-w-[500px] w-full mx-auto">
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
              0: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1.2, spaceBetween: 12 },
              640: { slidesPerView: 1.6, spaceBetween: 14 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 2, spaceBetween: 18 },
              1280: { slidesPerView: 2.3, spaceBetween: 20 },
              1400: { slidesPerView: 3.3, spaceBetween: 20 },
              1500: { slidesPerView: 3.3, spaceBetween: 20 },
              1600: { slidesPerView: 3, spaceBetween: 24 },
            }}
            loop={false}
            autoplay
            autoplayDelay={5000}
            externalPrevRef={prevRef}
            externalNextRef={nextRef}
            className="blog-slider"
          />
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
