import Link from "next/link";
import { TikTokVideoCard } from "@/components/tiktok/TikTokShowcase";
import { formatCompactCount, tiktokProfile } from "@/content/tiktok";

export function TikTokSection() {
  const { stats, topVideos } = tiktokProfile;

  return (
    <section
      id="tiktok"
      aria-labelledby="tiktok-heading"
      className="px-6 py-24 md:px-12 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-8 border-b border-border pb-10 md:gap-10 md:pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="min-w-0 max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-muted">
              @{tiktokProfile.username}
            </p>
            <h2
              id="tiktok-heading"
              className="font-display mt-3 text-[clamp(3.25rem,8vw,5.75rem)] font-extrabold leading-[0.9] tracking-[-0.05em]"
            >
              {tiktokProfile.displayName}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:mt-6 md:text-lg">
              A collection of ultra-viral hits, up to 51M+ views on a single
              video:
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3 lg:pb-1">
            <Link
              href={tiktokProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Follow on TikTok
            </Link>
          </div>
        </header>

        <dl className="grid grid-cols-2 gap-5 border-b border-border py-6 md:grid-cols-4 md:gap-4 md:py-8">
          {[
            {
              label: "Views",
              value: `${formatCompactCount(stats.totalViews)}+`,
            },
            { label: "Followers", value: formatCompactCount(stats.followers) },
            { label: "Likes", value: formatCompactCount(stats.likes) },
            {
              label: "Avg. views",
              value: formatCompactCount(stats.avgViewsPerVideo),
            },
          ].map((item) => (
            <div key={item.label}>
              <dt className="text-[0.65rem] uppercase tracking-[0.14em] text-muted md:text-xs">
                {item.label}
              </dt>
              <dd className="font-display mt-1 text-xl font-bold tracking-tight md:text-2xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="pt-12 md:pt-16">
          <h3 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Most watched
          </h3>
          <p className="mt-2 text-sm text-muted">
            Tap a preview to open on TikTok.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
            {topVideos.map((video, index) => (
              <TikTokVideoCard key={video.id} video={video} rank={index + 1} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
