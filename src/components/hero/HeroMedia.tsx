import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroMediaProps = {
  mode: "landscape" | "portrait";
  className?: string;
};

export function HeroMedia({ mode, className }: HeroMediaProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <Image
        src="/hero/gru-silhouette.png"
        alt="3D render of Gru in profile, noir lighting"
        fill
        priority
        fetchPriority="high"
        // Serve the static PNG directly — Next's optimizer can return
        // Content-Disposition: attachment, which Safari refuses to show inline.
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
