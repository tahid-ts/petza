/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdClose, MdExpandMore } from "react-icons/md";

import {
  MobileSidebarControls,
  SidebarItem,
  SidebarProps,
  SidebarSection,
} from "@/types/sidebar";
import { Menu } from "lucide-react";

// Add this interface for submenu state
interface SubmenuState {
  isOpen: boolean;
  isAnimating: boolean;
  height: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeItemId,
  onItemClick,
  user,
  showProfile = true,
  className = "",
  header,
  variant = "default",
  showActiveIndicator = true,
  hideOnDesktop = false,
  mobileBreakpoint = 768,
}) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const [submenuStates, setSubmenuStates] = useState<Map<string, SubmenuState>>(
    new Map()
  );
  const submenuRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Detect mobile/desktop with proper initialization
  useEffect(() => {
    const checkMobile = () => {
      return window.innerWidth < mobileBreakpoint;
    };

    const handleResize = () => {
      const mobile = checkMobile();
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileOpen(false);
      }
    };

    // Set initial state
    setIsMobile(checkMobile());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint]);

  const mobileControls: MobileSidebarControls = {
    isOpen: isMobileOpen,
    onOpen: () => setIsMobileOpen(true),
    onClose: () => setIsMobileOpen(false),
    onToggle: () => setIsMobileOpen((prev) => !prev),
  };

  useEffect(() => {
    if (!isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) mobileControls.onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        mobileControls.onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileOpen, isMobile]);

  // Initialize submenu states
  useEffect(() => {
    const newStates = new Map<string, SubmenuState>();

    const initializeStates = (items: SidebarItem[]) => {
      items.forEach((item) => {
        if (item.subItems?.length) {
          newStates.set(item.id, {
            isOpen: openSubmenus.has(item.id),
            isAnimating: false,
            height: 0,
          });
          // Recursively initialize nested submenus
          initializeStates(item.subItems);
        }
      });
    };

    sections.forEach((section) => initializeStates(section.items));
    setSubmenuStates(newStates);
  }, [sections]);

  // Measure submenu heights when they open/close
  useEffect(() => {
    const updateSubmenuHeights = () => {
      setSubmenuStates((prev) => {
        const newStates = new Map(prev);

        openSubmenus.forEach((itemId) => {
          const submenuElement = submenuRefs.current.get(itemId);
          if (submenuElement) {
            const state = newStates.get(itemId);
            if (state) {
              newStates.set(itemId, {
                ...state,
                height: submenuElement.scrollHeight,
                isOpen: true,
              });
            }
          }
        });

        // Reset heights for closed submenus
        prev.forEach((state, itemId) => {
          if (!openSubmenus.has(itemId) && state.isOpen) {
            newStates.set(itemId, {
              ...state,
              isOpen: false,
              height: 0,
            });
          }
        });

        return newStates;
      });
    };

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(updateSubmenuHeights);
  }, [openSubmenus]);

  const toggleSubmenu = async (itemId: string) => {
    // Set animating state
    setSubmenuStates((prev) => {
      const newStates = new Map(prev);
      const state = newStates.get(itemId);
      if (state) {
        newStates.set(itemId, {
          ...state,
          isAnimating: true,
        });
      }
      return newStates;
    });

    // Toggle open state
    setOpenSubmenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });

    // Clear animating state after transition
    setTimeout(() => {
      setSubmenuStates((prev) => {
        const newStates = new Map(prev);
        const state = newStates.get(itemId);
        if (state) {
          newStates.set(itemId, {
            ...state,
            isAnimating: false,
          });
        }
        return newStates;
      });
    }, 300); // Match this with CSS transition duration
  };

  // Style presets
  const styleConfig = {
    default: {
      container: "bg-white rounded-2xl ",
      item: "px-4 py-3",
      iconSize: 18,
      width: "w-64",
    },
    compact: {
      container: "bg-white rounded-lg ",
      item: "px-3 py-2",
      iconSize: 16,
      width: "w-48",
    },
    floating: {
      container: "bg-white rounded-2xl shadow-lg border border-gray-200",
      item: "px-4 py-3",
      iconSize: 18,
      width: "w-64",
    },
  };

  const config = styleConfig[variant];

  const getItemStyles = (item: SidebarItem) => {
    if (item.disabled) {
      return `flex items-center bg-red-500 w-full text-sm rounded-md ${config.item} text-gray-400 cursor-not-allowed opacity-60`;
    }
    const isActive = activeItemId === item.id;
    const activeStyles = showActiveIndicator
      ? "bg-green-50 text-green-700 font-medium border-l-2 border-l-green-500"
      : "bg-gray-100 text-gray-900 font-medium";
    return `flex  items-center w-full text-sm rounded-md transition-all duration-200 ${
      config.item
    } ${
      isActive
        ? activeStyles
        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    }`;
  };

  const renderIcon = (
    IconComponent: React.ElementType | undefined,
    size?: number
  ) =>
    IconComponent ? (
      <IconComponent
        size={size || config.iconSize}
        className="shrink-0 text-primary"
      />
    ) : null;

  const renderBadge = (badge?: number | string) =>
    badge || badge === 0 ? (
      <span className="ml-auto bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium min-w-5 text-center">
        {badge}
      </span>
    ) : null;

  type SidebarItemWithChildren = SidebarItem & { subItems?: SidebarItem[] };

  const renderItems = (items: SidebarItemWithChildren[], depth: number = 0) =>
    items.map((item) => {
      const hasSubItems = !!item.subItems?.length;
      const isOpen = openSubmenus.has(item.id);
      const submenuState = submenuStates.get(item.id);
      const itemStyles = getItemStyles(item);
      const indent = depth > 0 ? "pl-6" : "";

      const content = (
        <div
          className={`flex items-center justify-between font-semibold text-dark  w-full ${indent}`}
        >
          <div className="flex items-center ">
            {item.icon && <span className="mr-3">{renderIcon(item.icon)}</span>}
            <span className=" truncate ">{item.label}</span>
            {renderBadge(item.badge)}
          </div>
          {hasSubItems && (
            <MdExpandMore
              size={config.iconSize}
              className={` transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              } ${submenuState?.isAnimating ? "transition-none" : ""}`}
            />
          )}
        </div>
      );

      if (hasSubItems) {
        return (
          <div key={item.id}>
            <button
              onClick={() => {
                if (!item.disabled) {
                  toggleSubmenu(item.id);
                }
              }}
              disabled={item.disabled}
              className={itemStyles}
              aria-expanded={isOpen}
              aria-controls={`submenu-${item.id}`}
              aria-busy={submenuState?.isAnimating}
            >
              {content}
            </button>

            {/* Improved Submenu with smooth transitions */}
            <div
              id={`submenu-${item.id}`}
              ref={(el) => {
                if (el) {
                  submenuRefs.current.set(item.id, el);
                } else {
                  submenuRefs.current.delete(item.id);
                }
              }}
              className="overflow-hidden  transition-all duration-300 ease-in-out"
              style={{
                height: submenuState?.height || 0,
                opacity: isOpen ? 1 : 0.8,
              }}
            >
              <div
                className={`transition-opacity duration-200 ease-in-out ${
                  isOpen ? "opacity-100 delay-100" : "opacity-0"
                }`}
              >
                <div className="mt-1 space-y-1">
                  {renderItems(item.subItems || [], depth + 1)}
                </div>
              </div>
            </div>
          </div>
        );
      }

      return item.href ? (
        <Link
          key={item.id}
          href={item.href}
          onClick={() => {
            onItemClick(item.id, item);
            if (isMobile) {
              mobileControls.onClose();
            }
          }}
          className={`${itemStyles} ${indent}`}
        >
          {content}
        </Link>
      ) : (
        <button
          key={item.id}
          onClick={() => {
            if (!item.disabled) {
              onItemClick(item.id, item);
              if (isMobile) {
                mobileControls.onClose();
              }
            }
          }}
          disabled={item.disabled}
          className={`${itemStyles} ${indent}`}
        >
          {content}
        </button>
      );
    });

  const renderSections = (sections: SidebarSection[]) =>
    sections.map((section, index) => (
      <div key={section.id || `section-${index}`}>
        {section.title && (
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-1">
            {section.title}
          </div>
        )}
        <div className="space-y-1">{renderItems(section.items)}</div>
      </div>
    ));

  const DesktopSidebar = (
    <aside
      className={`${config.width} ${config.container} ${className} flex flex-col h-full sticky top-0`}
    >
      {showProfile && user && (
        <div className="p-4 border-b border-gray-100 flex flex-col items-center gap-3 ">
          <Image
            src={user.avatar}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col min-w-0">
            <p className="font-medium text-gray-900 truncate">{user.name}</p>
            {/* Added role for consistency with mobile */}
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
        </div>
      )}
      <nav className="flex flex-col p-4 space-y-4 overflow-y-auto">
        {renderSections(sections)}
      </nav>
    </aside>
  );

  const MobileSidebar = (
    <>
      <div className="flex justify-between w-full items-center h-[79px] ">
        <Link href="/" className="shrink-0 lg:ml-0 ml-5">
          {/* <Image
            src="/img/logo/Logo.png"
            width={177}
            height={48}
            alt="Logo"
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
        <button
          onClick={mobileControls.onToggle}
          aria-label={isMobileOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={isMobileOpen}
          className="md:hidden z-1001 p-2 text-white font-extrabold transition transform-gpu"
        >
          {isMobileOpen ? (
            <MdClose
              size={30}
              className={`transform transition-transform ease-in-out -mt-[60px]  duration-700 text-black ${
                isMobileOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 -rotate-45"
              }`}
            />
          ) : (
            <Menu
              size={30}
              className={`transition-all duration-300 transform text-black ${
                isMobileOpen
                  ? "opacity-0 scale-75 rotate-45"
                  : "opacity-100 scale-100 rotate-0 "
              }`}
            />
          )}
        </button>
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden"
          onClick={mobileControls.onClose}
        />
      )}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-hidden={!isMobileOpen}
      >
        <div className="h-full flex flex-col">
          <div className="px-4 py-4 border-b border-gray-100">
            {header || (
              <Link href="/" className="flex items-center lg:ml-0 ml-5">
                <Image
                  src="/img/logo/Logo.png"
                  width={177}
                  height={48}
                  alt="Logo"
                  priority
                  className="w-auto h-auto object-contain"
                />
              </Link>
            )}
          </div>
          {showProfile && user && (
            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
              <Image
                src={user.avatar}
                alt={user.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>
          )}
          <nav className="flex flex-col p-4 space-y-6 overflow-y-auto">
            {renderSections(sections)}
          </nav>
        </div>
      </aside>
    </>
  );

  if (isMobile === null) {
    return null;
  }

  if (isMobile) {
    return MobileSidebar;
  } else {
    return hideOnDesktop ? null : DesktopSidebar;
  }
};

export default Sidebar;
