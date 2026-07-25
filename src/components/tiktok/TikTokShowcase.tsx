import { formatCompactCount, type TikTokVideo } from "@/content/tiktok";
import { cn, withBasePath } from "@/lib/utils";

type TikTokVideoCardProps = {
  video: TikTokVideo;
  rank: number;
};

export function TikTokVideoCard({ video, rank }: TikTokVideoCardProps) {
  return (
    <li>
      <a
        href={video.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative block overflow-hidden rounded-sm border border-border bg-background",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
        )}
        aria-label={`#${rank} most viewed video, ${video.views} views on TikTok`}
      >
        <div className="relative aspect-[9/16] overflow-hidden bg-border">
          {/* Local posters in /public/tiktok; avoids expired TikTok CDN signatures */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath(video.posterUrl)}
            alt=""
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-85" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <p className="text-sm uppercase tracking-[0.14em] text-white/75">
              #{rank}
              {video.pinned ? " · Pinned" : ""}
            </p>
            <p className="font-display mt-1.5 text-xl font-semibold tracking-tight text-white md:text-2xl">
              {video.views} views
            </p>
          </div>
          <div className="absolute right-3 top-3 bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Watch
          </div>
        </div>
      </a>
    </li>
  );
}

type TikTokStatsProps = {
  followers: number;
  likes: number;
  videos: number;
  totalViews: number;
  avgViews: number;
};

export function TikTokStats({
  followers,
  likes,
  videos,
  totalViews,
  avgViews,
}: TikTokStatsProps) {
  const items = [
    { label: "Followers", value: formatCompactCount(followers) },
    { label: "Total Likes", value: formatCompactCount(likes) },
    { label: "Videos", value: videos.toString() },
    { label: "Total Views", value: `${formatCompactCount(totalViews)}+` },
    { label: "Avg. per Video", value: formatCompactCount(avgViews) },
  ];

  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-5">
      {items.map((item) => (
        <div key={item.label} className="bg-background px-5 py-6 text-center md:py-8">
          <dt className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            {item.label}
          </dt>
          <dd className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
