"use client";

import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import NavbarSlider from "./navbar/NavbarSlider";
import Sidebar from "./sidebar/sidebar";
import { navigationConfig } from "@/data";

export type UserType = "guest";

interface HeaderProps {
  userType?: UserType;
}

const Header: React.FC<HeaderProps> = ({ userType = "guest" }) => {
  const [activeItem, setActiveItem] = useState("home");
  const config = navigationConfig[userType];

  return (
    <div>
      <div className="bg-primary z-50">
        <NavbarSlider />
      </div>
      <Navbar sections={config.navbar} />

      <div className="md:hidden block">
        <Sidebar
          sections={config.sidebar}
          activeItemId={activeItem}
          onItemClick={(itemId, item) => {
            setActiveItem(itemId);
            item.onClick?.(
              undefined as unknown as React.MouseEvent<Element, MouseEvent>
            );
          }}
          showProfile={false}
          variant="default"
          hideOnDesktop={true}
        />
      </div>
    </div>
  );
};

export default Header;
