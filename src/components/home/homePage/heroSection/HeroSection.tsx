/* eslint-disable @next/next/no-img-element */
import ScrollAnimator from "@/utils/animation/scrollAnimation/ScrollAnimator";
import Container from "@/components/shared/container/Container";
import Button from "@/components/ui/button/Button";
import Decoration from "@/components/ui/decoration/Decoration";
import Title from "@/components/ui/title/Title";
import Image from "next/image";
import React from "react";
import { PiHandbagSimple } from "react-icons/pi";

const HeroSection = () => {
  return (
    <div className="bg-bg-color-two xl:h-screen lg:h-[80vh] md:h-[140vh] h-full w-full relative overflow-visible pb-10 lg:pb-0 my-auto">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center 2xl:gap-14 xl:gap-10 lg:gap-8 md:gap-6  gap-4   md:place-items-center h-full">
          {/* Left Content - Images Section */}
          <div className="md:place-content-center w-full 2xl:h-[852px] md:h-full md:place-items-start flex flex-col gap-[42px]  scroll-animation-wrapper items-start pt-20 lg:pt-0  lg:overflow-hidden">
            <div className="w-full flex flex-col gap-2 animate-smooth-fade-up ">
              <ScrollAnimator
                repeatOnScroll
                effect="slideInLeft"
                duration={1.5}
              >
                <Title
                  align="left"
                  className="font-title text-dark font-bold flex flex-wrap lg:leading-10 leading-12 md:mb-11 mb-4 "
                >
                  Trusted By <span className="text-primary px-1"> Pets.</span>
                  <div className="inline-block px-1">
                    <Image
                      src="/img/intro/intro-title-img1_1.png"
                      alt="paw icon"
                      width={140}
                      height={48}
                      className="w-[140px] lg:w-[120px] xl:w-[140px] h-auto object-contain animate-smooth-scale-in animation-delay-200"
                    />
                  </div>
                  <span className="inline-block md:hidden">Loved</span>
                </Title>
                <Title
                  align="left"
                  className="font-title text-dark font-bold lg:leading-10 flex flex-wrap gap-4 leading-12 whitespace-nowrap animate-smooth-fade-up animation-delay-100"
                >
                  <Image
                    src="/img/intro/intro-title-img1_2.png"
                    alt="paw icon"
                    width={140}
                    height={48}
                    className="
    inline-block md:hidden 
    px-1 
    w-[140px] lg:w-[120px] xl:w-[140px] 
    h-auto 
    object-contain 
    animate-smooth-scale-in animation-delay-300
  "
                  />{" "}
                  <span className="md:inline-block hidden">Loved</span>
                  <Image
                    src="/img/intro/intro-title-img1_2.png"
                    alt="paw icon"
                    width={140}
                    height={48}
                    className="
    hidden md:inline-block 
    px-1 
    w-[140px] lg:w-[120px] xl:w-[140px] 
    h-auto 
    object-contain 
    animate-smooth-scale-in animation-delay-300
  "
                  />{" "}
                  By Owners.
                </Title>
              </ScrollAnimator>
            </div>
            <ScrollAnimator repeatOnScroll effect="slideInLeft" duration={1.5}>
              <h1 className="text-textColor md:w-xl w-full pr-4 animate-smooth-fade-up animation-delay-200 animate-shrink-in flex flex-wrap">
                &quot;Trusted By Pets, Loved By Owners&quot; isn’t just a
                slogan—it’s a promise of quality, care, and companionship. Every
                pet owner knows the joy of seeing their furry friend wag their
                tail, purr with contentment, or eagerly await their favorite
                treat.
              </h1>
            </ScrollAnimator>
            <ScrollAnimator repeatOnScroll effect="slideInDown" duration={1.5}>
              <div className="">
                <Button
                  href="/shop"
                  iconPosition="left"
                  variant="primary-two"
                  size="none"
                  className="flex justify-between w-[171px] h-14 whitespace-nowrap pr-2 "
                  icon={<PiHandbagSimple size={20} />}
                >
                  Shop Now
                </Button>
              </div>
            </ScrollAnimator>
          </div>

          {/* Right Content - Images Section */}
          <div className="flex relative 2xl:h-[852px] md:h-[600px] w-full justify-between items-center h-[400px] ">
            <div className="flex relative 2xl:h-[654.17px] xl:h-[600px] lg:h-[550px] h-full  w-full justify-between overflow-hidden">
              {/* Left Image */}
              <ScrollAnimator
                repeatOnScroll
                effect="slideInLeft"
                duration={1.5}
                delay={0.5}
              >
                <div
                  className="bg-[#FA6C4166] rounded-br-full rounded-bl-full rounded-tr-full
        2xl:h-[332px] 2xl:w-[334.4px] 2xl:mt-36
        xl:h-[280px] xl:w-[280px] xl:mt-32
        lg:h-56 lg:w-56 lg:mt-28
        md:h-[280px] md:w-[280px] md:mt-24
        h-[185px] w-[185px] mt-16
        flex items-center justify-center animate-smooth-slide-in"
                >
                  {/* <Image
                    src={"/img/intro/intro-thumb1_1.png"}
                    alt="hero banner"
                    width={294}
                    height={440}
                    className="
            2xl:w-[293.37px] 
            xl:w-[250px] 
            lg:w-[200px ] 
            md:w-[220px] 
            h-auto w-[150px]
            object-contain
            animate-smooth-scale-in"
                  /> */}
                  {/* <Image
                    src={"/img/intro/intro-thumb1_1.png"}
                    alt="hero banner"
                    width={294}
                    height={440}
                    className="
 w-[150px] h-auto
    md:w-[220px] md:h-auto
    lg:w-[200px] lg:h-auto
    xl:w-[250px] xl:h-auto
    2xl:w-[293px] 2xl:h-auto
    object-contain
    animate-smooth-scale-in"
                  /> */}
                  <img
                    src="/img/intro/intro-thumb1_1.png"
                    alt="hero banner"
                    width="294"
                    height="440"
                    className="
    w-[150px] h-auto
    md:w-[220px] md:h-auto
    lg:w-[200px] lg:h-auto
    xl:w-[250px] xl:h-auto
    2xl:w-[293px] 2xl:h-auto
    object-contain
    animate-smooth-scale-in"
                  />
                </div>
              </ScrollAnimator>

              {/* Right Image */}
              <ScrollAnimator
                repeatOnScroll
                effect="slideInRight"
                duration={1.5}
                delay={0.5}
              >
                <div
                  className="bg-[#150B331A] rounded-br-full rounded-bl-full rounded-tl-full
        2xl:h-[326.99px] 2xl:w-[324.82px] 2xl:mt-24
        xl:h-[280px] xl:w-[280px] xl:mt-16
        lg:h-60 lg:w-60 lg:mt-12
        md:h-[340px] md:w-[340px] md:mt-8
        h-[154px] w-[150px] mt-4
        flex items-center justify-center animate-smooth-fade-rotate"
                >
                  <div>
                    {/* <Image
                      src={"/img/intro/intro-thumb1_2.png"}
                      alt="hero banner"
                      width={329}
                      height={427}
                      className="
            2xl:w-[329.36px] 2xl:h-auto
            xl:w-[280px] xl:h-auto
            lg:w-60 lg:h-auto
            md:w-[380px] md:h-auto
            w-[149px] h-auto
            object-contain"
                    /> */}
                    <img
                      src="/img/intro/intro-thumb1_2.png"
                      alt="hero banner"
                      width="329"
                      height="427"
                      className="
    2xl:w-[329.36px] 2xl:h-auto
    xl:w-[280px] xl:h-auto
    lg:w-60 lg:h-auto
    md:w-[380px] md:h-auto
    w-[149px] h-auto
    object-contain"
                    />
                  </div>
                </div>
              </ScrollAnimator>
              {/* Center Spinning Image */}

              <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ScrollAnimator
                  repeatOnScroll
                  effect="slideInDown"
                  duration={1.5}
                  delay={0.5}
                >
                  <div
                    className="relative
          2xl:w-36 2xl:h-36
          xl:w-32 xl:h-32
          lg:w-28 lg:h-28
          md:w-24 md:h-24
          w-20 h-20
          flex items-center justify-center"
                  >
                    <Image
                      src="/img/intro/intro-thumb-shape1_2.png"
                      alt="hero banner"
                      width={144}
                      height={144}
                      className="
            2xl:w-36 2xl:h-36
            xl:w-32 xl:h-32
            lg:w-28 lg:h-28
            md:w-24 md:h-24
            w-20 h-20
            animate-spin [animation-duration:10s]"
                    />
                    <Image
                      src="/img/intro/intro-thumb-shape1_1.png"
                      alt="hero banner"
                      width={99}
                      height={99}
                      className="
            2xl:w-[99.34px] 2xl:h-[99.34px]
            xl:w-[85px] xl:h-[85px]
            lg:w-[75px] lg:h-[75px]
            md:w-[65px] md:h-[65px]
            w-[55px] h-[55px]
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </ScrollAnimator>
              </div>

              {/* Bottom Right Images */}
              <div className="absolute bottom-0 right-0 md:right-1/4 lg:right-0 flex mb-0 animate-smooth-stagger-in">
                <ScrollAnimator
                  repeatOnScroll
                  effect="slideInDown"
                  duration={1.5}
                  delay={0.5}
                >
                  <div
                    className="bg-[#A0E7E5] rounded-full
          2xl:w-[215px] 2xl:h-[215px]
          xl:w-[185px] xl:h-[185px]
          lg:w-40 lg:h-40
          md:w-[180px] md:h-[180px]
              w-[150px] h-[150px]
          flex items-center justify-center order-2 md:order-1"
                  >
                    {/* <Image
                      src={"/img/intro/intro-thumb1_3.png"}
                      alt="hero banner"
                      width={215}
                      height={214}
                      className="
              2xl:w-[215px] 2xl:h-auto
              xl:w-[185px] xl:h-auto
              lg:w-40 lg:h-auto
              md:w-[180px] md:h-auto
              w-[150px] h-auto
              object-cover"
                    /> */}
                    <img
                      src="/img/intro/intro-thumb1_3.png"
                      alt="hero banner"
                      width="215"
                      height="214"
                      className="
    2xl:w-[215px] 2xl:h-auto
    xl:w-[185px] xl:h-auto
    lg:w-40 lg:h-auto
    md:w-[180px] md:h-auto
    w-[150px] h-auto
    object-cover"
                    />
                  </div>
                </ScrollAnimator>
                <ScrollAnimator
                  repeatOnScroll
                  effect="slideInLeft"
                  duration={1.5}
                  delay={0.5}
                >
                  <div className="order-1 md:order-2">
                    <div
                      className="bg-[#FFFFFF8A] rounded-2xl p-2
            2xl:min-w-[223.6px] 2xl:min-h-[79px]
            xl:min-w-[190px] xl:min-h-[70px]
            lg:min-w-40 lg:min-h-[60px]
            md:min-w-[140px] md:min-h-[55px]
            min-w-[120px] min-h-[50px]
            backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4, 5].map((index) => (
                            <div
                              key={index}
                              className="relative
    w-4 h-4
    md:w-4 md:h-4
    lg:w-4 lg:h-4
    xl:w-5 xl:h-5
    2xl:w-6 2xl:h-6
    animate-smooth-scale-in
    overflow-hidden
    rounded-full"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <Image
                                src={`/img/intro/avatar${index}.png`}
                                alt={`Customer avatar ${index}`}
                                fill
                                className="object-cover"
                                sizes="16px 16px, 20px 20px, 24px 24px, 100vw"
                              />
                            </div>
                          ))}
                        </div>
                        <div
                          className="
                2xl:text-xl
                xl:text-lg
                lg:text-base
                md:text-sm
                text-xs
                font-bold text-gray-900 animate-smooth-text-reveal"
                        >
                          10K+
                        </div>
                      </div>
                      <div
                        className="
              2xl:text-base
              xl:text-sm
              lg:text-xs
              md:text-xs
              text-[10px]
              text-gray-700 font-medium leading-0 animate-smooth-fade-up animation-delay-200"
                      >
                        Fully Satisfied Pet Owners
                      </div>
                    </div>
                  </div>
                </ScrollAnimator>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Decoration Elements with Animations */}
      <Decoration
        src="/img/intro/intro-shape1_1.png"
        preset="topLeft"
        className="animate-smooth-parallax-fade"
      />
      <Decoration
        src="/img/intro/intro-shape1_2.png"
        preset="topRight"
        className="animate-smooth-parallax-fade animation-delay-100"
      />
      <Decoration
        src="/img/intro/intro-shape1_3.png"
        preset="center"
        className="mt-20 -ml-8 animate-smooth-morph-reveal"
      />
      <Decoration
        src="/img/intro/intro-shape1_4.png"
        preset="bottomLeft"
        className="ml-[317px] animate-smooth-wave-in"
      />
    </div>
  );
};

export default HeroSection;
