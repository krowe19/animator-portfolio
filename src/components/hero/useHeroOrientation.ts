"use client";

import { useEffect, useState } from "react";

/** Wide / square viewports share the landscape hero; taller than 1:1 uses portrait. */
export function useHeroOrientation() {
  const [landscape, setLandscape] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(min-aspect-ratio: 1/1)");
    const update = () => setLandscape(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return landscape ? ("landscape" as const) : ("portrait" as const);
}
