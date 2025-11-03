/* eslint-disable react/no-unescaped-entities */

// import React from "react";
// import Container from "../container/Container";
// import Image from "next/image";
// import Link from "next/link";
// import { IoCall } from "react-icons/io5";
// import { Mail } from "lucide-react";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import Button from "@/components/ui/button/Button";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-bg-color-two md:h-[439px] h-full z-1000  font-text">
//       <div className="flex justify-center -mt-5 mb-20  w-full px-4">
//         <div className="flex w-full max-w-md">
//           {/* Facebook Link */}
//           <Link
//             href="https://www.facebook.com/profile.php?id=100010808852858"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white border-2 border-[#FF6B35] rounded-l-xl py-2 px-3 sm:px-5 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700 flex-1 justify-center sm:justify-start"
//             aria-label="Facebook"
//           >
//             <span className="text-xs sm:text-sm font-medium">Facebook</span>
//             <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF6B35] flex items-center justify-center">
//               <FaFacebook className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//             </div>
//           </Link>
//           {/* Instagram Link */}
//           <Link
//             href="https://www.instagram.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white border-y-2 border-[#FF6B35] py-2 px-3 sm:px-5 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700 flex-1 justify-center sm:justify-start"
//             aria-label="Instagram"
//           >
//             <span className="text-xs sm:text-sm font-medium">Instagram</span>
//             <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF6B35] flex items-center justify-center">
//               <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//             </div>
//           </Link>
//           {/* LinkedIn Link */}
//           <Link
//             href="https://www.linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white border-2 border-[#FF6B35] rounded-r-xl py-2 px-3 sm:px-5 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700 flex-1 justify-center sm:justify-start"
//             aria-label="LinkedIn"
//           >
//             <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
//             <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF6B35] flex items-center justify-center">
//               <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//             </div>
//           </Link>
//         </div>
//       </div>

//       <Container>
//         <div className="grid md:grid-cols-4 grid-cols-1 gap-12 place-content-center ">
//           {/* Column 1 - Brand */}
//           <div className="flex flex-col  h-[235px] ">
//             <div className="flex items-center gap-2 mb-5">
//               <div className="relative ">
//                 <Image
//                   src="/img/logo/Logo.png"
//                   width={177}
//                   height={48}
//                   alt="Pet Shop Logo"
//                   className="object-contain w-[177px] h-12"
//                   //   priority
//                 />
//               </div>
//             </div>
//             <p className="text-sm text-gray-600 mb-5 leading-4 max-w-[331px] ">
//               Your premier source for pet food, accessories, and expert
//               consultations in Bangladesh.
//             </p>
//             <div className="space-y-5">
//               <Button
//                 variant="primary-outline"
//                 icon={<IoCall className="w-4 h-4" />}
//                 className="w-[239px] flex justiy-between h-12 pr-2 text-sm font-light!"
//                 iconPosition="left"
//               >
//                 +1 (310) 000-0000
//               </Button>
//               <Button
//                 variant="primary-outline"
//                 icon={<Mail className="w-4 h-4" />}
//                 className="h-12 flex justify-etween w-[203px]! text-sm font-light! pr-2"
//                 iconPosition="left"
//               >
//                 info@demo.com
//               </Button>
//             </div>
//           </div>

//           {/* Column 2 - Menu */}
//           <div>
//             <h3 className="text-base font-semibold text-gray-800 mb-5 border-b border-gray-300 pb-2">
//               Menu
//             </h3>
//             <div className="flex gap-12">
//               <ul className="space-y-2.5">
//                 <li>
//                   <Link
//                     href="/home"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/shop"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Shop
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/foods"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Foods
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/pets"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Pets
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/categories"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Categories
//                   </Link>
//                 </li>
//               </ul>
//               <ul className="space-y-2.5">
//                 <li>
//                   <Link
//                     href="/accessories"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Accessories
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/page"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Page
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/blogs"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Blogs
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Column 3 - Quick Access */}
//           <div>
//             <h3 className="text-base font-semibold text-gray-800 mb-5 border-b border-gray-300 pb-2">
//               Quick Access
//             </h3>
//             <div className="flex gap-8">
//               <ul className="space-y-2.5">
//                 <li>
//                   <Link
//                     href="/dogs-food"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Dog's food
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/cats-food"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Cat's food
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/birds-food"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Bird's food
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/dogs-accessories"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Dog's accessories
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/cats-accessories"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Cat's accessories
//                   </Link>
//                 </li>
//               </ul>
//               <ul className="space-y-2.5">
//                 <li>
//                   <Link
//                     href="/birds-accessories"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Bird's accessories
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/nearby-veterinarians"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Nearby Veterinarians
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Column 4 - Support */}
//           <div>
//             <h3 className="text-base font-semibold text-gray-800 mb-5 border-b border-gray-300 pb-2">
//               Support
//             </h3>
//             <div className="flex gap-8">
//               <ul className="space-y-2.5">
//                 <li>
//                   <Link
//                     href="/quality-assurance"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Quality Assurance
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/shipping-policy"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Shipping Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/return-policy"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Return Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/privacy-policy"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/faqs"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     FAQs
//                   </Link>
//                 </li>
//               </ul>
//               <ul className="space-y-2.5">
//                 <li>
//                   <Link
//                     href="/contact-us"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/support"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     24/7 Online Support
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/live-chat"
//                     className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
//                   >
//                     Live Chat
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React, { useState, useEffect } from "react";
import Container from "../container/Container";
import Image from "next/image";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { Mail, Plus, Minus } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "@/components/ui/button/Button";
import Title from "@/components/ui/title/Title";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
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
    <footer className="w-full bg-bg-color-two md:h-[439px] h-full z-1000 font-text">
      <div className="flex justify-center -mt-5 mb-20 w-full px-4">
        <div className="flex w-full max-w-md">
          {/* Facebook Link */}
          <Link
            href="https://www.facebook.com/profile.php?id=100010808852858"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-[#FF6B35] rounded-l-xl py-2 px-3 sm:px-5 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700 flex-1 justify-center sm:justify-start"
            aria-label="Facebook"
          >
            <span className="text-xs sm:text-sm font-medium">Facebook</span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF6B35] flex items-center justify-center">
              <FaFacebook className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </Link>
          {/* Instagram Link */}
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-y-2 border-[#FF6B35] py-2 px-3 sm:px-5 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700 flex-1 justify-center sm:justify-start"
            aria-label="Instagram"
          >
            <span className="text-xs sm:text-sm font-medium">Instagram</span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF6B35] flex items-center justify-center">
              <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </Link>
          {/* LinkedIn Link */}
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-[#FF6B35] rounded-r-xl py-2 px-3 sm:px-5 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700 flex-1 justify-center sm:justify-start"
            aria-label="LinkedIn"
          >
            <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF6B35] flex items-center justify-center">
              <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </Link>
        </div>
      </div>

      <Container>
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-12 gap-5 place-content-center">
          {/* Column 1 - Brand */}
          <div className="flex flex-col md:h-[235px] h-full">
            <div className="flex items-center gap-2 mb-5">
              <div className="relative">
                <Image
                  src="/img/logo/Logo.png"
                  width={177}
                  height={48}
                  alt="Pet Shop Logo"
                  className="object-contain w-[177px] h-12"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-5 leading-4 max-w-[331px]">
              Your premier source for pet food, accessories, and expert
              consultations in Bangladesh.
            </p>
            <div className="space-y-5">
              <Button
                variant="primary-outline"
                icon={<IoCall className="w-4 h-4" />}
                className="w-[239px] flex justify-between h-12 pr-2 text-sm font-light"
                iconPosition="left"
              >
                +1 (310) 000-0000
              </Button>
              <Button
                variant="primary-outline"
                icon={<Mail className="w-4 h-4" />}
                className="h-12 flex justify-between w-[203px] text-sm font-light pr-2"
                iconPosition="left"
              >
                info@demo.com
              </Button>
            </div>
          </div>

          {/* Column 2 - Menu */}
          <div>
            <h3
              className={`text-base font-semibold text-gray-800  border-b border-gray-300 pb-2 flex justify-between items-center ${
                !isDesktop ? "cursor-pointer" : ""
              }`}
              onClick={() => !isDesktop && setMenuOpen(!menuOpen)}
            >
              Menu
              {!isDesktop &&
                (menuOpen ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                ))}
            </h3>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isDesktop || menuOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="flex gap-12">
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/home"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/foods"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Foods
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pets"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Pets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Categories
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/accessories"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/page"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3 - Quick Access */}
          <div>
            <h3
              className={`text-base font-semibold text-gray-800  border-b border-gray-300 pb-2 flex justify-between items-center ${
                !isDesktop ? "cursor-pointer" : ""
              }`}
              onClick={() => !isDesktop && setQuickAccessOpen(!quickAccessOpen)}
            >
              Quick Access
              {!isDesktop &&
                (quickAccessOpen ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                ))}
            </h3>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isDesktop || quickAccessOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="flex gap-8">
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/dogs-food"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Dog's food
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cats-food"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Cat's food
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/birds-food"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Bird's food
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dogs-accessories"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Dog's accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cats-accessories"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Cat's accessories
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/birds-accessories"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Bird's accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nearby-veterinarians"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Nearby Veterinarians
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h3
              className={`text-base font-semibold text-gray-800  border-b border-gray-300 pb-2 flex justify-between items-center ${
                !isDesktop ? "cursor-pointer" : ""
              }`}
              onClick={() => !isDesktop && setSupportOpen(!supportOpen)}
            >
              Support
              {!isDesktop &&
                (supportOpen ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                ))}
            </h3>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isDesktop || supportOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="flex gap-8">
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/quality-assurance"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Quality Assurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shipping-policy"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Shipping Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/return-policy"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Return Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      24/7 Online Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/live-chat"
                      className="text-sm text-gray-600 hover:text-[#FF6B35] transition-colors"
                    >
                      Live Chat
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Title size="sm" className="p-2">
          @Copyright 2025 by
          <span className="text-primary">Trilogysoft</span>
        </Title>
      </Container>
    </footer>
  );
};

export default Footer;
