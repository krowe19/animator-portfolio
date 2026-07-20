import { site } from "@/content/site";
import { tiktokProfile } from "@/content/tiktok";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground px-6 py-14 text-background md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            {site.brand}
          </p>
          <p className="mt-2 text-sm text-background/65">
            © {year} {site.name}
          </p>
          <a
            href={`mailto:${tiktokProfile.businessEmail}`}
            className="mt-4 inline-block text-sm underline decoration-background/30 underline-offset-4 transition-colors hover:decoration-background"
          >
            {tiktokProfile.businessEmail}
          </a>
        </div>
        <nav aria-label="Social">
          <ul className="flex flex-wrap gap-6">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-sm text-background/70 transition-colors hover:text-background"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
