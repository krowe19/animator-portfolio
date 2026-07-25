import type { Metadata } from "next";
import { Instrument_Sans, Syne } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/utils";
import "lenis/dist/lenis.css";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand} · ${site.name}`,
  description: site.tagline.join(" "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        {/* Kick off LCP hero fetch before JS/CSS finish — critical on mobile. */}
        <link
          rel="preload"
          as="image"
          href={withBasePath("/hero/gru-silhouette.webp")}
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
