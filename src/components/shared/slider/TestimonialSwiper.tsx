"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Title from "../../ui/title/Title";

export type Testimonial = {
  id: string | number;
  name: string;
  company?: string;
  rating?: number;
  image: string;
  desc: string;
};

interface TestimonialSwiperProps {
  testimonials: Testimonial[];
  className?: string;
}

const RatingStars: React.FC<{ rating?: number }> = React.memo(
  ({ rating = 5 }) => {
    const stars = useMemo(() => Array.from({ length: rating }), [rating]);
    return (
      <div className="flex justify-center mt-1 text-primary">
        {stars.map((_, i) => (
          <span key={i} className="text-xs">
            ★
          </span>
        ))}
      </div>
    );
  }
);
RatingStars.displayName = "RatingStars";

const TestimonialSwiper: React.FC<TestimonialSwiperProps> = ({
  testimonials,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`relative w-full overflow-hidden  ${className}`}
      style={{
        backgroundImage: "url(/img/testimonial/testimonial-bg1_1.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Title align="left" className="px-16 font-title font-bold">
        Loved By 500+ Happy Pet Owners
      </Title>
      <div className="relative  max-w-[1400px] mx-auto h-full mt-10 lg:mt-0">
        <div className="absolute -left-20 bottom-0 top-10 hidden lg:block">
          <Image
            src={"/img/review/Ellipse.svg"}
            alt={"shape"}
            width={351}
            height={175}
            className="h-[375px] w-[351px]"
          />
        </div>
        {/* LEFT SIDE - Avatar Slider */}
        <div className="relative flex justify-center ">
          <Swiper
            direction="vertical"
            modules={[Autoplay, Controller]}
            speed={1200}
            spaceBetween={40}
            slidesPerView={3}
            centeredSlides
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="testimonial-avatar-slider h-[340px] lg:h-[450px] w-full overflow-visible z-40 flex opacity-100! [&_.swiper-slide]:opacity-100!"
            breakpoints={{
              1199: { slidesPerView: 3, spaceBetween: 42 },
              991: {
                slidesPerView: 3,
                spaceBetween: 12,
                centeredSlides: true,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 12,
                centeredSlides: false,
                direction: "horizontal",
              },
              575: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: false,
                direction: "horizontal",
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: false,
                direction: "horizontal",
              },
            }}
          >
            {testimonials.map((t, index) => {
              const isActive = index === activeIndex;
              return (
                <SwiperSlide key={t.id}>
                  <div
                    className={`relative flex lg:flex-row flex-col  items-center transition-all duration-500 bg-white  lg:bg-transparent rounded-2xl lg:rounded-0 ${
                      isActive
                        ? "scale-100 z-10 lg:ml-32 ml-0"
                        : "scale-100 z-10 lg:mr-10 mr-0 lg:-ml-10"
                    }`}
                  >
                    <div className="flex lg:flex-row flex-col items-center  lg:w-[25%] gap-4">
                      <div
                        className={`relative rounded-full transition-all duration-500 bg-primary ${
                          isActive
                            ? " w-[100px] h-[100px] "
                            : " lg:w-16 lg:h-16 w-[100px] h-[100px]"
                        }`}
                      >
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          sizes="(max-width:768px) 100px, 100px"
                          style={{ objectFit: "cover" }}
                          priority={isActive}
                        />
                      </div>
                      <div
                        className={`mt-2 text-center transition-all duration-500 ${
                          isActive ? "text-black" : "text-black text-xs"
                        }`}
                      >
                        <div className="font-semibold leading-tight whitespace-nowrap">
                          {t.name}
                        </div>
                        <RatingStars rating={t.rating} />
                        {t.company && (
                          <div className="text-[10px] lg:text-xs mt-0.5">
                            {t.company}
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={`p-5 text-center lg:w-[75%] ${
                        isActive ? "ml-1" : "lg:opacity-0 opacity-100"
                      }`}
                    >
                      <Title
                        className="w-[80%] mx-auto font-normal! text-xs text-gray-500"
                        size="sm"
                      >
                        {t.desc}
                      </Title>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .testimonial-avatar-slider .swiper-wrapper {
          align-items: center;
        }
        .testimonial-avatar-slider .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .testimonial-text-slider .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
        }
        @media (max-width: 1024px) {
          .testimonial-avatar-slider {
            height: auto !important;
          }
          .testimonial-avatar-slider .swiper-wrapper {
            flex-direction: row !important;
          }
          .testimonial-text-slider {
            direction: horizontal !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSwiper;
