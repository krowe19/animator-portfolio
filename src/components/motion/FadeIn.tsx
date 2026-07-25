"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/components/motion/MotionProvider";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Kept for call-site compat; heavily capped so sections don’t cascade. */
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeInProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];
  // Premium: almost no stagger — one quiet settle, not a parade of items
  const resolvedDelay = Math.min(delay, 0.04);

  return (
    <Component
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.2 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              duration: 0.35,
              ease: [0.25, 0.1, 0.25, 1],
              delay: resolvedDelay,
            }
      }
    >
      {children}
    </Component>
  );
}
