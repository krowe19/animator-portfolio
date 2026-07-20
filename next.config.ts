import type { NextConfig } from "next";

const basePath = "/gru";

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
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
  // This app only owns /gru via basePath.
};

export default nextConfig;
