import MovingParticle from "@/utils/animation/MovingParticle";
import ScrollAnimator from "@/utils/animation/scrollAnimation/ScrollAnimator";
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
          className="md:mt-20 mt-12    w-full   text-center flex items-center justify-center mx-auto"
        >
          <Image
            src="/img/cat-shape/cat-thumb1.png"
            alt="Hero"
            width={760}
            height={335}
            className="md:w-[760px] w-[354px] md:h-[335px] h-[156px] ml-5 md:ml-0 mx-auto"
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
            Exclusive Cat Owner Offers <br /> – Shop & Save!
          </ScrollAnimator>
        </Title>
        <div className="flex items-center justify-center mt-8">
          <Button href="/shop">Shop Now</Button>
        </div>

        <div className="relative h-[220px] md:h-[358px] w-full ">
          <Decoration
            src={"/img/exclusive/exclusive-product1.png"}
            alt="Decoration"
            preset="bottomCenter"
            responsive="always-visible"
            className=""
            opacity="full"
          />
        </div>
      </div>
      <Decoration
        preset="rightCenter"
        className="border px-1.5 py-2 rounded-full mt-40 md:mt-10 md:mr-80 flex flex-col items-center justify-center z-20 mr-9"
        width={149}
        height={149}
        // src={"/img/trending/offer-thumb-shape1_1.png"}
        responsive="always-visible"
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
        responsive="always-visible"
        className="mt-40 md:mt-10 md:mr-[285px] z-10"
        opacity="full"
      />
    </div>
  );
};

export default ExclusiveOffersSection;
