import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkWithMeButton } from "@/components/ui/WorkWithMeButton";
import { tiktokProfile } from "@/content/tiktok";
import { cn } from "@/lib/utils";

export function CollaborationsSection() {
  return (
    <div>
      <FadeIn>
        <p className="w-full text-lg leading-relaxed text-muted md:text-xl">
          Music labels and brands I&apos;ve made promotional viral content for on
          gru vlog.
        </p>
      </FadeIn>

      <ul className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
        {tiktokProfile.partnerships.map((partner, index) => (
          <FadeIn key={partner.name} delay={index * 0.08} as="li" className="h-full">
            <div className="flex h-full flex-col items-center bg-background px-6 py-12 text-center md:py-16">
              <div className="flex h-16 w-full max-w-[12rem] shrink-0 items-center justify-center md:h-20">
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
                className="mx-auto mt-8 h-px w-10 shrink-0 bg-border"
                aria-hidden="true"
              />
              <p className="font-display mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
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
        <div className="mt-10 flex flex-wrap items-center gap-6">
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
            className="inline-flex items-center text-base font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            See the channel
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
