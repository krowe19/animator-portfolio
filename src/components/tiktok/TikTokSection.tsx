import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { TikTokVideoCard } from "@/components/tiktok/TikTokShowcase";
import { WorkWithMeButton } from "@/components/ui/WorkWithMeButton";
import { formatCompactCount, tiktokProfile } from "@/content/tiktok";

export function TikTokSection() {
  const { stats, topVideos, story } = tiktokProfile;

  return (
    <div className="space-y-14 md:space-y-16">
      <FadeIn delay={0.05}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm text-muted">@{tiktokProfile.username}</p>
            <p className="font-display mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
              {tiktokProfile.displayName}
            </p>
            <p className="mt-4 max-w-xl text-muted">{tiktokProfile.bio}</p>
          </div>
          <div className="flex flex-wrap items-start gap-3">
            <WorkWithMeButton
              feedbackAlign="end"
              className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            />
            <Link
              href={tiktokProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              Follow on TikTok
            </Link>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="max-w-3xl space-y-4 border-l-2 border-accent pl-6 md:pl-8">
          {story.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <dl className="grid grid-cols-2 gap-8 border-y border-border py-10 md:grid-cols-4 md:gap-6">
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
              <dt className="text-xs uppercase tracking-[0.14em] text-muted">
                {item.label}
              </dt>
              <dd className="font-display mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </FadeIn>

      <div>
        <FadeIn>
          <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
            Most watched
          </h3>
          <p className="mt-2 text-sm text-muted">
            Tap a preview to open on TikTok.
          </p>
        </FadeIn>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {topVideos.map((video, index) => (
            <TikTokVideoCard
              key={video.id}
              video={video}
              rank={index + 1}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
