/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, {
  forwardRef,
  useLayoutEffect,
  useRef,
  ElementType,
  PropsWithChildren,
  Ref,
  useCallback,
} from "react";

import type { ScrollEffectName } from "@/types/animation";
import {
  applyAdvancedScrollAnimation,
  applyScrollAnimation,
} from "./scrollAnimations";

export interface ScrollAnimatorProps extends PropsWithChildren {
  as?: ElementType;
  effect?: ScrollEffectName;
  duration?: number | string;
  delay?: number | string;
  stagger?: boolean;
  parallax?: boolean;
  sticky?: boolean;
  progressive?: boolean;
  textReveal?: boolean;
  morphTargets?: { from: string; to: string };
  repeat?: number | boolean | typeof Infinity;
  easing?: string;
  advanced?: boolean;
  customKeyframes?: any;
  threshold?: number;
  repeatOnScroll?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollAnimator = forwardRef<HTMLElement, ScrollAnimatorProps>(
  (
    {
      as: Tag = "div",
      children,
      effect = "fadeIn",
      duration,
      delay,
      stagger = false,
      parallax = false,
      sticky = false,
      progressive = false,
      textReveal = false,
      morphTargets,
      repeat,
      easing,
      advanced = false,
      customKeyframes,
      threshold = 0.15,
      repeatOnScroll = false,
      className,
      style,
      ...rest
    },
    forwardedRef: Ref<HTMLElement>
  ) => {
    const localRef = useRef<HTMLElement | null>(null);

    const setRef = useCallback(
      (node: HTMLElement | null) => {
        localRef.current = node;

        if (!forwardedRef) return;

        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef && "current" in forwardedRef) {
          (forwardedRef as React.RefObject<HTMLElement | null>).current = node;
        }
      },
      [forwardedRef]
    );

    useLayoutEffect(() => {
      const el = localRef.current;
      if (!el) return;

      const cfg = {
        element: el,
        effect,
        duration,
        delay,
        stagger,
        parallax,
        sticky,
        progressive,
        textReveal,
        morphTargets,
        repeat,
        easing,
        repeatOnScroll,
        threshold,
      };

      if (advanced) {
        applyAdvancedScrollAnimation({ ...cfg, customKeyframes });
      } else {
        applyScrollAnimation(cfg);
      }
      return () => {};
    }, [
      effect,
      duration,
      delay,
      stagger,
      parallax,
      sticky,
      progressive,
      textReveal,
      morphTargets,
      repeat,
      easing,
      advanced,
      customKeyframes,
      repeatOnScroll,
      threshold,
    ]);

    return (
      <Tag ref={setRef} className={className} style={style} {...rest}>
        {children}
      </Tag>
    );
  }
);

ScrollAnimator.displayName = "ScrollAnimator";

export default ScrollAnimator;
