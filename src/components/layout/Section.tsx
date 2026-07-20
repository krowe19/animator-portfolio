import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  heading: string;
  headingId: string;
  children: ReactNode;
  className?: string;
  intro?: string;
};

export function Section({
  id,
  heading,
  headingId,
  children,
  className,
  intro,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("px-6 py-24 md:px-12 md:py-32 lg:px-24", className)}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 md:mb-16">
          <h2
            id={headingId}
            className="font-display text-3xl font-semibold tracking-tight md:text-5xl"
          >
            {heading}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-2xl text-muted">{intro}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
