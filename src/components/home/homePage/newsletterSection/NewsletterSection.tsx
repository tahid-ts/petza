"use client";
import Button from "@/components/ui/button/Button";
import Container from "@/components/shared/container/Container";
import Title from "@/components/ui/title/Title";
import Image from "next/image";
import React, { useState } from "react";
import ScrollAnimator from "@/components/shared/animation/scrollAnimation/ScrollAnimator";
import Decoration from "@/components/ui/decoration/Decoration";

const NewsletterSection = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-bg-color-two ">
      {/* Top decorative bar */}
      <div className="h-[202px] hidden lg:block bg-bg-color-one"></div>

      {/* Main content with background image */}
      <div
        className="bg-center bg-no-repeat bg-cover relative py-20 md:py-0"
        style={{
          backgroundImage: "url(/img/testimonial/testimonial-bg1_1.png)",
        }}
      >
        <Container className="flex flex-col md:flex-row items-center relative">
          {/* Text and form section */}
          <div className="w-full md:w-[687px] flex justify-center items-center gap-6 z-10 md:order-1 order-2 md:h-[520px] h-full">
            <div className="flex flex-col gap-5 z-10 w-full max-w-md px-4 md:px-0">
              <ScrollAnimator
                effect="staggerSlideUp"
                repeatOnScroll
                duration={1.5}
              >
                <Title align="left" className="font-bold text-dark">
                  Subscribe To Our Newsletter
                </Title>
              </ScrollAnimator>
              <ScrollAnimator
                effect="staggerSlideUp"
                repeatOnScroll
                duration={1.5}
              >
                <p className="text-textColor text-sm md:text-base">
                  Stay updated on pet care tips, exclusive offers & more!
                  Subscribe to our newsletter for valuable insights & special
                  discounts straight to your inbox. Join our community of pet
                  lovers today.
                </p>
              </ScrollAnimator>
              <ScrollAnimator
                effect="staggerSlideUp"
                repeatOnScroll
                duration={1.5}
              >
                <div className="flex flex-col sm:flex-row gap-3 md:gap-5 w-full">
                  <input
                    type="email"
                    placeholder="Type your email"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out w-full text-dark font-input"
                  />
                  <Button>Subscribe</Button>
                </div>
              </ScrollAnimator>
              <ScrollAnimator
                effect="staggerSlideUp"
                repeatOnScroll
                duration={1.5}
              >
                <p className="text-textColor text-xs md:text-sm">
                  By subscribing, you agree to receive pet care tips and
                  promotional emails. You can unsubscribe anytime.
                </p>
              </ScrollAnimator>
            </div>
          </div>

          {/* Image section */}

          <div className="w-full md:w-[841px] md:absolute md:order-2 order-1 md:-right-24 lg:-right-36 md:-bottom-5 md:-mt-12 flex items-center justify-center">
            <ScrollAnimator effect="fadeIn" repeatOnScroll duration={1.5}>
              <Image
                src="/img/subscribe/subscribe-thumb1_1.png"
                alt="Paw image"
                width={841}
                height={763}
                className="inline-block px-1 w-[372px] h-[338px] md:w-[600px] md:h-[545px] lg:w-[841px] lg:h-[763px]"
              />
            </ScrollAnimator>
          </div>
        </Container>
        <Decoration
          src={"/img/subscribe/shape1_1.png"}
          alt="Decoration"
          preset="bottomLeft"
          responsive="always-visible"
          className="-ml-5 md:-mb-10  z-10 overflow-hidden"
          opacity="full"
        />
      </div>
    </div>
  );
};

export default NewsletterSection;
