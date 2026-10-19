import type { Metadata } from "next";
import { Albert_Sans, Bodoni_Moda } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { monograph } from "@/content/monograph";
import { site } from "@/content/site";
import "lenis/dist/lenis.css";
import "./globals.css";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand} · ${site.name}`,
  description: monograph.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albert.variable} ${bodoni.variable} h-full antialiased`}>
      <body className="min-h-full">
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
