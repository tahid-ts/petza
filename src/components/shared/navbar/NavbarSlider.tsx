/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useEffect } from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "@/components/shared/container/Container";
import { MoveLeft, MoveRight } from "lucide-react";

interface Worker {
  id: number;
  name: string;
}

const deals: Worker[] = [
  {
    id: 1,
    name: "Summer Sale: Get $120+ Off Dont Miss Out --- Offer end July 2026",
  },
  {
    id: 2,
    name: "Summer Sale: Get $120+ Off Dont Miss Out --- Offer end July 2026",
  },
  {
    id: 3,
    name: "Summer Sale: Get $120+ Off Dont Miss Out --- Offer end July 2026",
  },
];

const NavbarSlider: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <>
      <Container>
        <div className="relative h-10  flex items-center justify-center">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, A11y, Autoplay]}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1280: { slidesPerView: 1 },
            }}
          >
            {deals.map((deal) => (
              <SwiperSlide key={deal.id}>
                <h1 className="text-white text-sm text-center">{deal.name}</h1>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div>
            <button
              ref={prevRef}
              aria-label="Previous"
              className="absolute 2xl:left-0 lg:left-0 top-1/2 -translate-y-1/2 w-8 h-8 z-20 lg:block hidden"
            >
              <MoveLeft className="text-white" />
            </button>
          </div>
          <div>
            <button
              ref={nextRef}
              aria-label="Next"
              className="absolute 2xl:right-0 lg:right-0 top-1/2 -translate-y-1/2 w-8 h-8 z-20 lg:block hidden"
            >
              <MoveRight className="text-white" />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NavbarSlider;
