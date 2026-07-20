import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkWithMeButton } from "@/components/ui/WorkWithMeButton";
import { tiktokProfile } from "@/content/tiktok";
import { cn } from "@/lib/utils";

export function CollaborationsSection() {
  return (
    <div>
      <FadeIn>
        <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Music labels and brands I&apos;ve made promotional 3D for on{" "}
          {tiktokProfile.displayName}.
        </p>
      </FadeIn>

      <ul className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
        {tiktokProfile.partnerships.map((partner, index) => (
          <FadeIn key={partner.name} delay={index * 0.08} as="li">
            <div className="flex h-full flex-col justify-center bg-background px-6 py-12 text-center md:py-16">
              <p className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {partner.name}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">
                {partner.category}
              </p>
            </div>
          </FadeIn>
        ))}
      </ul>

      <FadeIn delay={0.2}>
        <div className="mt-10 flex flex-wrap items-start gap-6">
          <WorkWithMeButton
            className={cn(
              "inline-flex items-center justify-center bg-foreground px-7 py-3.5",
              "text-sm font-medium text-background transition-opacity hover:opacity-85",
            )}
          />
          <Link
            href={tiktokProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            See the channel
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
