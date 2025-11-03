import MovingParticle from "@/components/shared/animation/MovingParticle";
import ScrollAnimator from "@/components/shared/animation/scrollAnimation/ScrollAnimator";
import Button from "@/components/ui/button/Button";
import Decoration from "@/components/ui/decoration/Decoration";
import Title from "@/components/ui/title/Title";
import Image from "next/image";
import React from "react";

const ExclusiveOffersSection = () => {
  return (
    <div className="relative">
      <div
        className="md:h-[370px] h-[200px] relative flex items-baseline justify-baseline "
        style={{
          backgroundImage: "url(/img/testimonial/testimonial-bg1_1.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <MovingParticle
          speed={15}
          stopOnSmall
          className="md:mt-20 mt-12    w-full   text-center flex items-center justify-center"
        >
          <Image
            src="/img/cat-shape/cat-thumb1.png"
            alt="Hero"
            width={760}
            height={335}
            className="md:w-[760px] w-[354px] md:h-[335px] h-[156px] ml-5 md:ml-0"
          />
        </MovingParticle>
      </div>
      <div
        className="bg-bg-color-two"
        style={{
          backgroundImage: "url(/img/testimonial/testimonial-bg1_1.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Title className="font-bold pt-[105px]">
          <ScrollAnimator effect="parallaxTilt" repeatOnScroll duration={1.5}>
            Exclusive Cat Owner Offers – Shop & Save!
          </ScrollAnimator>
        </Title>
        <div className="flex items-center justify-center my-8">
          <Button>Shop Now</Button>
        </div>
        <div>
          <ScrollAnimator
            effect="blurIn"
            className="overflow-hidden"
            repeatOnScroll
            duration={1.5}
          >
            <div className="relative h-[220px] md:h-[358px] md:w-[725px] w-full  mx-auto overflow-hidden">
              <Image
                src="/img/exclusive/exclusive-product1_3.png"
                alt="Hero"
                width={150}
                height={200}
                className="absolute  left-1/2 -translate-x-1/2  bottom-0  md:w-[254px] md:h-[358px] w-[150px] h-[200px]"
              />

              <Image
                src="/img/exclusive/exclusive-product1_1.png"
                alt="Hero"
                width={150}
                height={150}
                className="absolute left-0 bottom-0 z-15 md:w-[194px] md:h-[222px] w-[100px] h-[140px]"
              />

              <Image
                src="/img/exclusive/exclusive-product1_2.png"
                alt="Hero"
                width={150}
                height={100}
                className="absolute md:left-30 left-10 bottom-0 z-10 md:w-[181px] md:h-[291px] w-[120px] h-[170px]"
              />

              <Image
                src="/img/exclusive/exclusive-product1_4.png"
                alt="Hero"
                width={150}
                height={150}
                className="absolute md:right-[95px] right-10 bottom-0 z-10 md:w-[255px] md:h-[291px] w-[120px] h-[170px]"
              />

              <Image
                src="/img/exclusive/exclusive-product1_5.png"
                alt="Hero"
                width={150}
                height={100}
                className="absolute right-0 bottom-0 z-15 md:w-[255px] md:h-[222px] w-[100px] h-[140px]"
              />
            </div>
          </ScrollAnimator>
        </div>
      </div>
      <Decoration
        preset="rightCenter"
        className="border px-1.5 py-2 rounded-full mt-21 md:mt-10 mr-80 flex flex-col items-center justify-center z-20"
        width={149}
        height={149}
        // responsive="always-visible"
        opacity="full"
      >
        <div className="py-2 px-1 border rounded-full text-center">
          <h1 className="text-[8px] leading-none text-white">Discount</h1>
          <h1 className="text-2xl leading-none font-bold text-white">40%</h1>
        </div>
      </Decoration>
      <Decoration
        src={"/img/trending/offer-thumb-shape1_1.png"}
        alt="Decoration"
        preset="rightCenter"
        // responsive="always-visible"
        className="mt-10 mr-[285px]  z-10"
        opacity="full"
      />
    </div>
  );
};

export default ExclusiveOffersSection;
