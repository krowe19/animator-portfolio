"use client";

import { LinkIcon } from "@/components/monograph/LinkIcon";
import type { Rate } from "@/content/monograph";

export const ENQUIRE_EVENT = "mono:enquire";

/** Each rate jumps to the enquiry form and pre-fills the brief with that service. */
export function RateList({ rates }: { rates: readonly Rate[] }) {
  return (
    <div className="mono-rates">
      {rates.map((rate) => (
        <a
          key={rate.label}
          href="#enquire"
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent(ENQUIRE_EVENT, { detail: `${rate.label} (${rate.price})` }),
            )
          }
        >
          <span>{rate.label}</span>
          <span>
            {rate.price}
            <LinkIcon className="mono-rate-arrow" />
          </span>
        </a>
      ))}
    </div>
  );
}
