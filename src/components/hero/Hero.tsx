"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroMedia } from "@/components/hero/HeroMedia";
import { useHeroOrientation } from "@/components/hero/useHeroOrientation";
import { useReducedMotion } from "@/components/motion/MotionProvider";
import { WorkWithMeButton } from "@/components/ui/WorkWithMeButton";
import { site } from "@/content/site";
import { formatCompactCount, tiktokProfile } from "@/content/tiktok";
import { cn } from "@/lib/utils";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const orientation = useHeroOrientation();
  const partners = tiktokProfile.partnerships.map((p) => p.name).join(" · ");

  const enter = (delay: number) =>
    reducedMotion
      ? { duration: 0 }
      : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      aria-labelledby="hero-heading"
      data-hero-orientation={orientation}
      className="relative min-h-dvh overflow-hidden bg-hero-bg text-hero-fg"
    >
      <div className="hero-shell">
        <div className="hero-media-slot">
          <div className="hero-media-frame">
            <HeroMedia mode={orientation} />
          </div>
          <div
            className="hero-portrait-fade pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-hero-bg to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="hero-copy-slot px-6">
          <div
            className={cn(
              "w-full",
              orientation === "landscape"
                ? "max-w-lg lg:max-w-xl"
                : "mx-auto max-w-xl",
            )}
          >
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={enter(0.05)}
              className="text-sm text-hero-muted md:text-base"
            >
              {site.name} · {site.title}
            </motion.p>

            <motion.h1
              id="hero-heading"
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={enter(0.12)}
              className="font-display mt-3 max-w-[11ch] text-[clamp(3rem,8.5vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-hero-fg"
            >
              {site.brand}
            </motion.h1>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={enter(0.22)}
              className="mt-5 max-w-md text-base leading-relaxed text-hero-muted md:mt-6 md:text-lg"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={enter(0.32)}
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-10"
            >
              <WorkWithMeButton
                className={cn(
                  "inline-flex items-center justify-center bg-accent px-7 py-3.5",
                  "text-sm font-medium text-accent-fg transition-opacity hover:opacity-90",
                )}
              />
              <Link
                href={site.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-hero-fg underline decoration-hero-muted/40 underline-offset-4 transition-colors hover:decoration-hero-fg"
              >
                {site.secondaryCta.label}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={enter(0.42)}
            className={cn(
              "@container mt-12 w-full border-t border-foreground/12 pt-10 md:mt-14",
              orientation === "landscape" ? "max-w-none" : "mx-auto max-w-xl",
            )}
          >
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 @[30rem]:grid-cols-4 @[30rem]:gap-x-5">
              {tiktokProfile.heroStats.map((stat) => (
                <div key={stat.key} className="min-w-0">
                  <dt className="text-[0.65rem] font-medium uppercase leading-snug tracking-[0.14em] text-hero-muted @[30rem]:text-xs @[30rem]:tracking-[0.16em]">
                    {stat.label}
                  </dt>
                  <dd className="font-display mt-2 text-3xl font-bold tracking-tight whitespace-nowrap text-hero-fg tabular-nums @[30rem]:text-4xl @[40rem]:text-5xl">
                    {formatCompactCount(stat.value)}
                    {stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-hero-muted">
              Selected collabs: {partners}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
