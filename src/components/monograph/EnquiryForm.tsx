"use client";

import { useEffect, useRef, type FormEvent } from "react";
import { ENQUIRE_EVENT } from "@/components/monograph/RateList";
import { monograph } from "@/content/monograph";

/** No backend: the form opens the visitor's mail app with the brief filled in. */
export function EnquiryForm() {
  const briefRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    function prefill(event: Event) {
      const brief = briefRef.current;
      if (!brief) return;
      brief.value = `I'm interested in ${(event as CustomEvent<string>).detail}. `;
    }
    window.addEventListener(ENQUIRE_EVENT, prefill);
    return () => window.removeEventListener(ENQUIRE_EVENT, prefill);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const brief = String(data.get("brief") ?? "").trim();

    const subject = `Enquiry: ${[name, company].filter(Boolean).join(", ") || "gru vlogs"}`;
    const body = [
      brief,
      "",
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
    ].join("\n");

    window.location.href = `mailto:${monograph.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="mono-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Company
        <input name="company" type="text" autoComplete="organization" />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Brief
        <textarea ref={briefRef} name="brief" rows={3} required />
      </label>
      <button type="submit">
        Send enquiry<span aria-hidden="true">&nbsp;&nbsp;→</span>
      </button>
    </form>
  );
}
