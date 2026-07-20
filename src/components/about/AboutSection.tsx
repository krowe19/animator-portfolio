import { FadeIn } from "@/components/motion/FadeIn";
import { about } from "@/content/about";

export function AboutSection() {
  return (
    <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
      <div>
        <FadeIn>
          <div className="max-w-prose space-y-6">
            {about.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>

      <div>
        <FadeIn delay={0.1}>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              {about.skillsHeading}
            </h3>
            <ul className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
              {about.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-border pb-3 font-display text-lg font-medium tracking-tight last:border-b-0"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
