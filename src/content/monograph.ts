import { tiktokProfile } from "@/content/tiktok";

export type Plate = {
  label: string;
  views: string;
  href: string;
  posterUrl: string;
  alt: string;
  /** CSS object-position, used to crop baked-in UI out of a cover frame */
  focus?: string;
};

export type Credit = {
  name: string;
  href: string;
};

export type Rate = {
  label: string;
  price: string;
};

const [top, ...rest] = tiktokProfile.topVideos;

export const monograph = {
  kicker: "A monograph of short films",
  intro:
    "Written, produced and animated by hand by Kane Rowe. Two hundred and fifty-seven million views, and counting.",
  email: "contact@gruvlogs.com",
  leadPlate: {
    label: "Plate I",
    views: "51.8",
    href: top.href,
    posterUrl: top.posterUrl,
    alt: "Plate I: Gru in sunglasses and a gold chain",
  } satisfies Plate,
  figures: [
    { value: "1.8M", label: "followers" },
    { value: "65.1M", label: "likes" },
    { value: "7.1M", label: "average views" },
  ],
  plates: [
    {
      label: "Plate II",
      views: "46.5",
      href: rest[0].href,
      posterUrl: rest[0].posterUrl,
      alt: "Plate II: Gru in a dark alley",
      focus: "center bottom",
    },
    {
      label: "Plate III",
      views: "23.5",
      href: rest[1].href,
      posterUrl: rest[1].posterUrl,
      alt: "Plate III: Gru in an orange puffer jacket",
    },
    {
      label: "Plate IV",
      views: "21.1",
      href: rest[2].href,
      posterUrl: rest[2].posterUrl,
      alt: "Plate IV: Gru at the beach at sunset",
    },
  ] satisfies Plate[],
  totalViews: "257,000,000",
  credits: [
    { name: "Sony Music", href: "https://www.sonymusic.com" },
    { name: "Atlantic Records", href: "https://www.atlanticrecords.com" },
    { name: "Alamo Records", href: "https://www.alamo-records.com" },
    { name: "GloRilla", href: "https://open.spotify.com/search/GloRilla" },
    { name: "Moneybagg Yo", href: "https://open.spotify.com/search/Moneybagg%20Yo" },
    { name: "BossMan Dlow", href: "https://open.spotify.com/search/BossMan%20Dlow" },
    { name: "bbno$", href: "https://open.spotify.com/search/bbno%24" },
    { name: "Odetari", href: "https://open.spotify.com/search/Odetari" },
    { name: "9lives", href: "https://open.spotify.com/search/9lives" },
    { name: "Block Blast", href: "https://www.blockblast.com/" },
    { name: "Meme Soundboard", href: "https://apps.apple.com/app/id1541448769" },
    { name: "Shyler", href: "https://open.spotify.com/search/Shyler" },
  ] satisfies Credit[],
  caseStudies: [
    { value: "8.2M", label: "Alamo Records, one sound integration" },
    { value: "4M", label: "Block Blast, one product integration" },
  ],
  rates: [
    { label: "Sound promotion", price: "from £1,200" },
    { label: "Brand film", price: "from £4,000" },
    { label: "Series of three", price: "from £10,500" },
  ] satisfies Rate[],
} as const;
