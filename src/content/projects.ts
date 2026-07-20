export type Project = {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  videoUrl: string;
  href?: string;
};

/**
 * Add or edit projects here; no component changes needed.
 * posterUrl / videoUrl: external CDN links (must support CORS for in-browser playback).
 */
export const projects: Project[] = [
  {
    id: "ethereal-motion",
    title: "Ethereal Motion Study",
    description: "Fluid character animation exploring weightlessness and light.",
    posterUrl: "https://picsum.photos/seed/project-1/800/600",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    href: "https://tiktok.com",
  },
  {
    id: "neon-drift",
    title: "Neon Drift",
    description: "Cyberpunk environment loop with volumetric lighting passes.",
    posterUrl: "https://picsum.photos/seed/project-2/800/600",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    href: "https://tiktok.com",
  },
  {
    id: "organic-forms",
    title: "Organic Forms",
    description: "Procedural sculpting study in subsurface scattering materials.",
    posterUrl: "https://picsum.photos/seed/project-3/800/600",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "kinetic-type",
    title: "Kinetic Type",
    description: "Typography-driven motion piece blending 3D and graphic design.",
    posterUrl: "https://picsum.photos/seed/project-4/800/600",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    href: "https://tiktok.com",
  },
  {
    id: "void-walk",
    title: "Void Walk",
    description: "Minimalist character walk cycle in an infinite white space.",
    posterUrl: "https://picsum.photos/seed/project-5/800/600",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "particle-dream",
    title: "Particle Dream",
    description: "GPU particle simulation with cinematic camera work.",
    posterUrl: "https://picsum.photos/seed/project-6/800/600",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    href: "https://tiktok.com",
  },
];
