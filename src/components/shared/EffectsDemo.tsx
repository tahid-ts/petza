/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import ScrollAnimator from "./animation/scrollAnimation/ScrollAnimator";

const allEffects = [
  "fadeIn",
  "fadeOut",
  "slideInUp",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "zoomIn",
  "zoomOut",
  "rotateIn",
  "rotateOut",
  "scaleUp",
  "scaleDown",
  "flipX",
  "flipY",
  "bounce",
];

export default function EffectsDemo() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center py-20 space-y-20">
      <h1 className="text-5xl font-bold mb-10">ScrollAnimator — All Effects</h1>
      {allEffects.map((effect) => (
        <ScrollAnimator
          // repeatOnScroll
          key={effect}
          effect={effect as any}
          duration={1.5}
        >
          <div className="p-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 rounded-3xl text-2xl text-center">
            {effect}
          </div>
        </ScrollAnimator>
      ))}

      <ScrollAnimator textReveal>
        <h2 className="text-4xl font-semibold mt-20 text-yellow-400">
          This is Text Reveal Animation
        </h2>
      </ScrollAnimator>

      <ScrollAnimator parallax>
        <div className="p-20 bg-blue-600/20 rounded-3xl">Parallax Effect</div>
      </ScrollAnimator>

      <ScrollAnimator sticky>
        <div className="p-20 bg-red-500/20 rounded-3xl">Sticky Element</div>
      </ScrollAnimator>

      <ScrollAnimator progressive>
        <div className="p-20 bg-green-500/20 rounded-3xl">Progressive Fade</div>
      </ScrollAnimator>
    </main>
  );
}
