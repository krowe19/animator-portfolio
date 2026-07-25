"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/components/motion/MotionProvider";
import { WorkWithMeButton } from "@/components/ui/WorkWithMeButton";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <motion.header
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }
      }
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="flex w-full items-center justify-between px-6 py-5 md:px-8 lg:px-24">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70 md:text-xl"
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <WorkWithMeButton
            feedbackAlign="end"
            className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
          />
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-foreground transition-transform duration-200",
                menuOpen ? "top-1/2 translate-y-0 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-foreground transition-opacity duration-200",
                menuOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-foreground transition-transform duration-200",
                menuOpen ? "bottom-1/2 translate-y-0 -rotate-45" : "bottom-0",
              )}
            />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border/60 bg-background px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base text-muted transition-colors hover:text-foreground"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <WorkWithMeButton
                className="block text-base font-medium text-accent"
                onAfterClick={handleNavClick}
              />
            </li>
          </ul>
        </nav>
      ) : null}
    </motion.header>
  );
}
