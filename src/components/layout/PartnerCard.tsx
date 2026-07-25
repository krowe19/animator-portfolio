"use client";

import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useReducedMotion } from "@/components/motion/MotionProvider";
import type { BrandPartnership } from "@/content/tiktok";
import { cn } from "@/lib/utils";

type PartnerCardProps = {
  partner: BrandPartnership;
  index: number;
};

export function PartnerCard({ partner, index }: PartnerCardProps) {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [shine, setShine] = useState({ x: "50%", y: "38%" });
  const [pointerShine, setPointerShine] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setPointerShine(finePointer && !reducedMotion);
  }, [reducedMotion]);

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!pointerShine || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setShine({
        x: `${event.clientX - rect.left}px`,
        y: `${event.clientY - rect.top}px`,
      });
    },
    [pointerShine],
  );

  const handlePointerLeave = useCallback(() => {
    setShine({ x: "50%", y: "38%" });
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "partner-card relative flex h-full flex-col items-center overflow-hidden",
        "px-6 py-12 text-center md:py-16",
      )}
      style={
        {
          "--shine-x": shine.x,
          "--shine-y": shine.y,
        } as CSSProperties
      }
    >
      {!reducedMotion ? (
        <span className="partner-card-sweep pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.span
            className="absolute top-[-20%] bottom-[-20%] left-0 w-[52%] skew-x-[-14deg] bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.7)_46%,transparent_72%)]"
            initial={{ x: "-140%", opacity: 0 }}
            whileInView={{
              x: ["-140%", "220%"],
              opacity: [0, 1, 0],
            }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.85,
              delay: 0.08 + index * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </span>
      ) : null}

      <div className="relative z-10 flex h-16 w-full max-w-[12rem] shrink-0 items-center justify-center md:h-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={partner.logoUrl}
          alt=""
          className={cn(
            "h-14 w-auto max-w-full object-contain md:h-16",
            partner.logoClassName,
          )}
        />
      </div>
      <div
        className="relative z-10 mx-auto mt-8 h-px w-10 shrink-0 bg-border"
        aria-hidden="true"
      />
      <p className="font-display relative z-10 mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
        {partner.name}
      </p>
      <p className="relative z-10 mt-3 text-xs uppercase tracking-[0.16em] text-muted">
        {partner.category}
      </p>
    </div>
  );
}
