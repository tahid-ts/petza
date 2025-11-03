import React from "react";
import Container from "../container/Container";
import Title from "../../ui/title/Title";
import Image from "next/image";
import Button from "../../ui/button/Button";
import { PiHandbagSimple } from "react-icons/pi";
import Decoration from "../../ui/decoration/Decoration";

const HeroBanner = () => {
  return (
    <div className="bg-bg-color-two w-full relative overflow-visible h-full">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4 md:gap-[42px] md:h-[852px] h-auto place-items-center">
          <div className="place-content-center place-items-start flex flex-col gap-4 md:gap-[42px] px-3 md:px-0 w-full">
            <div>
              <Title
                align="left"
                size="md:text-[62px] text-[28px]"
                className="font-title text-dark font-bold md:leading-tight leading-snug md:mb-11 mb-4"
              >
                Trusted By <span className="text-primary">Pets.</span>
                <Image
                  src="/img/intro/intro-title-img1_1.png"
                  alt="paw icon"
                  width={140}
                  height={48}
                  className="inline-block px-1 h-8 w-[100px] md:h-12 md:w-[140px]"
                />
              </Title>
              <Title
                align="left"
                size="md:text-[62px] text-[28px]"
                className="font-title text-dark font-bold md:leading-tight leading-snug"
              >
                Loved
                <Image
                  src="/img/intro/intro-title-img1_2.png"
                  alt="paw icon"
                  width={140}
                  height={48}
                  className="inline-block px-1 h-8 w-[100px] md:h-12 md:w-[140px]"
                />
                By Owners.
              </Title>
            </div>
            <h1 className="text-textColor text-sm md:text-base text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h1>
            <div>
              <Button
                iconPosition="left"
                variant="primary-two"
                size="none"
                className="flex justify-between w-[140px] h-12 md:w-[171px] md:h-14 whitespace-nowrap pr-2"
                icon={<PiHandbagSimple size={20} />}
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div className="flex relative md:h-[654px] md:w-[688px] justify-between w-full">
            <div className="bg-[#FA6C4166] rounded-br-full rounded-bl-full rounded-tr-full h-[250px] w-[250px] md:h-[332px] md:w-[334.4px] flex items-center justify-center md:mt-[158px] mt-4">
              <Image
                src={"/img/intro/intro-thumb1_1.png"}
                alt="hero banner"
                width={294}
                height={440}
                className="w-full h-auto max-w-[250px] md:w-[293.37px] md:h-[440.14px]"
              />
            </div>
            <div className="bg-[#150B331A] rounded-br-full rounded-bl-full rounded-tl-full h-[250px] w-[250px] md:h-[326.99px] md:w-[324.82px] flex items-center justify-center mt-4 md:mt-[68px]">
              <Image
                src={"/img/intro/intro-thumb1_2.png"}
                alt="hero banner"
                width={329}
                height={427}
                className="w-full h-auto max-w-[250px] md:w-[329.36px] md:h-[427px]"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 mx-auto md:left-[247px] md:right-[296px]">
              <div className="relative w-24 h-24 md:w-36 md:h-36 flex items-center justify-center">
                <Image
                  src="/img/intro/intro-thumb-shape1_2.png"
                  alt="hero banner"
                  width={144}
                  height={144}
                  className="w-24 h-24 md:w-36 md:h-36 animate-[heroBanner-spin_6s_linear_infinite]"
                />
                <Image
                  src="/img/intro/intro-thumb-shape1_1.png"
                  alt="hero banner"
                  width={99}
                  height={99}
                  className="w-[70px] h-[70px] md:w-[99.34px] md:h-[99.34px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 flex">
              <div className="bg-[#A0E7E5] rounded-full h-[150px] w-[150px] md:h-[214px] md:w-[215.55px] flex items-center justify-center">
                <Image
                  src={"/img/intro/intro-thumb1_3.png"}
                  alt="hero banner"
                  width={215}
                  height={214}
                  className="w-[150px] h-[150px] md:w-[215.55px] md:h-[214px]"
                />
              </div>
              <div>
                <div className="bg-[#FFFFFF8A] rounded-2xl p-4 w-full max-w-[200px] md:min-w-[223.6px] md:min-h-[79px]">
                  <div className="flex items-center gap-2 md:gap-4 mb-2">
                    <div className="flex -space-x-2">
                      <div className="relative w-5 h-5 md:w-6 md:h-6">
                        <Image
                          src="/img/intro/avatar1.png"
                          alt=""
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="relative w-5 h-5 md:w-6 md:h-6">
                        <Image
                          src="/img/intro/avatar2.png"
                          alt=""
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="relative w-5 h-5 md:w-6 md:h-6">
                        <Image
                          src="/img/intro/avatar3.png"
                          alt=""
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="relative w-5 h-5 md:w-6 md:h-6">
                        <Image
                          src="/img/intro/avatar4.png"
                          alt=""
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="relative w-5 h-5 md:w-6 md:h-6">
                        <Image
                          src="/img/intro/avatar5.png"
                          alt=""
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-gray-900">
                      10K+
                    </div>
                  </div>
                  <div className="text-gray-700 text-xs md:text-base font-medium">
                    Fully Satisfied Pet Owners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Decoration src="/img/intro/intro-shape1_1.png" preset="topLeft" />
      <Decoration src="/img/intro/intro-shape1_2.png" preset="topRight" />
      <Decoration
        src="/img/intro/intro-shape1_3.png"
        preset="center"
        className="mt-12 md:mt-20 -ml-4 md:-ml-8"
      />
      <Decoration
        src="/img/intro/intro-shape1_4.png"
        preset="bottomLeft"
        className="ml-12 md:ml-[317px]"
      />
    </div>
  );
};

export default HeroBanner;
