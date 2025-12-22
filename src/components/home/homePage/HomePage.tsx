import React from "react";

import HeroSection from "./heroSection/HeroSection";
import CategoriesSection from "@/components/shared/sections/categoriesSection/CategoriesSection";
import TrendingProductsSection from "@/components/shared/sections/trendingProductsSection/TrendingProductsSection";
import BestsellerSection from "@/components/shared/sections/bestsellerSection/BestsellerSection";
import ExclusiveOffersSection from "@/components/shared/sections/exclusiveOffersSection/ExclusiveOffersSection";
import TestimonialsSection from "@/components/shared/sections/testimonialsSection/TestimonialsSection";
import NewsletterSection from "@/components/shared/sections/newsletterSection/NewsletterSection";
import BlogSection from "@/components/shared/sections/blogCardSection/BlogSection";

const HomePage = () => {
  return (
    <div className="font-title">
      <HeroSection />
      <CategoriesSection />
      <TrendingProductsSection />
      <BestsellerSection />
      <ExclusiveOffersSection />
      <TestimonialsSection />
      <NewsletterSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;
