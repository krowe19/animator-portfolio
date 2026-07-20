export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Kane Rowe",
  brand: "gru vlogs",
  title: "3D Animator",
  tagline:
    "Short-form 3D character comedy that brands hire. 1.8M followers, 257M+ views, and work with Sony Music, Atlantic, and Block Blast.",
  nav: [
    { label: "Work", href: "#work" },
    { label: "TikTok", href: "#tiktok" },
    { label: "About", href: "#about" },
  ] satisfies NavLink[],
  socials: [
    { label: "TikTok", href: "https://www.tiktok.com/@grugaming69" },
    { label: "Linktree", href: "https://linktr.ee/grugaming69" },
    { label: "Email", href: "mailto:gruvlogs@proton.me" },
  ] satisfies SocialLink[],
  cta: {
    label: "Work With Me",
    href: "mailto:gruvlogs@proton.me?subject=Brand%20Partnership%3A%20gru%20vlogs",
  },
  secondaryCta: {
    label: "Watch on TikTok",
    href: "https://www.tiktok.com/@grugaming69",
  },
} as const;
