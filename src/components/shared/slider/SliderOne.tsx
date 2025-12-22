"use client";

import React, { useRef, useEffect } from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export interface SliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  breakpoints?: SwiperCore["params"]["breakpoints"];
  loop?: boolean;
  spaceBetween?: number;
  navigation?: boolean;
  navPosition?:
    | "top-center"
    | "bottom-center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "sides"
    | "block";
  className?: string;
  autoplayDelay?: number;
  autoplay?: boolean;
  centeredSlides?: boolean;
  centeredSlidesBounds?: boolean;

  // 🔹 Optional external navigation controls
  externalPrevRef?: React.RefObject<HTMLButtonElement>;
  externalNextRef?: React.RefObject<HTMLButtonElement>;
}

const SliderOne = <T,>({
  items,
  renderItem,
  breakpoints = {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  },
  loop = false,
  spaceBetween = 20,
  navigation = true,
  navPosition = "sides",
  className = "",
  autoplayDelay = 3000,
  autoplay = true,
  centeredSlides = false,
  centeredSlidesBounds = false,
  externalPrevRef,
  externalNextRef,
}: SliderProps<T>) => {
  const internalPrevRef = useRef<HTMLButtonElement | null>(null);
  const internalNextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const navWrapperClasses: Record<string, string> = {
    "top-center": "absolute top-2 left-1/2 -translate-x-1/2 flex gap-2",
    "bottom-center": "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2",
    "top-left": "absolute top-2 left-2 flex gap-2",
    "top-right": "absolute top-2 right-2 flex gap-2",
    "bottom-left": "absolute -bottom-12 left-4 flex gap-2",
    "bottom-right": "absolute -bottom-12 right-4 flex gap-2",
    sides: "absolute inset-y-0 w-full flex justify-between items-center px-2",
    block: "relative flex gap-2 mt-4 justify-center items-center",
  };

  // 🔹 Manage autoplay dynamically
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (autoplay) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
    }
  }, [autoplay]);

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        loop={loop}
        centeredSlides={centeredSlides}
        centeredSlidesBounds={centeredSlidesBounds}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }
            : false
        }
        className="opacity-100! [&_.swiper-slide]:opacity-100! scale-100!"
        navigation={{
          prevEl: externalPrevRef?.current || internalPrevRef.current,
          nextEl: externalNextRef?.current || internalNextRef.current,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl =
              externalPrevRef?.current || internalPrevRef.current;
            swiper.params.navigation.nextEl =
              externalNextRef?.current || internalNextRef.current;
          }
        }}
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            const prev = externalPrevRef?.current || internalPrevRef.current;
            const next = externalNextRef?.current || internalNextRef.current;
            if (prev && next && swiper.navigation) {
              swiper.params.navigation = {
                ...(typeof swiper.params.navigation === "object"
                  ? swiper.params.navigation
                  : {}),
                prevEl: prev,
                nextEl: next,
              };
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 Only render internal navigation if no external refs are passed */}
      {navigation && !externalPrevRef && !externalNextRef && (
        <div
          className={`${navWrapperClasses[navPosition]} pointer-events-none`}
        >
          <button
            ref={internalPrevRef}
            aria-label="Previous"
            className="pointer-events-auto w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-white shadow z-20"
          >
            <svg
              className="w-3 h-3 text-green-700"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            ref={internalNextRef}
            aria-label="Next"
            className="pointer-events-auto w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-white shadow z-20"
          >
            <svg
              className="w-3 h-3 text-green-700"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderOne;
