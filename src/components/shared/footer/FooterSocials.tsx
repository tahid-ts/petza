"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterSocials = () => {
  return (
    <div className="flex justify-center -mt-5 mb-20 w-full lg:px-4">
      <div className="flex w-full md:max-w-md max-w-full">
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border-2 border-primary rounded-l-xl py-2 px-3 sm:px-5 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700 flex-1 justify-center sm:justify-start"
        >
          <span className="text-xs sm:text-sm font-medium">Facebook</span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center">
            <FaFacebook className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
        </Link>

        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border-y-2 border-primary py-2 px-3 sm:px-5 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700 flex-1 justify-center sm:justify-start"
        >
          <span className="text-xs sm:text-sm font-medium">Instagram</span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center">
            <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
        </Link>

        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border-2 border-primary rounded-r-xl py-2 px-3 sm:px-5 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700 flex-1 justify-center sm:justify-start"
        >
          <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center">
            <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FooterSocials;
