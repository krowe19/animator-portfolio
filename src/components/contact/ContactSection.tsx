import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkWithMeButton } from "@/components/ui/WorkWithMeButton";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { tiktokProfile } from "@/content/tiktok";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const channels = site.socials.filter((social) => social.label !== "Email");

  return (
    <div className="overflow-hidden border border-border bg-background">
      <div className="grid gap-12 px-6 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-16 lg:py-20">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              {contact.intro}
            </p>

            <div className="mt-10 border-t border-border pt-10">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {contact.emailLabel}
              </p>
              <a
                href={`mailto:${tiktokProfile.businessEmail}?subject=${encodeURIComponent(tiktokProfile.brandInquirySubject)}`}
                className="font-display mt-4 block text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
              >
                {tiktokProfile.businessEmail}
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="flex h-full flex-col justify-between gap-10 lg:items-end lg:text-right">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-end">
              <WorkWithMeButton
                feedbackAlign="end"
                className={cn(
                  "inline-flex items-center justify-center bg-accent px-7 py-3.5",
                  "text-sm font-medium text-accent-fg transition-opacity hover:opacity-90",
                )}
              />
              <Link
                href={site.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {site.secondaryCta.label}
              </Link>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {contact.channelsHeading}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {channel.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
