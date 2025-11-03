import React from "react";

import HeroSection from "./heroSection/HeroSection";
import CategoriesSection from "./categoriesSection/CategoriesSection";
import TrendingProductsSection from "./trendingProductsSection/TrendingProductsSection";
import BestsellerSection from "./bestsellerSection/BestsellerSection";
import ExclusiveOffersSection from "./exclusiveOffersSection/ExclusiveOffersSection";

import NewsletterSection from "./newsletterSection/NewsletterSection";
import BlogSection from "./blogCardSection/BlogSection";
import TestimonialsSection from "./testimonialsSection/TestimonialsSection";
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
