import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  heading: string;
  headingId: string;
  children: ReactNode;
  className?: string;
  headingClassName?: string;
  headerClassName?: string;
  intro?: ReactNode;
};

export function Section({
  id,
  heading,
  headingId,
  children,
  className,
  headingClassName,
  headerClassName,
  intro,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("px-6 py-24 md:px-12 md:py-32 lg:px-24", className)}
    >
      <div className="mx-auto max-w-7xl">
        <header className={cn("mb-12 md:mb-16", headerClassName)}>
          <h2
            id={headingId}
            className={cn(
              "font-display text-3xl font-semibold tracking-tight md:text-5xl",
              headingClassName,
            )}
          >
            {heading}
          </h2>
          {intro ? (
            <div className="mt-4 max-w-2xl space-y-2 text-muted">{intro}</div>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
