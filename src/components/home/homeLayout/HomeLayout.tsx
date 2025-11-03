// "use client";
// import Footer from "@/components/shared/footer/Footer";
// import Navbar from "@/components/shared/navbar/Navbar";
// import NavbarSlider from "@/components/shared/navbar/NavbarSlider";
// import Sidebar from "@/components/shared/sidebar/sidebar";
// import { SidebarSection } from "@/types/sidebar";
// import {
//   Bell,
//   CreditCard,
//   Home,
//   LogOut,
//   Shield,
//   User,
//   Mail,
//   Settings,
// } from "lucide-react";
// import React, { useState } from "react";
// import { GrDashboard } from "react-icons/gr";

// export interface HomeLayoutProps {
//   children: React.ReactNode;
//   userType?: UserType;
// }

// export type UserType = "admin" | "guest";

// interface LayoutConfig {
//   sidebar: SidebarSection[];
//   navbar: { href: string; label: string; bold?: boolean }[];
//   role: string;
// }

// const layoutConfig: Record<UserType, LayoutConfig> = {
//   admin: {
//     sidebar: [
//       {
//         id: "navigation",
//         items: [
//           { id: "home", label: "Home", icon: Home, href: "/home" },
//           {
//             id: "dashboard",
//             label: "Dashboard",
//             icon: GrDashboard,
//             href: "/dashboard",
//           },
//         ],
//       },
//       {
//         id: "management",
//         title: "MANAGEMENT",
//         items: [
//           {
//             id: "users",
//             label: "Manage Users",
//             icon: User,
//             href: "/admin/users",
//           },
//           {
//             id: "reports",
//             label: "Reports",
//             icon: CreditCard,
//             href: "/admin/reports",
//           },
//         ],
//       },
//       {
//         id: "system",
//         title: "SYSTEM",
//         items: [
//           {
//             id: "security",
//             label: "Security",
//             icon: Shield,
//             href: "/admin/security",
//           },
//           {
//             id: "notifications",
//             label: "Notifications",
//             icon: Bell,
//             href: "/admin/notifications",
//             badge: 3,
//           },
//         ],
//       },
//       {
//         id: "account",
//         items: [
//           {
//             id: "logout",
//             label: "Logout",
//             icon: LogOut,
//             onClick: () => {
//               console.log("Logging out...");
//             },
//           },
//         ],
//       },
//     ],
//     navbar: [
//       { href: "/home", label: "হোম", bold: false },
//       { href: "/home/category", label: "কর্মী বিভাগ", bold: false },
//       { href: "/home/blog", label: "ব্লগ", bold: false },
//       { href: "/home/faqContuctUs", label: "যোগাযোগ", bold: false },
//     ],
//     role: "Admin",
//   },
//   guest: {
//     sidebar: [
//       {
//         id: "guest-nav",
//         items: [
//           { id: "home", label: "হোম", icon: Home, href: "/home" },
//           {
//             id: "category",
//             label: "কর্মী বিভাগ",
//             icon: User,
//             href: "/home/category",
//           },
//           { id: "blog", label: "ব্লগ", icon: Mail, href: "/home/blog" },
//           {
//             id: "contact",
//             label: "যোগাযোগ",
//             icon: Settings,
//             href: "/home/faqContuctUs",
//           },
//         ],
//       },
//     ],
//     navbar: [
//       { href: "/home", label: "হোম", bold: true },
//       { href: "/home/category", label: "কর্মী বিভাগ", bold: false },
//       { href: "/home/blog", label: "ব্লগ", bold: true },
//       { href: "/home/faqContuctUs", label: "যোগাযোগ", bold: true },
//     ],
//     role: "Guest",
//   },
// };

// const HomeLayout: React.FC<HomeLayoutProps> = ({
//   children,
//   userType = "guest",
// }) => {
//   const [activeItem, setActiveItem] = useState("dashboard");
//   const config = layoutConfig[userType]; // Use userType to select config

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header with NavbarSlider and Navbar */}
//       <div className="bg-primary z-50">
//         <NavbarSlider />
//       </div>
//       <Navbar />

//       {/* Main layout with Sidebar and Content side by side */}
//       <div className="">
//         <div className="md:hidden block">
//           <Sidebar
//             sections={config.sidebar}
//             activeItemId={activeItem}
//             onItemClick={(itemId, item) => {
//               setActiveItem(itemId);
//               if (item.onClick) {
//                 item.onClick();
//               }
//             }}
//             showProfile={true}
//             variant="default"
//             hideOnDesktop={false}
//           />
//         </div>

//         {/* Main Content */}
//         <main className="flex-1">{children}</main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default HomeLayout;

"use client";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import NavbarSlider from "@/components/shared/navbar/NavbarSlider";
import Sidebar from "@/components/shared/sidebar/sidebar";
import { SidebarSection } from "@/types/sidebar";
import {
  ContactRound,
  Home,
  PackageIcon,
  ShoppingCart,
  StickyNote,
} from "lucide-react";
import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";

export interface HomeLayoutProps {
  children: React.ReactNode;
  userType?: UserType;
}

export type UserType = "guest";

interface LayoutConfig {
  sidebar: SidebarSection[];
  navbar?: { href: string; label: string; bold?: boolean }[];
  role: string;
}

const layoutConfig: Record<UserType, LayoutConfig> = {
  guest: {
    sidebar: [
      {
        id: "guest-nav",
        items: [
          {
            id: "home",
            label: "Home",
            icon: Home,
            href: "/",
          },
          {
            id: "categories",
            label: "Categories",
            icon: BiCategory,
            href: "/categories",
          },
          {
            id: "shop",
            label: "Shop",
            icon: ShoppingCart,
            subItems: [
              { id: "shop", href: "/shop", label: "Shop" },
              {
                id: "product-details",
                href: "/product-details/1",
                label: "Shop Details",
              },
              { id: "cart", href: "/cart", label: "Cart" },
              { id: "checkout", href: "/checkout", label: "Check Out" },
            ],
          },
          {
            id: "page",
            label: "Page",
            icon: PackageIcon,
            subItems: [
              {
                id: "blog-details",
                href: "blog-details/10-superfoods-you-should-be-eating-every-day",
                label: "Blog-details",
              },
              { id: "faq", href: "/faq", label: "Faq" },
              {
                id: "account-setting",
                href: "/account-setting",
                label: "Account Settings",
              },
              { id: "order-list", href: "/order-list", label: "Order List" },
              { id: "sign-in", href: "/sign-in", label: "Sign In" },
              { id: "sign-up", href: "/sign-up", label: "Sign Up" },
            ],
          },
          { id: "blog", icon: StickyNote, href: "/blog", label: "Blogs" },
          {
            id: "contactus",
            href: "/contact",
            icon: ContactRound,
            label: "Contact Us",
          },
        ],
      },
    ],
    navbar: [],
    role: "Guest",
  },
};

const HomeLayout: React.FC<HomeLayoutProps> = ({
  children,
  userType = "guest",
}) => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const config = layoutConfig[userType];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-primary z-50">
        <NavbarSlider />
      </div>
      <Navbar />
      <div className=" md:hidden block">
        <Sidebar
          sections={config.sidebar}
          activeItemId={activeItem}
          onItemClick={(itemId, item) => {
            setActiveItem(itemId);
            if (item.onClick) {
              item.onClick?.(
                undefined as unknown as React.MouseEvent<Element, MouseEvent>
              );
            }
          }}
          showProfile={false}
          variant="default"
          hideOnDesktop={true}
        />
      </div>
      <main>{children}</main>
      {/* <main className="flex-1">{children}</main> */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
