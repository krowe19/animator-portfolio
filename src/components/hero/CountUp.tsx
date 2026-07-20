"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/motion/MotionProvider";
import { formatCompactCount } from "@/content/tiktok";

type CountUpProps = {
  value: number;
  suffix?: string;
  approx?: boolean;
  durationMs?: number;
  className?: string;
};

export function CountUp({
  value,
  suffix = "",
  approx = false,
  durationMs = 1400,
  className,
}: CountUpProps) {
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(
    reducedMotion ? formatCompactCount(value) : "0",
  );
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(formatCompactCount(value));
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(formatCompactCount(Math.round(value * eased)));
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(formatCompactCount(value));
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [durationMs, reducedMotion, value]);

  return (
    <span ref={ref} className={className}>
      {approx ? "~" : ""}
      {display}
      {suffix}
    </span>
  );
}
