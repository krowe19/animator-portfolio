import Image from "next/image";
import { heroLqip } from "@/content/hero-lqip";
import { cn } from "@/lib/utils";

type HeroMediaProps = {
  mode: "landscape" | "portrait";
  className?: string;
};

export function HeroMedia({ mode, className }: HeroMediaProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-hero-bg", className)}>
      <Image
        src="/hero/gru-silhouette.webp"
        alt="3D render of Gru in profile, noir lighting"
        fill
        priority
        fetchPriority="high"
        placeholder="blur"
        blurDataURL={heroLqip}
        // Static WebP — skip the optimizer so Safari gets a normal inline image
        // (and we control the bytes precisely for the LCP preload).
        unoptimized
        sizes={
          mode === "landscape"
            ? "(min-aspect-ratio: 1/1) 55vw, 100vw"
            : "100vw"
        }
        className={cn(
          "select-none object-contain",
          mode === "landscape" ? "object-right-bottom" : "object-bottom",
        )}
      />
    </div>
  );
}
