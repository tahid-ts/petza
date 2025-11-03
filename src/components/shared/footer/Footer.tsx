// /* eslint-disable react/no-unescaped-entities */

"use client";

import React, { useState } from "react";
import Container from "../container/Container";
import FooterSocials from "./FooterSocials";
import FooterColumn from "./FooterColumn";
import FooterBrand from "./FooterBrand";
import FooterCopyright from "./FooterCopyright";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(min-width: 768px)");
      setIsDesktop(media.matches);
      const listener = () => setIsDesktop(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, []);

  return isDesktop;
};

const Footer = () => {
  const isDesktop = useIsDesktop();

  const [menuOpen, setMenuOpen] = useState(false);
  const [quickAccessOpen, setQuickAccessOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <footer className="w-full bg-bg-color-two font-text">
      <FooterSocials />

      <div className="flex flex-col justify-between">
        <Container>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-12 gap-5 place-content-center pb-10">
            <FooterBrand />

            <FooterColumn
              title="Menu"
              isDesktop={isDesktop}
              open={menuOpen}
              setOpen={setMenuOpen}
              links={[
                { href: "/home", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "/foods", label: "Foods" },
                { href: "/pets", label: "Pets" },
                { href: "/categories", label: "Categories" },
                { href: "/accessories", label: "Accessories" },
              ]}
            />

            <FooterColumn
              title="Quick Access"
              isDesktop={isDesktop}
              open={quickAccessOpen}
              setOpen={setQuickAccessOpen}
              links={[
                { href: "/dogs-food", label: "Dog's food" },
                { href: "/cats-food", label: "Cat's food" },
                { href: "/birds-food", label: "Bird's food" },
                { href: "/dogs-accessories", label: "Dog's accessories" },
                { href: "/cats-accessories", label: "Cat's accessories" },
                { href: "/birds-accessories", label: "Bird's accessories" },
              ]}
            />

            <FooterColumn
              title="Support"
              isDesktop={isDesktop}
              open={supportOpen}
              setOpen={setSupportOpen}
              links={[
                { href: "/contact", label: "Quality Assurance" },
                { href: "/contact", label: "Shipping Policy" },
                { href: "/contact", label: "Return Policy" },
                { href: "/contact", label: "Privacy Policy" },
                { href: "/faq", label: "FAQs" },
                { href: "/contact", label: "Contact Us" },
              ]}
            />
          </div>
        </Container>

        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
