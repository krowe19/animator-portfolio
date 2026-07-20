export type TikTokVideo = {
  id: string;
  views: string;
  viewsNum: number;
  posterUrl: string;
  href: string;
  pinned?: boolean;
};

export type BrandPartnership = {
  name: string;
  category: string;
};

export const tiktokProfile = {
  username: "grugaming69",
  displayName: "gru vlogs",
  url: "https://www.tiktok.com/@grugaming69",
  bio: "Where are the gorls?",
  businessEmail: "gruvlogs@proton.me",
  linktree: "https://linktr.ee/grugaming69",
  brandInquirySubject: "Brand Partnership — gru vlogs",
  story: [
    "gru vlogs puts Gru into everyday memes and moments people actually share — short 3D clips built for TikTok: fast, absurd, instantly readable, and made to loop.",
    "Scale followed. Labels and brands came for promotional work that still felt native to the feed — not a bolted-on ad.",
  ],
  partnershipsHeading: "Selected Collaborations",
  partnerships: [
    { name: "Sony Records", category: "Record Label" },
    { name: "Atlantic Records", category: "Record Label" },
    { name: "Block Blast", category: "Mobile Game" },
  ] satisfies BrandPartnership[],
  /** Stats pulled from @grugaming69 on 29 Jun 2025 */
  stats: {
    followers: 1_800_000,
    likes: 65_100_000,
    videos: 36,
    /** Sum of all visible video view counts on profile (~257M) */
    totalViews: 257_000_000,
    avgViewsPerVideo: 7_100_000,
  },
  /** Hero proof strip — views lead; full set lives in stats above */
  heroStats: [
    {
      key: "views",
      label: "Views",
      value: 257_000_000,
      suffix: "+",
    },
    { key: "followers", label: "Followers", value: 1_800_000, suffix: "" },
    { key: "likes", label: "Likes", value: 65_100_000, suffix: "" },
    {
      key: "avg",
      label: "Avg. views",
      value: 7_100_000,
      suffix: "",
    },
  ] as const,
  topVideos: [
    {
      id: "7374576992189975840",
      views: "51.8M",
      viewsNum: 51_800_000,
      pinned: true,
      href: "https://www.tiktok.com/@grugaming69/video/7374576992189975840",
      posterUrl: "/tiktok/7374576992189975840.jpg",
    },
    {
      id: "7222415219698552091",
      views: "46.5M",
      viewsNum: 46_500_000,
      href: "https://www.tiktok.com/@grugaming69/video/7222415219698552091",
      posterUrl: "/tiktok/7222415219698552091.jpg",
    },
    {
      id: "7384958263449652513",
      views: "23.5M",
      viewsNum: 23_500_000,
      href: "https://www.tiktok.com/@grugaming69/video/7384958263449652513",
      posterUrl: "/tiktok/7384958263449652513.jpg",
    },
    {
      id: "7629095706095111446",
      views: "21.1M",
      viewsNum: 21_100_000,
      href: "https://www.tiktok.com/@grugaming69/video/7629095706095111446",
      posterUrl: "/tiktok/7629095706095111446.jpg",
    },
    {
      id: "7389790191776550177",
      views: "19.2M",
      viewsNum: 19_200_000,
      href: "https://www.tiktok.com/@grugaming69/video/7389790191776550177",
      posterUrl: "/tiktok/7389790191776550177.jpg",
    },
    {
      id: "7219092377892457733",
      views: "15.2M",
      viewsNum: 15_200_000,
      href: "https://www.tiktok.com/@grugaming69/video/7219092377892457733",
      posterUrl: "/tiktok/7219092377892457733.jpg",
    },
  ] satisfies TikTokVideo[],
} as const;

export function formatCompactCount(value: number): string {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return value.toString();
}
