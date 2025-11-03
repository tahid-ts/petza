"use client";

import React from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

interface FooterColumnProps {
  title: string;
  isDesktop: boolean;
  open: boolean;
  setOpen: (value: boolean) => void;
  links: { href: string; label: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  isDesktop,
  open,
  setOpen,
  links,
}) => (
  <div>
    <h3
      className={`text-base font-semibold text-gray-800 border-b border-primary pb-2 flex justify-between items-center ${
        !isDesktop ? "cursor-pointer" : ""
      }`}
      onClick={() => !isDesktop && setOpen(!open)}
    >
      {title}
      {!isDesktop &&
        (open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />)}
    </h3>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isDesktop || open ? "max-h-[500px]" : "max-h-0"
      }`}
    >
      <ul className="space-y-2.5 mt-2">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FooterColumn;
