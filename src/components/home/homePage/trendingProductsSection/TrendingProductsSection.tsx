"use client";

import React from "react";
import Button from "@/components/ui/button/Button";
import ProductCard from "@/components/shared/card/ProductCard";
import Container from "@/components/shared/container/Container";
import Decoration from "@/components/ui/decoration/Decoration";
import SliderOne from "@/components/shared/slider/SliderOne";
import Title from "@/components/ui/title/Title";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimator from "@/components/shared/animation/scrollAnimation/ScrollAnimator";

const products = [
  {
    id: 1,
    name: "Dog Food Vegetarian Cuisine Puppy Pedigree",
    price: 290,
    image: "/img/product/product1_1.png",
  },
  {
    id: 2,
    name: "Dog Food Vegetarian Cuisine Puppy Pedigree",
    price: 350,
    image: "/img/product/product1_2.png",
  },
  {
    id: 3,
    name: "Dog Food Vegetarian Cuisine Puppy Pedigree",
    price: 180,
    image: "/img/product/product1_3.png",
  },
  {
    id: 4,
    name: "Dog Food Vegetarian Cuisine Puppy Pedigree",
    price: 120,
    image: "/img/product/product1_4.png",
  },
  {
    id: 5,
    name: "Dog Food Vegetarian Cuisine Puppy Pedigree",
    price: 90,
    image: "/img/product/product1_5.png",
  },
];
const TrendingProductsSection = () => {
  return (
    <div className="md:h-[741px] h-full bg-bg-color-one relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center place-content-center py-20 gap-5">
          {/* Left Card */}
          <div className="relative">
            <div className="flex md:flex-row flex-col w-full md:justify-between justify-center md:h-[581px] h-full bg-[#D7F5D1] rounded-2xl relative overflow-hidden">
              {/* Left Image Section */}
              <div className="flex md:items-center md:justify-center md:p-12 p-5 pt-20 relative z-10">
                <div className="relative w-[191px] h-[310px]">
                  <ScrollAnimator
                    repeatOnScroll
                    duration={1.5}
                    effect="slideInLeft"
                  >
                    <Image
                      src={"/img/trending/offer-thumb1_1.png"}
                      alt="Hero"
                      width={191}
                      height={310}
                      className="w-[191px] h-[310px] object-cover rounded-xl relative z-10 mt-20 md:mt-10"
                    />
                  </ScrollAnimator>

                  {/* Decoration 1 */}
                  <Decoration
                    src={"/img/trending/trending-one-shape1_4.png"}
                    alt="Decoration"
                    preset="topLeft"
                    responsive="always-visible"
                    className="-mt-12 md:-mt-25 -mr-12 md:-mr-10 z-10"
                    opacity="full"
                  />
                  <Decoration
                    src={"/img/trending/offer-thumb-shape1_1.png"}
                    alt="Decoration"
                    preset="topRight"
                    responsive="always-visible"
                    className="mt-12 md:mt-0 -mr-12 z-10"
                    opacity="full"
                  />

                  {/* Discount Badge */}
                  <Decoration
                    preset="topRight"
                    className="border px-1.5 py-2 rounded-full mt-21 md:mt-10 -mr-3 flex flex-col items-center justify-center z-20"
                    width={149}
                    height={149}
                    responsive="always-visible"
                    opacity="full"
                  >
                    <div className="py-2 px-1 border rounded-full text-center">
                      <h1 className="text-[8px] leading-none">Discount</h1>
                      <h1 className="text-2xl leading-none font-bold">40%</h1>
                    </div>
                  </Decoration>
                </div>
              </div>

              {/* Right Text Section */}
              <div className="flex flex-col items-start justify-center p-5 relative z-20 mt-15 md:mt-0">
                <Title className="text-start  font-title font-bold mb-5 ">
                  Pet’s Nutrition Made Simple
                </Title>
                <p className="text-dark mb-8">
                  Sed doeiusmod tempor incididunt labordolore magna aliqua.
                </p>
                <Button>Shop Now</Button>
              </div>

              {/* Background Decoration */}
              <Decoration
                src="/img/trending/trending-one-shape1_5.png"
                alt="Decoration"
                preset="bottomLeft"
                responsive="always-visible"
                // className="absolute bottom-0 left-0 z-0"
              />
              <Decoration
                src="/img/trending/trending-one-shape1_6.png"
                alt="Decoration"
                preset="topRight"
                responsive="always-visible"
                // className="absolute bottom-0 left-0 z-0"
              />
            </div>
          </div>

          {/* Right Side Section */}
          <div className="w-full flex flex-col gap-6 h-[581px]">
            <div className="flex justify-between items-start">
              <Title
                align="left"
                size="xl"
                className="text-start font-title font-bold whitespace-nowrap"
              >
                Trending Products
              </Title>
              <Link className="text-dark border-b border-primary" href={"/#"}>
                View All
              </Link>
            </div>
            <div>
              <SliderOne
                items={products}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  640: { slidesPerView: 1, spaceBetween: 0 },
                  1024: { slidesPerView: 2, spaceBetween: 15 },
                  1280: { slidesPerView: 2, spaceBetween: 24 },
                }}
                loop={true}
                navigation={false}
                autoplayDelay={5000}
                centeredSlides={false}
                renderItem={(products) => (
                  <ProductCard product={products} offer={false} />
                )}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrendingProductsSection;
