
// import { LucideIcon } from "lucide-react";
// import { ElementType } from "react";
// import { IconType } from "react-icons";

// export interface SidebarItem {
//   id: string;
//   label: string;
//   icon?: LucideIcon | IconType | ElementType;
//   badge?: number | string;
//   disabled?: boolean;
//   onClick?: () => void;
//   href?: string;
// }

// export interface SidebarSection {
//   id?: string;
//   title?: string;
//   items: SidebarItem[];
//   collapsible?: boolean;
//   defaultCollapsed?: boolean;
// }

// export interface SidebarProps {
//   // Content
//   sections: SidebarSection[];
//   activeItemId: string;
//   hideOnDesktop?: boolean;
//   onItemClick: (itemId: string, item: SidebarItem) => void;
  
//   // User profile
//   user?: {
//     name: string;
//     role: string;
//     avatar: string;
//   };
//   showProfile?: boolean;
  
//   // Layout control
//   className?: string;
//   header?: React.ReactNode;
//   footer?: React.ReactNode;
//   variant?: "default" | "compact" | "floating";
//   showActiveIndicator?: boolean;
  
//   // Responsive control
//   isDesktopSidebarOpen?: boolean;
//   onDesktopSidebarToggle?: (isOpen: boolean) => void;
//   defaultDesktopOpen?: boolean;
  
//   // Mobile specific
//   mobileBreakpoint?: number;
// }

// export interface MobileSidebarControls {
//   isOpen: boolean;
//   onOpen: () => void;
//   onClose: () => void;
//   onToggle: () => void;
// }

// @/types/sidebar.ts
import { ReactElement, MouseEvent } from "react";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ElementType;
  href?: string;
  badge?: number | string;
  disabled?: boolean;
  /** NEW – recursive sub-menu items */
  subItems?: SidebarItem[];
  /** Optional click handler (used for logout, etc.) */
  onClick?: (e: MouseEvent) => void;
}

export interface SidebarSection {
  id?: string;
  title?: string;
  items: SidebarItem[];
}

export interface SidebarUser {
  name: string;
  avatar: string;
  role: string;
}

export interface MobileSidebarControls {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

/* Props for the Sidebar component */
export interface SidebarProps {
  sections: SidebarSection[];
  activeItemId: string;
  onItemClick: (id: string, item: SidebarItem) => void;
  user?: SidebarUser;
  showProfile?: boolean;
  className?: string;
  header?: ReactElement;
  variant?: "default" | "compact" | "floating";
  showActiveIndicator?: boolean;
  hideOnDesktop?: boolean;
  mobileBreakpoint?: number;
}