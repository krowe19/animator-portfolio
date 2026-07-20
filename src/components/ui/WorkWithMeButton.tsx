"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { useReducedMotion } from "@/components/motion/MotionProvider";
import { site } from "@/content/site";
import { tiktokProfile } from "@/content/tiktok";
import { cn } from "@/lib/utils";

const FEEDBACK_MS = 6000;

type WorkWithMeButtonProps = {
  className?: string;
  /** Alignment of the copied feedback under the button */
  feedbackAlign?: "start" | "center" | "end";
  onAfterClick?: () => void;
};

export function WorkWithMeButton({
  className,
  feedbackAlign = "start",
  onAfterClick,
}: WorkWithMeButtonProps) {
  const reducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const clearTimer = useCallback(() => {
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  useEffect(() => clearTimer, [clearTimer]);

  const handleClick = useCallback(
    async (_event: MouseEvent<HTMLAnchorElement>) => {
      const email = tiktokProfile.businessEmail;

      try {
        await navigator.clipboard.writeText(email);
      } catch {
        // Clipboard can fail in insecure contexts — mailto still proceeds.
      }

      setCopied(true);
      clearTimer();
      timeoutRef.current = setTimeout(() => setCopied(false), FEEDBACK_MS);
      onAfterClick?.();
      // mailto: navigation proceeds via the anchor href
    },
    [clearTimer, onAfterClick],
  );

  return (
    <div className="relative inline-flex flex-col">
      <a href={site.cta.href} onClick={handleClick} className={className}>
        {site.cta.label}
      </a>

      <AnimatePresence>
        {copied ? (
          <motion.p
            role="status"
            aria-live="polite"
            initial={reducedMotion ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -2, transition: { duration: 0.35 } }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
            }
            className={cn(
              "absolute top-full z-50 mt-2 w-max max-w-[min(100vw-2rem,18rem)]",
              "rounded-sm border border-border bg-background/95 px-3 py-2",
              "text-xs leading-relaxed text-muted shadow-sm backdrop-blur-sm",
              feedbackAlign === "center" && "left-1/2 -translate-x-1/2",
              feedbackAlign === "end" && "right-0",
              feedbackAlign === "start" && "left-0",
            )}
          >
            <span className="block text-muted">Copied to Clipboard! 📋</span>
            <span className="mt-0.5 block font-medium text-foreground">
              {tiktokProfile.businessEmail}
            </span>
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
