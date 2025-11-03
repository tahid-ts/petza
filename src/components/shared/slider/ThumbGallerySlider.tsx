// "use client";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Thumbs } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import Image from "next/image";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/thumbs";
// import Decoration from "@/components/ui/decoration/Decoration";

// interface ThumbGallerySliderProps {
//   images: Array<{
//     src: string;
//     alt: string;
//   }>;
// }

// export default function ThumbGallerySlider({
//   images,
// }: ThumbGallerySliderProps) {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
//   const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

//   // Handle thumbnail click for better accessibility
//   const handleThumbnailClick = (index: number) => {
//     if (mainSwiper) {
//       mainSwiper.slideTo(index);
//     }
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <div className="flex flex-col md:flex-row gap-4">
//         {/* Thumbnail Swiper */}
//         <div className="w-full md:w-32 order-2 md:order-1">
//           <Swiper
//             onSwiper={setThumbsSwiper}
//             spaceBetween={8}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             direction="horizontal"
//             modules={[FreeMode, Thumbs]}
//             breakpoints={{
//               768: {
//                 slidesPerView: 4,
//                 direction: "vertical",
//               },
//               1024: {
//                 slidesPerView: 5,
//                 direction: "vertical",
//               },
//             }}
//             className="thumb-swiper h-32 md:h-[564px]"
//             aria-label="Product image thumbnails"
//           >
//             {images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <button
//                   onClick={() => handleThumbnailClick(index)}
//                   className={`w-full h-full p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
//                     mainSwiper?.activeIndex === index
//                       ? "border-2 border-primary"
//                       : "border border-transparent"
//                   }`}
//                   aria-label={`View product image ${index + 1}: ${image.alt}`}
//                   aria-current={
//                     mainSwiper?.activeIndex === index ? "true" : "false"
//                   }
//                 >
//                   <div className="aspect-square w-full h-full flex items-center justify-center">
//                     <Image
//                       src={image.src}
//                       alt={image.alt}
//                       width={80}
//                       height={80}
//                       className="w-full h-full object-cover border active:border-red-600"
//                       loading="lazy"
//                     />
//                   </div>
//                 </button>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Main Image Swiper */}
//         <div className="w-full md:flex-1 order-1 md:order-2">
//           <Swiper
//             onSwiper={setMainSwiper}
//             spaceBetween={10}
//             thumbs={{
//               swiper:
//                 thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//             }}
//             modules={[Thumbs]}
//             className="main-swiper rounded-lg overflow-hidden"
//             aria-label="Product image gallery"
//             aria-live="polite"
//           >
//             {images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <div className="aspect-square rounded-lg overflow-hidden h-[564px] w-full flex items-center justify-center p-10">
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     width={400}
//                     height={400}
//                     className="w-full h-full object-contain"
//                     priority={index === 0}
//                     loading={index === 0 ? "eager" : "lazy"}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//             <Decoration
//               src={"/img/trending/trending-one-shape1_5.png"}
//               alt="Decoration"
//               preset="bottomLeft"
//               className="absolute bottom-0 left-0 -mb-12 -ml-12 z-10"
//               opacity="full"
//             />
//             <Decoration
//               src={"/img/trending/trending-one-shape1_6.png"}
//               alt="Decoration"
//               preset="topRight"
//               className="absolute top-0 right-0 -mt-12 -mr-12 z-10"
//               opacity="full"
//             />
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Decoration from "@/components/ui/decoration/Decoration";

interface ThumbGallerySliderProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export default function ThumbGallerySlider({
  images,
}: ThumbGallerySliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active index explicitly

  // Sync active index with main Swiper
  useEffect(() => {
    if (mainSwiper) {
      const handleSlideChange = () => {
        setActiveIndex(mainSwiper.activeIndex);
      };
      mainSwiper.on("slideChange", handleSlideChange);
      return () => {
        mainSwiper.off("slideChange", handleSlideChange);
      };
    }
  }, [mainSwiper]);

  const handleThumbnailClick = (index: number) => {
    if (mainSwiper) {
      mainSwiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full mx-auto ">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Thumbnail Swiper */}
        <div className="w-full md:w-32 order-2 lg:order-1">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            direction="horizontal"
            modules={[FreeMode, Thumbs]}
            breakpoints={{
              575: {
                slidesPerView: 4,

                direction: "horizontal",
              },
              320: {
                slidesPerView: 4,

                direction: "horizontal",
              },
              768: {
                slidesPerView: 4,
                direction: "vertical",
              },
              1024: {
                slidesPerView: 5,
                direction: "vertical",
              },
            }}
            className="thumb-swiper h-20 md:h-[564px]"
            aria-label="Product image thumbnails"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <button
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-full h-full p-1 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 ${
                    activeIndex === index
                      ? "border-2 border-primary"
                      : "border border-primary/20"
                  }`}
                  aria-label={`View product image ${index + 1}: ${image.alt}`}
                  aria-current={activeIndex === index ? "true" : "false"}
                >
                  <div className="aspect-square w-full h-full flex items-center justify-center">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Main Image Swiper */}
        <div className="lg:w-[684px] md:w-[80%] w-full flex order-1 md:order-2 bg-bg-color-two rounded-lg ">
          <Swiper
            onSwiper={setMainSwiper}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Thumbs]}
            className="main-swiper rounded-lg overflow-hidden"
            aria-label="Product image gallery"
            aria-live="polite"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-square rounded-lg overflow-hidden lg:h-[564px] h-full w-full flex items-center justify-center lg:p-10 p-5">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </SwiperSlide>
            ))}
            <Decoration
              src={"/img/trending/trending-one-shape1_5.png"}
              alt="Decoration"
              preset="bottomLeft"
              className="absolute bottom-0 left-0 -mb-12 -ml-12 z-10"
              opacity="full"
            />
            <Decoration
              src={"/img/trending/trending-one-shape1_6.png"}
              alt="Decoration"
              preset="topRight"
              className="absolute top-0 right-0 -mt-12 -mr-12 z-10"
              opacity="full"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
