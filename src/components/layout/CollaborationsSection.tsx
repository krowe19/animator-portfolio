import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { PartnerCard } from "@/components/layout/PartnerCard";
import { WorkWithMeButton } from "@/components/ui/WorkWithMeButton";
import { tiktokProfile } from "@/content/tiktok";
import { cn } from "@/lib/utils";

export function CollaborationsSection() {
  return (
    <div>
      <FadeIn>
        <div>
          <p className="w-full text-lg leading-relaxed text-muted md:text-xl">
            Some of the music labels and brands I&apos;ve made promotional viral
            content for on gru vlogs:
          </p>

          <ul className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {tiktokProfile.partnerships.map((partner, index) => (
              <li key={partner.name} className="h-full">
                <PartnerCard partner={partner} index={index} />
              </li>
            ))}
          </ul>

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
        </div>
      </FadeIn>
    </div>
  );
}
