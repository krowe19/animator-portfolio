import { FadeIn } from "@/components/motion/FadeIn";
import { WorkWithMeButton } from "@/components/ui/WorkWithMeButton";
import { tiktokProfile } from "@/content/tiktok";
import { cn } from "@/lib/utils";

export function GruVlogsIntro() {
  return (
    <FadeIn delay={0.08}>
      <div className="max-w-3xl space-y-4 border-l border-border pl-6 md:pl-8">
        {tiktokProfile.story.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </FadeIn>
  );
}

export function TikTokActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-end">
      <WorkWithMeButton
        feedbackAlign="end"
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-full border border-foreground",
          "bg-foreground px-8 py-3.5 text-sm font-medium text-background",
          "transition-colors hover:bg-transparent hover:text-foreground",
        )}
      />
      <a
        href={tiktokProfile.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-full border border-border",
          "bg-background px-8 py-3.5 text-sm font-medium text-foreground",
          "transition-colors hover:border-foreground",
        )}
      >
        Follow on TikTok
      </a>
    </div>
  );
}

export function BrandPartnerships() {
  return (
    <FadeIn delay={0.12}>
      <div className="rounded-sm border border-border bg-background p-8 md:p-10">
        <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-muted">
          {tiktokProfile.partnershipsHeading}
        </h3>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Music labels and brands I&apos;ve created promotional 3D content for on
          gru vlogs.
        </p>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {tiktokProfile.partnerships.map((partner) => (
            <li
              key={partner.name}
              className="flex flex-col items-center justify-center bg-background px-6 py-8 text-center"
            >
              <div className="flex h-12 w-full max-w-[9rem] items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logoUrl}
                  alt=""
                  className={cn(
                    "h-full w-auto max-w-full object-contain",
                    partner.logoClassName,
                  )}
                />
              </div>
              <div
                className="mx-auto mt-6 h-px w-8 bg-border"
                aria-hidden="true"
              />
              <p className="mt-5 text-lg font-medium tracking-tight md:text-xl">
                {partner.name}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                {partner.category}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
