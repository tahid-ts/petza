"use client";

import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "primary"
    | "full";
  padding?: string;
  className?: string;
  mainClassName?: string;
}

const maxWidthMap: Record<NonNullable<ContainerProps["maxWidth"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  primary: "max-w-[1400px]",
  full: "max-w-full",
};

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "primary",
  padding = "",
  className = "",
  mainClassName = "",
}) => {
  const resolvedMaxWidth = maxWidthMap[maxWidth];

  return (
    <div className={`${mainClassName} w-full`}>
      <div className={`${resolvedMaxWidth} mx-auto ${padding} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
