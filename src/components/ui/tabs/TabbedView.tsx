/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { StarIcon } from "lucide-react";
import React, { useState, useEffect, ReactNode } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Decoration from "../decoration/Decoration";
import ScrollAnimator from "@/components/shared/animation/scrollAnimation/ScrollAnimator";

export interface TabItem {
  id: number;
  title: string;
  component: React.ReactNode;
}

interface TabbedViewProps {
  tabs: TabItem[];
  variant?: "page" | "card";
  className?: string;
  tabPanelClass?: string;
  showId?: boolean;
  rightElement?: ReactNode;
  tabPosition?: "left" | "center" | "right";
}

const TabbedView: React.FC<TabbedViewProps> = ({
  tabs,
  variant = "page",
  className = "",
  tabPanelClass = "",
  rightElement,
  showId = variant === "card",
  tabPosition = "left",
}) => {
  const isCard = variant === "card";
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => setAnimating(false), 250);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const tabClasses = (selected: boolean) =>
    isCard
      ? `px-4 py-2 rounded-md! cursor-pointer font-medium transition-all duration-200 ${
          selected
            ? "bg-primary! cursor-pointer text-white! border border-primary!"
            : "text-gray-700 border border-primary"
        }`
      : `px-4 pb-5 cursor-pointer pt-3 transition-colors duration-200 relative text-2xl font-bold font-title ${
          selected
            ? "font-bold cursor-pointer bg-transparent! focus:ring-0! focus:border-t-none! text-dark outline-none hover:text-primary!"
            : "text-gray-500 cursor-pointer hover:text-primary!"
        }`;
  const getTabsContainerJustifyClass = () => {
    switch (tabPosition) {
      case "center":
        return "justify-center";
      case "right":
        return "md:justify-end justify-center";
      default:
        return "md:justify-start justify-center";
    }
  };

  return (
    <Tabs
      selectedIndex={activeIndex}
      onSelect={(index) => setActiveIndex(index)}
      className={`${className} ${isCard ? "" : "pr-0"}`}
    >
      <ScrollAnimator
        effect="blurIn"
        className="overflow-hidden"
        repeatOnScroll
        duration={1.5}
      >
        <TabList
          className={`flex lg:flex-row flex-col md:gap-6 gap-4 justify-between  border-b outline-none ring-0 mb-8 ${
            isCard ? "pb-5 border-primary/35 z-10" : "border-gray-200"
          }`}
        >
          <div
            className={`flex flex-wrap md:gap-6 gap-4 ${getTabsContainerJustifyClass()} grow`}
          >
            {tabs.map(({ id, title }, index) => (
              <Tab
                key={id}
                className={tabClasses(index === activeIndex)}
                style={
                  index === activeIndex
                    ? {
                        borderBottom: "2px solid #FF6B35",
                        marginBottom: "-2px",
                        position: "relative",
                      }
                    : {}
                }
              >
                <div className="flex items-center cursor-pointer text-lg  font-bold w-full">
                  {showId && isCard && <span className="mr-1">{id}.</span>}
                  <span>{title}</span>
                </div>
                {!isCard && index === activeIndex && (
                  <Decoration
                    className="-mb-1.5"
                    preset="bottomCenter"
                    opacity="full"
                    responsive="always-visible"
                  >
                    <StarIcon className="h-3 w-3 fill-primary text-primary  rotate-45" />
                  </Decoration>
                )}
              </Tab>
            ))}
          </div>

          {rightElement && (
            <div className="flex items-center md:text-base text-sm">
              {rightElement}
            </div>
          )}
        </TabList>
      </ScrollAnimator>
      {/* === Tab Panels === */}
      <div className={` ${tabPanelClass}`} style={{ minHeight: "100px" }}>
        {tabs.map(({ id, component }, index) => (
          <TabPanel
            key={id}
            className={`w-full transition-all duration-250 transform
              ${
                index === activeIndex
                  ? `opacity-100 translate-y-0 z-10`
                  : `opacity-0 translate-y-3 z-0 pointer-events-none`
              }`}
          >
            {component}
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default TabbedView;
