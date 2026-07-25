import type { NextConfig } from "next";

// Production deploys under /gru; local `next dev` serves at /
const basePath = process.env.NODE_ENV === "production" ? "/gru" : "";

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // Safari refuses optimized images served as Content-Disposition: attachment.
    contentDispositionType: "inline",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // No apex redirect: kanerowe.net/ will later be the main site.
  // This app only owns /gru via basePath in production.
};

export default nextConfig;
