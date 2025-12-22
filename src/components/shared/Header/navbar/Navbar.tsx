/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "@/components/shared/container/Container";
import { UserType } from "@/types/user";
import { FaUser } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import ShoppingCart from "@/components/ui/dropdown/ShoppingCart";
import Dropdown, { DropdownItem } from "@/components/ui/dropdown/Dropdown";
import Button from "@/components/ui/button/Button";

// === TYPE DEFINITIONS ===
export interface NavbarItem {
  id: string;
  label: string;
  icon?: React.ElementType;
  href?: string;
  bold?: string;
  badge?: number | string;
  disabled?: boolean;
  subItems?: NavbarItem[];
  onClick?: (e: MouseEvent) => void;
}

export interface NavbarSection {
  id?: string;
  title?: string;
  items: NavbarItem[];
}

export interface NavbarProps {
  userType?: UserType;
  navItems?: NavbarItem[];
  sections?: NavbarSection[];
}

const Navbar: React.FC<NavbarProps> = ({
  userType = "guest",
  navItems,
  sections,
}) => {
  const links: NavbarItem[] = navItems ?? sections?.[0]?.items ?? [];

  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <header className="hidden md:block bg-white sticky z-50 shadow-sm font-text">
      <Container className="flex items-center justify-between py-4 lg:py-5 h-14 lg:h-20">
        {/* Logo */}
        <Link href="/" className="shrink-0 lg:ml-0 ml-5">
          {/* <Image
            src="/img/logo/Logo.png"
            alt="Logo"
            width={177}
            height={48}
            priority
            className="w-auto h-auto object-contain"
          /> */}
          <Image
            src="/img/logo/Logo.png"
            width={177}
            height={48}
            alt="Pet Shop Logo"
            priority
            className="object-contain"
            style={{ width: "177px", height: "48px" }}
          />
        </Link>

        {/* Navigation */}
        <nav
          className="hidden lg:flex flex-1 justify-center gap-4 font-title text-black"
          aria-label="Main navigation"
        >
          {links.map((item) => {
            const { label, bold, href, subItems } = item;

            if (subItems?.length) {
              const items: DropdownItem[] = subItems.map((item) => ({
                id: item.label,
                content: (
                  <Link
                    href={item.href!}
                    className="block px-4 py-2 text-black hover:bg-primary hover:text-white  text-[16px] font-title"
                  >
                    {item.label}
                  </Link>
                ),
              }));
              return (
                <Dropdown
                  key={label}
                  label={
                    <span
                      className={clsx(
                        "font-title py-0! my-0! text-[16px] text-black cursor-pointer transition-colors hover:text-primary border-none! group-hover:text-primary",
                        bold ? "font-bold" : "font-normal"
                      )}
                    >
                      {label}
                    </span>
                  }
                  menuItems={items}
                  labelClass="border-none! py-0! my-0! h-full"
                  position="bottom-center"
                  itemClassName=" hidden"
                  menuContainerClass="mt-7 p-0!"
                  contentClass="pb-0! px-0!"
                  triggerIconClass="group-hover:text-primary font-bold cursor-pointer"
                />
              );
            }
            return (
              <Link
                key={href}
                href={href!}
                className={clsx(
                  `font-title text-[16px] text-black transition-colors hover:text-primary`,
                  bold ? "font-bold" : "font-normal"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Icons */}
        <div className="hidden md:flex">
          <div className="flex items-center gap-2">
            {/* Animated Search */}
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out",
                visible
                  ? "max-w-[200px] opacity-100 scale-100 ml-2"
                  : "max-w-0 opacity-0 scale-95"
              )}
            >
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-full text-dark font-input"
              />
            </div>

            {/* Search Icon Button */}
            <Button
              variant="iconOnly"
              size="sm"
              className="rounded-full px-2"
              icon={
                visible ? <RxCross2 size={20} /> : <MdOutlineSearch size={20} />
              }
              onClick={() => setVisible(!visible)}
            />
          </div>

          {/* Profile */}
          <Button
            href="/sign-in"
            variant="iconOnly"
            className="rounded-full px-2"
            icon={<FaUser size={20} />}
          />

          {/* Cart */}
          <ShoppingCart />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
