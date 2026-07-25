"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";
import { useReducedMotion } from "@/components/motion/MotionProvider";

/**
 * Very light inertia on wheel/trackpad scroll.
 * Skipped entirely when the user prefers reduced motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      // Higher lerp = closer to native; keep this barely smoothed
      lerp: 0.14,
      smoothWheel: true,
      autoRaf: true,
      anchors: true,
    });

    document.documentElement.classList.add("lenis");

    return () => {
      document.documentElement.classList.remove("lenis");
      lenis.destroy();
    };
  }, [reducedMotion]);

  return children;
}
