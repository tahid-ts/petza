/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { animate, inView, scroll } from "motion";
import type {
  ScrollAnimationConfig,
  AdvancedScrollAnimationConfig,
} from "@/types/animation";
import { effects, effectTransitions } from "./effects";

/* -------------------- Utility -------------------- */

const initialized = new WeakSet<HTMLElement>();

function prefersReducedMotion(): boolean {
  try {
    return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

function toNumber(val: unknown, fallback = 0): number {
  if (val === undefined || val === null) return fallback;
  if (typeof val === "number" && !isNaN(val)) return val;
  if (typeof val === "string") {
    const parsed = parseFloat(val);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  return fallback;
}

function normalizeRepeat(repeat?: number | boolean | typeof Infinity): number | typeof Infinity {
  if (repeat === true || repeat === Infinity) return Infinity;
  if (typeof repeat === "number" && repeat > 0) return repeat;
  return 0;
}

function lazySplitText(element: HTMLElement): HTMLElement[] {
  if (element.dataset.__split === "1") {
    return Array.from(element.querySelectorAll(":scope > span")) as HTMLElement[];
  }
  const text = (element.textContent ?? "").replace(/^\n+|\n+$/g, "");
  const frag = document.createDocumentFragment();
  for (const ch of text) {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.textContent = ch === " " ? "\u00A0" : ch;
    frag.appendChild(span);
  }
  element.innerHTML = "";
  element.appendChild(frag);
  element.dataset.__split = "1";
  return Array.from(element.querySelectorAll(":scope > span")) as HTMLElement[];
}

/* -------------------- Main Scroll Animation -------------------- */

export function applyScrollAnimation(config: ScrollAnimationConfig): void {
  const {
    element,
    effect = "fadeIn",
    duration,
    delay = 0,
    stagger = false,
    parallax = false,
    sticky = false,
    progressive = false,
    textReveal = false,
    morphTargets,
    repeat,
    easing,
    threshold = 0.15,
    repeatOnScroll = false,
  } = config;

  if (!element) return;
  if (initialized.has(element)) return;
  initialized.add(element);

  if (prefersReducedMotion()) {
    element.style.opacity = "1";
    return;
  }

  const transDefault = effectTransitions[effect] ?? {};
  const finalDuration = toNumber(duration, transDefault.duration ?? 0.6);
  const finalDelay = toNumber(delay, 0);
  const finalEasing = easing ?? transDefault.easing ?? "ease-out";
  const finalRepeat = normalizeRepeat(repeat);

  /* ---- SVG Morph ---- */
  if (effect === "morph" && morphTargets) {
    const path = element.querySelector("path");
    if (path instanceof SVGPathElement) {
      scroll(() => {
        animate(path as any, { d: [morphTargets.from, morphTargets.to] } as any, {
          duration: finalDuration,
          easing: finalEasing,
          repeat: finalRepeat,
        } as any);
      });
    }
    return;
  }

  /* ---- Text Reveal ---- */
  if (textReveal) {
    inView(
      element,
      (info : any) => {
        if (info.isIntersecting) {
          const spans = lazySplitText(element);
          spans.forEach((span, i) => {
            animate(
              span,
              { opacity: [0, 1], y: ["8px", "0px"] } as any,
              {
                duration: Math.min(finalDuration, 0.6),
                delay: finalDelay + i * 0.04,
                easing: finalEasing,
                repeat: finalRepeat === Infinity ? Infinity : 0,
              } as any
            );
          });
        } else if (repeatOnScroll) {
          element.querySelectorAll("span").forEach((span) => {
            (span as HTMLElement).style.opacity = "0";
            (span as HTMLElement).style.transform = "translateY(8px)";
          });
        }
      },
      { amount: threshold }
    );
    return;
  }

  /* ---- Normal Effects ---- */
  

inView(
  element,
  (inView) => {
    const keyframes = (effects[effect] ?? effects.fadeIn) as any;

    if (inView) {
      // 🟢 Animate in when visible
      if (stagger && element.children.length > 0) {
        const children = Array.from(element.children) as HTMLElement[];
        children.forEach((child, i) => {
          child.style.willChange = "transform, opacity";
          animate(
            child,
            keyframes,
            {
              duration: finalDuration,
              delay: finalDelay + i * 0.12,
              easing: finalEasing,
              repeat: finalRepeat === Infinity ? Infinity : 0,
            } as any
          );
        });
      } else {
        element.style.willChange = "transform, opacity";
        animate(
          element,
          keyframes,
          {
            duration: finalDuration,
            delay: finalDelay,
            easing: finalEasing,
            repeat: finalRepeat === Infinity ? Infinity : 0,
          } as any
        );
      }
    } else if (repeatOnScroll) {
      // 🔴 Reset on scroll out
      element.style.opacity = "0";
      element.style.transform = "none";
    }
  },
  { amount: threshold }
);


  /* ---- Parallax ---- */
  if (parallax) {
    scroll(() => {
      animate(element as any, { y: ["-40px", "40px"] } as any, {
        duration: finalDuration * 2,
        easing: finalEasing,
      } as any);
    });
  }

  /* ---- Sticky ---- */
  if (sticky) {
    element.style.position = "sticky";
    element.style.top = "20vh";
    element.style.zIndex = element.style.zIndex || "10";
  }

  /* ---- Progressive Fade ---- */
  if (progressive) {
    scroll(() => {
      animate(element as any, { opacity: [0, 1] } as any, { duration: finalDuration, easing: finalEasing } as any);
    });
  }
}

/* -------------------- Advanced Keyframes -------------------- */

export function applyAdvancedScrollAnimation(config: AdvancedScrollAnimationConfig): void {
  const { element, customKeyframes, repeatOnScroll = false } = config;
  if (!element) return;

  applyScrollAnimation(config);
  if (!customKeyframes) return;

  if (prefersReducedMotion()) {
    element.style.opacity = "1";
    return;
  }

  const finalDuration = toNumber(config.duration, 0.6);
  const finalDelay = toNumber(config.delay, 0);
  const finalRepeat = normalizeRepeat(config.repeat);

  inView(
    element,
    (info : any) => {
      if (info.isIntersecting) {
        const keyframes = customKeyframes as any;
        if (config.stagger && element.children.length > 0) {
          const children = Array.from(element.children) as HTMLElement[];
          children.forEach((child, i) => {
            child.style.willChange = "transform, opacity";
            animate(child as any, keyframes, {
              duration: finalDuration,
              delay: finalDelay + i * 0.12,
              easing: config.easing ?? "ease-out",
              repeat: finalRepeat === Infinity ? Infinity : 0,
            } as any);
            setTimeout(() => (child.style.willChange = ""), (finalDuration + finalDelay + i * 0.12) * 1000 + 50);
          });
        } else {
          element.style.willChange = "transform, opacity";
          animate(element as any, keyframes, {
            duration: finalDuration,
            delay: finalDelay,
            easing: config.easing ?? "ease-out",
            repeat: finalRepeat === Infinity ? Infinity : 0,
          } as any);
          setTimeout(() => (element.style.willChange = ""), (finalDuration + finalDelay) * 1000 + 50);
        }
      } else if (repeatOnScroll) {
        element.style.opacity = "0";
        element.style.transform = "none";
      }
    },
    { amount: config.threshold ?? 0.15 }
  );
}
