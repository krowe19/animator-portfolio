"use client";

import { MailtoCopyLink } from "@/components/ui/MailtoCopyLink";
import { site } from "@/content/site";

type WorkWithMeButtonProps = {
  className?: string;
  /** Alignment of the copied feedback under the button */
  feedbackAlign?: "start" | "center" | "end";
  onAfterClick?: () => void;
};

export function WorkWithMeButton({
  className,
  feedbackAlign = "start",
  onAfterClick,
}: WorkWithMeButtonProps) {
  return (
    <MailtoCopyLink
      href={site.cta.href}
      className={className}
      feedbackAlign={feedbackAlign}
      onAfterClick={onAfterClick}
    >
      {site.cta.label}
    </MailtoCopyLink>
  );
}
