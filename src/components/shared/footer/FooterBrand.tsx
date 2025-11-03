"use client";

import React from "react";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { Mail } from "lucide-react";
import Button from "@/components/ui/button/Button";

const FooterBrand = () => {
  return (
    <div className="flex flex-col md:h-[235px] h-full">
      <div className="flex items-center gap-2 mb-5">
        <Image
          src="/img/logo/Logo.png"
          width={177}
          height={48}
          alt="Pet Shop Logo"
          className="object-contain w-[177px] h-12"
        />
      </div>
      <p className="text-sm text-gray-600 mb-5 leading-4 max-w-[331px]">
        Your premier source for pet food, accessories, and expert consultations
        in Bangladesh.
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
  );
};

export default FooterBrand;
