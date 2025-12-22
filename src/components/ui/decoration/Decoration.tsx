"use client";

import Image from "next/image";
import React, { ReactNode } from "react";

type PositionPreset =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "center"
  | "leftCenter"
  | "rightCenter"
  | "topCenter"
  | "bottomCenter"
  | "fullTop"
  | "fullCenter"
  | "fullBottom"
  | "fullLeft"
  | "fullRight"
  | "fullScreen"
  | "custom";

type Breakpoint = "default" | "sm" | "md" | "lg" | "xl" | "2xl";

type ResponsivePreset = Partial<
  Record<Breakpoint, Exclude<PositionPreset, "custom">>
>;

type ResponsiveBehavior =
  | "always-visible"
  | "hidden-on-mobile"
  | "hidden-on-tablet"
  | "hidden-on-large"
  | "visible-only-on-mobile"
  | "visible-only-on-tablet"
  | "visible-only-on-desktop"
  | "custom";

type OpacityLevel = "none" | "low" | "medium" | "high" | "full" | "custom";

interface DecorationProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  preset?: PositionPreset | ResponsivePreset;
  position?: string;
  transform?: string;
  style?: string;
  className?: string;
  children?: ReactNode;
  responsive?: ResponsiveBehavior;
  responsiveClasses?: string;
  opacity?: OpacityLevel;
  customOpacity?: string;
}

const positionPresets: Record<Exclude<PositionPreset, "custom">, string> = {
  topLeft: "top-0 left-0",
  topRight: "top-0 right-0",
  bottomLeft: "bottom-0 left-0",
  bottomRight: "bottom-0 right-0",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  leftCenter: "top-1/2 left-0 -translate-y-1/2 lg:left-4",
  rightCenter: "top-1/2 right-0 -translate-y-1/2 lg:right-4",
  topCenter: "top-0 left-1/2 -translate-x-1/2",
  bottomCenter: "bottom-0 left-1/2 -translate-x-1/2",
  fullTop: "top-0 left-0 right-0",
  fullCenter: "top-1/2 left-0 right-0 -translate-y-1/2",
  fullBottom: "bottom-0 left-0 right-0",
  fullLeft: "left-0 top-0 bottom-0",
  fullRight: "right-0 top-0 bottom-0",
  fullScreen: "top-0 left-0 right-0 bottom-0",
};

const responsiveBehaviors: Record<
  Exclude<ResponsiveBehavior, "custom">,
  string
> = {
  "always-visible": "block",
  "hidden-on-mobile": "hidden sm:block",
  "hidden-on-tablet": "hidden md:block",
  "hidden-on-large": "hidden lg:block",
  "visible-only-on-mobile": "block sm:hidden",
  "visible-only-on-tablet": "sm:block md:hidden",
  "visible-only-on-desktop": "md:block",
};

const opacityLevels: Record<Exclude<OpacityLevel, "custom">, string> = {
  none: "opacity-0",
  low: "opacity-20",
  medium: "opacity-50",
  high: "opacity-80",
  full: "opacity-100",
};

const Decoration: React.FC<DecorationProps> = ({
  src,
  alt = "Decoration",
  width = 400,
  height = 400,
  preset = "bottomLeft",
  position = "",
  transform = "",
  style = "z-0",
  className = "",
  children,
  responsive = "hidden-on-mobile",
  responsiveClasses = "",
  opacity = "high",
  customOpacity = "",
}) => {
  const resolvedPosition = (() => {
    if (typeof preset === "string") {
      if (preset === "custom") {
        return position;
      } else {
        return positionPresets[preset] || "";
      }
    } else {
      let classes = "";
      for (const [breakpoint, p] of Object.entries(preset ?? {})) {
        const presetClasses = positionPresets[p];
        if (presetClasses) {
          const prefix = breakpoint === "default" ? "" : `${breakpoint}:`;
          classes +=
            presetClasses
              .split(" ")
              .map((cls) => {
                if (cls.includes(":")) {
                  return cls;
                } else {
                  return `${prefix}${cls}`;
                }
              })
              .join(" ") + " ";
        }
      }
      return classes.trim();
    }
  })();

  const resolvedResponsive =
    responsive === "custom"
      ? responsiveClasses
      : responsiveBehaviors[responsive];

  const resolvedOpacity =
    opacity === "custom" ? customOpacity : opacityLevels[opacity];

  const baseClasses = "absolute overflow-hidden select-none";

  return (
    <div
      className={`${baseClasses} ${resolvedResponsive} ${resolvedPosition} ${transform} ${resolvedOpacity} ${style} ${className}`}
    >
      {src ? (
        // <Image
        //   src={src}
        //   alt={alt}
        //   width={width}
        //   height={height}
        //   priority
        //   className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-none h-auto object-contain pointer-events-none"
        //   style={{ width: "100%", height: "100%" }}
        // />
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          style={{
            width: "100%",
            maxWidth: "1920px",
            height: "auto",
            objectFit: "contain",
            pointerEvents: "none",
          }}
        />
      ) : (
        children
      )}
      {/* {src ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className="w-full h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-none object-contain pointer-events-none"
          sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, 400px"
          style={{
            width: "full",
            height: "auto",
          }}
        />
      ) : (
        children
      )} */}
      {/* {src ? (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-contain pointer-events-none"
            sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, 400px"
          />
        </div>
      ) : (
        children
      )} */}
    </div>
  );
};

export default Decoration;
