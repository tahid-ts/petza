import { SidebarSection } from "@/types/sidebar";
import { ContactRound, Home, PackageIcon, ShoppingCart, StickyNote } from "lucide-react";
import { BiCategory } from "react-icons/bi";
import { UserType } from "@/components/shared/Header/Header";
import { NavbarSection } from "@/components/shared/Header/navbar/Navbar";
import { Testimonial } from "@/components/shared/slider/TestimonialSwiper";

export interface NavigationConfig {
  sidebar: SidebarSection[];
  navbar: NavbarSection[]; 
  role: string;
}



const guestMenuItems = [
  {
    id: "guest-nav",
    items: [
      { id: "home", label: "Home", icon: Home, href: "/" },
      { id: "categories", label: "Categories", icon: BiCategory, href: "/categories" },

      {
        id: "shop",
        label: "Shop",
        icon: ShoppingCart,
        subItems: [
          { id: "shop", href: "/shop", label: "Shop" },
          { id: "product-details", href: "/product-details/1", label: "Shop Details" },
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
            href: "/blog-details/10-superfoods-you-should-be-eating-every-day",
            label: "Blog-details",
          },
          { id: "faq", href: "/faq", label: "Faq" },
          { id: "account-setting", href: "/account-setting", label: "Account Settings" },
         
          { id: "sign-in", href: "/sign-in", label: "Sign In" },
          { id: "sign-up", href: "/sign-up", label: "Sign Up" },
        ],
      },

      { id: "blog", icon: StickyNote, href: "/blog", label: "Blogs" },
      { id: "contactus", href: "/contact", icon: ContactRound, label: "Contact Us" },
    ],
  },
];



export const navigationConfig: Record<UserType, NavigationConfig> = {
  guest: {
    sidebar: guestMenuItems,
    navbar: guestMenuItems, 
    role: "Guest",
  },
};

export const ReviewData: Testimonial[] = [
  {
    id: 1,
    name: "Ashlynn Rhiel Madsen",
    company: "Pet Owner & Blogger",
    image: "/img/review/Avatar1.png",
    desc: "PawCart made shopping for my furry friend a breeze! The wide range of high-quality pet products and fast delivery exceeded my expectations. My dog loves the treats I ordered, and I appreciate the excellent customer service. Highly recommend PawCart to all pet parents!",
  },
  {
    id: 2,
    name: "Livia Philips",
    company: "Cat Enthusiast",
    image: "/img/review/Avatar2.png",
    desc: "As a proud cat mom, I’m always on the lookout for the best products for my feline companion. PawCart’s selection of toys, food, and accessories is unmatched. The website is user-friendly, and the prices are competitive. My cat can’t get enough of the new scratching post I bought—thank you, PawCart!",
  },
  {
    id: 3,
    name: "Erin Wervelt",
    company: "Dog Trainer",
    image: "/img/review/Avatar3.png",
    desc: "I’ve been using PawCart for all my training supplies, and I couldn’t be happier. The durability of the products and the variety of options available make it my go-to store. The team at PawCart clearly understands the needs of both pets and their owners. Five stars all the way!",
  },
  {
    id: 4,
    name: "Marcus Lee",
    company: "Small Animal Lover",
    image: "/img/review/Avatar1.png",
    desc: "PawCart is a lifesaver for my rabbit’s needs! From cozy bedding to nutritious food, everything I’ve ordered has been top-notch. The packaging is always secure, and the delivery is prompt. It’s rare to find a store that caters so well to small animals—PawCart is a gem!",
  },
];
