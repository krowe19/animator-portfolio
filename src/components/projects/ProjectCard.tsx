"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { useReducedMotion } from "@/components/motion/MotionProvider";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const activatePreview = useCallback(() => {
    setIsActive(true);
    const video = videoRef.current;
    if (!video) return;

    if (!videoLoaded) {
      video.src = project.videoUrl;
      setVideoLoaded(true);
    }

    void video.play().catch(() => undefined);
  }, [project.videoUrl, videoLoaded]);

  const deactivatePreview = useCallback(() => {
    setIsActive(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }, []);

  const cardContent = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-border">
        <Image
          src={project.posterUrl}
          alt=""
          fill
          className={cn(
            "object-cover transition-opacity duration-300",
            isActive && videoLoaded ? "opacity-0" : "opacity-100",
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
            isActive && videoLoaded ? "opacity-100" : "opacity-0",
          )}
        />
      </div>
      <div className="border-t border-border p-5">
        <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        {project.href ? (
          <span className="mt-3 inline-block text-sm text-foreground underline-offset-4 group-hover:underline">
            View project →
          </span>
        ) : null}
      </div>
    </>
  );

  const motionProps = reducedMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
      };

  const sharedProps = {
    className: cn(
      "group block overflow-hidden rounded-sm border border-border bg-background",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
    ),
    "aria-label": `${project.title}: ${project.description}`,
    onMouseEnter: activatePreview,
    onMouseLeave: deactivatePreview,
    onFocus: activatePreview,
    onBlur: deactivatePreview,
  };

  return (
    <FadeIn delay={index * 0.08} as="li">
      {project.href ? (
        <motion.div {...motionProps}>
          <Link href={project.href} {...sharedProps} target="_blank" rel="noopener noreferrer">
            {cardContent}
          </Link>
        </motion.div>
      ) : (
        <motion.article {...motionProps} {...sharedProps} tabIndex={0}>
          {cardContent}
        </motion.article>
      )}
    </FadeIn>
  );
}
