// import React from "react";
// import Container from "../container/Container";
// import Title from "../../ui/title/Title";
// import Image from "next/image";
// import Button from "../../ui/button/Button";
// import { PiHandbagSimple } from "react-icons/pi";
// import Decoration from "../../ui/decoration/Decoration";

// const HeroBanner = () => {
//   return (
//     <div className="bg-bg-color-two md:h-screen h-[1182px]  w-full relative overflow-visible">
//       <Container>
//         <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-4 h-[852px] md:place-items-center animate-appear">
//           <div className="md:place-content-center md:place-items-start   flex flex-col gap-[42px] px-3 md:px-0 pt-20  md:pt-0">
//             <div className="w-full flex flex-col gap-2">
//               <Title
//                 align="left"
//                 size="md:text-[62px] text-[35px]"
//                 className="font-title text-dark font-bold leading-10 md:mb-11"
//               >
//                 Trusted By <span className="text-primary">Pets.</span>
//                 <Image
//                   src="/img/intro/intro-title-img1_1.png"
//                   alt="paw icon"
//                   width={140}
//                   height={48}
//                   className="inline-block px-1 h-12 w-[140px]"
//                 />
//                 <span className="inline-block md:hidden">Loved</span>
//               </Title>
//               <Title
//                 align="left"
//                 size="md:text-[62px] text-[35px] "
//                 className="font-title text-dark font-bold leading-10 whitespace-nowrap"
//               >
//                 <Image
//                   src="/img/intro/intro-title-img1_2.png"
//                   alt="paw icon"
//                   width={140}
//                   height={48}
//                   className="inline-block md:hidden px-1 h-12 w-[140px]"
//                 />{" "}
//                 <span className="md:inline-block hidden">Loved</span>
//                 <Image
//                   src="/img/intro/intro-title-img1_2.png"
//                   alt="paw icon"
//                   width={140}
//                   height={48}
//                   className="md:inline-block hidden px-1 h-12 w-[140px]"
//                 />{" "}
//                 By Owners.
//               </Title>
//             </div>
//             <h1 className="text-textColor md:w-xl w-full">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </h1>
//             <div>
//               <Button
//                 iconPosition="left"
//                 variant="primary-two"
//                 size="none"
//                 className="flex justify-between w-[171px] h-14 whitespace-nowrap pr-2"
//                 icon={<PiHandbagSimple size={20} />}
//               >
//                 Shop Now
//               </Button>
//             </div>
//           </div>
//           <div className=" flex relative md:h-[654px] md:w-[688px] w-full justify-between px-5 md:px-0 md:pt-0 items-center h-[600px] ">
//             <div className="bg-[#FA6C4166] rounded-br-full  rounded-bl-full rounded-tr-full md:h-[332px] md:w-[334.4px] h-[155px] w-[155px] flex items-center justify-center md:-mt-10 -mt-20 ">
//               <Image
//                 src={"/img/intro/intro-thumb1_1.png"}
//                 alt="hero banner"
//                 width={294}
//                 height={440}
//                 className="md:w-[293.37px] md:h-[440.14px] h-[225px] w-[150px]"
//               />
//             </div>
//             <div className="bg-[#150B331A] rounded-br-full  rounded-bl-full rounded-tl-full md:h-[326.99px] md:w-[324.82px] w-[150px] h-[154px] flex items-center justify-center md:-mt-[68px] mt-[34px] animate-appear">
//               <Image
//                 src={"/img/intro/intro-thumb1_2.png"}
//                 alt="hero banner"
//                 width={329}
//                 height={427}
//                 className="md:w-[329.36px] md:h-[427px] w-[149px] h-[194px]"
//               />
//               {/* <Image
//                 src="/img/intro/intro-thumb1_2.png"
//                 alt="hero banner"
//                 width={329}
//                 height={427}
//                 className="w-full h-full object-contain md:object-cover"
//               /> */}
//             </div>
//             <div className="absolute top-0 md:left-[247px] left-[150px] md:right-[296px]">
//               <div className="relative w-36 h-36 flex items-center justify-center">
//                 <Image
//                   src="/img/intro/intro-thumb-shape1_2.png"
//                   alt="hero banner"
//                   width={144}
//                   height={144}
//                   className="w-36 h-36 animate-[heroBanner-spin_6s_linear_infinite] "
//                 />
//                 <Image
//                   src="/img/intro/intro-thumb-shape1_1.png"
//                   alt="hero banner"
//                   width={99}
//                   height={99}
//                   className="w-[99.34px] h-[99.34px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                 />
//               </div>
//             </div>
//             <div className="absolute bottom-0 right-0 flex px-3 md:-mb-12 mb-0">
//               <div className="bg-[#A0E7E5] rounded-full md:w-[215px] md:h-[215px] w-[169px] h-[169px] flex items-center justify-center order-2 md:order-1">
//                 <Image
//                   src={"/img/intro/intro-thumb1_3.png"}
//                   alt="hero banner"
//                   width={215}
//                   height={214}
//                   className="md:w-[215px] md:h-[215px] w-[169px] h-[169px] object-cover"
//                 />
//               </div>
//               <div className="order-1 md:order-2">
//                 <div className="bg-[#FFFFFF8A] rounded-2xl  p-6 min-w-[223.6px] min-h-[79px]">
//                   <div className="flex items-center gap-4 mb-3">
//                     <div className="flex -space-x-2">
//                       <div className="relative w-6 h-6">
//                         <Image
//                           src="/img/intro/avatar1.png"
//                           alt=""
//                           fill
//                           className="rounded-full object-cover"
//                         />
//                       </div>
//                       <div className="relative w-6 h-6">
//                         <Image
//                           src="/img/intro/avatar2.png"
//                           alt=""
//                           fill
//                           className="rounded-full object-cover"
//                         />
//                       </div>
//                       <div className="relative w-6 h-6">
//                         <Image
//                           src="/img/intro/avatar3.png"
//                           alt=""
//                           fill
//                           className="rounded-full object-cover"
//                         />
//                       </div>
//                       <div className="relative w-6 h-6">
//                         <Image
//                           src="/img/intro/avatar4.png"
//                           alt=""
//                           fill
//                           className="rounded-full object-cover"
//                         />
//                       </div>
//                       <div className="relative w-6 h-6">
//                         <Image
//                           src="/img/intro/avatar5.png"
//                           alt=""
//                           fill
//                           className="rounded-full object-cover"
//                         />
//                       </div>
//                     </div>
//                     <div className="md:text-xl text-sm font-bold text-gray-900">
//                       10K+
//                     </div>
//                   </div>
//                   <div className="text-gray-700 md:text-base text-xs font-medium leading-0">
//                     Fully Satisfied Pet Owners
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Decoration src="/img/intro/intro-shape1_1.png" preset="topLeft" />
//       <Decoration src="/img/intro/intro-shape1_2.png" preset="topRight" />
//       <Decoration
//         src="/img/intro/intro-shape1_3.png"
//         preset="center"
//         className="mt-20 -ml-8"
//       />
//       <Decoration
//         src="/img/intro/intro-shape1_4.png"
//         preset="bottomLeft"
//         className="ml-[317px]"
//       />
//     </div>
//   );
// };

// export default HeroBanner;

import React from "react";
import Container from "../container/Container";
import Title from "../../ui/title/Title";
import Image from "next/image";
import Button from "../../ui/button/Button";
import { PiHandbagSimple } from "react-icons/pi";
import Decoration from "../../ui/decoration/Decoration";
import ScrollAnimator from "../animation/scrollAnimation/ScrollAnimator";

const HeroBanner = () => {
  return (
    <div className="bg-bg-color-two md:h-screen h-[1182px] w-full relative overflow-visible">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-4 h-[852px] md:place-items-center">
          {/* Left Content - Text Section */}
          <div className="md:place-content-center md:place-items-start flex flex-col gap-[42px] px-3 md:px-0 pt-20 md:pt-0 scroll-animation-wrapper">
            <div className="w-full flex flex-col gap-2 animate-smooth-fade-up">
              <ScrollAnimator
                repeatOnScroll
                effect="slideInLeft"
                duration={1.5}
              >
                <Title
                  align="left"
                  size="md:text-[62px] text-[35px]"
                  className="font-title text-dark font-bold leading-10 md:mb-11"
                >
                  Trusted By <span className="text-primary">Pets.</span>
                  <Image
                    src="/img/intro/intro-title-img1_1.png"
                    alt="paw icon"
                    width={140}
                    height={48}
                    className="inline-block px-1 h-12 w-[140px] animate-smooth-scale-in animation-delay-200"
                  />
                  <span className="inline-block md:hidden">Loved</span>
                </Title>
                <Title
                  align="left"
                  size="md:text-[62px] text-[35px] "
                  className="font-title text-dark font-bold leading-10 whitespace-nowrap animate-smooth-fade-up animation-delay-100"
                >
                  <Image
                    src="/img/intro/intro-title-img1_2.png"
                    alt="paw icon"
                    width={140}
                    height={48}
                    className="inline-block md:hidden px-1 h-12 w-[140px] animate-smooth-scale-in animation-delay-300"
                  />{" "}
                  <span className="md:inline-block hidden">Loved</span>
                  <Image
                    src="/img/intro/intro-title-img1_2.png"
                    alt="paw icon"
                    width={140}
                    height={48}
                    className="md:inline-block hidden px-1 h-12 w-[140px] animate-smooth-scale-in animation-delay-300"
                  />{" "}
                  By Owners.
                </Title>
              </ScrollAnimator>
            </div>

            <ScrollAnimator repeatOnScroll effect="slideInLeft" duration={1.5}>
              <h1 className="text-textColor md:w-xl w-full animate-smooth-fade-up animation-delay-200 animate-shrink-in">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h1>
            </ScrollAnimator>
            <ScrollAnimator repeatOnScroll effect="slideInDown" duration={1.5}>
              <div className="">
                <Button
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
          <div className="flex relative md:h-[654px] md:w-[688px] w-full justify-between px-5 md:px-0 md:pt-0 items-center h-[600px]">
            {/* First Image Container */}
            <ScrollAnimator
              repeatOnScroll
              effect="slideInLeft"
              duration={1.5}
              delay={0.5}
            >
              <div className="bg-[#FA6C4166] rounded-br-full rounded-bl-full rounded-tr-full md:h-[332px] md:w-[334.4px] h-[155px] w-[155px] flex items-center justify-center md:-mt-10 -mt-20 animate-smooth-slide-in">
                <Image
                  src={"/img/intro/intro-thumb1_1.png"}
                  alt="hero banner"
                  width={294}
                  height={440}
                  className="md:w-[293.37px] md:h-[440.14px] h-[225px] w-[150px] animate-smooth-scale-in"
                />
              </div>
            </ScrollAnimator>
            {/* Second Image Container */}
            <ScrollAnimator
              repeatOnScroll
              effect="slideInRight"
              duration={1.5}
              delay={0.5}
            >
              <div className="bg-[#150B331A] rounded-br-full rounded-bl-full rounded-tl-full md:h-[326.99px] md:w-[324.82px] w-[150px] h-[154px] flex items-center justify-center md:-mt-[68px] mt-[34px] animate-smooth-fade-rotate">
                <Image
                  src={"/img/intro/intro-thumb1_2.png"}
                  alt="hero banner"
                  width={329}
                  height={427}
                  className="md:w-[329.36px] md:h-[427px] w-[149px] h-[194px]"
                />
              </div>
            </ScrollAnimator>
            {/* Animated Spinning Elements */}
            <div className="absolute top-0 md:left-[247px] left-[150px] md:right-[296px] ">
              <ScrollAnimator
                repeatOnScroll
                effect="slideInDown"
                duration={1.5}
                delay={0.5}
              >
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <Image
                    src="/img/intro/intro-thumb-shape1_2.png"
                    alt="hero banner"
                    width={144}
                    height={144}
                    className="w-36 h-36  "
                  />
                  <Image
                    src="/img/intro/intro-thumb-shape1_1.png"
                    alt="hero banner"
                    width={99}
                    height={99}
                    className="w-[99.34px] h-[99.34px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  />
                </div>
              </ScrollAnimator>
            </div>

            {/* Bottom Right Section */}
            <div className="absolute bottom-0 right-0 flex px-3 md:-mb-12 mb-0 animate-smooth-stagger-in">
              <ScrollAnimator
                repeatOnScroll
                effect="slideInDown"
                duration={1.5}
                delay={0.5}
              >
                <div className="bg-[#A0E7E5] rounded-full md:w-[215px] md:h-[215px] w-[169px] h-[169px] flex items-center justify-center order-2 md:order-1 ">
                  <Image
                    src={"/img/intro/intro-thumb1_3.png"}
                    alt="hero banner"
                    width={215}
                    height={214}
                    className="md:w-[215px] md:h-[215px] w-[169px] h-[169px] object-cover"
                  />
                </div>
              </ScrollAnimator>
              <ScrollAnimator
                repeatOnScroll
                effect="slideInLeft"
                duration={1.5}
                delay={0.5}
              >
                <div className="order-1 md:order-2 ">
                  <div className="bg-[#FFFFFF8A] rounded-2xl p-6 min-w-[223.6px] min-h-[79px] backdrop-blur-sm ">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((index) => (
                          <div
                            key={index}
                            className="relative w-6 h-6 animate-smooth-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <Image
                              src={`/img/intro/avatar${index}.png`}
                              alt={`Customer avatar ${index}`}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="md:text-xl text-sm font-bold text-gray-900 animate-smooth-text-reveal">
                        10K+
                      </div>
                    </div>
                    <div className="text-gray-700 md:text-base text-xs font-medium leading-0 animate-smooth-fade-up animation-delay-200">
                      Fully Satisfied Pet Owners
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
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

export default HeroBanner;
