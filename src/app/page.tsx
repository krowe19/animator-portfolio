import Image from "next/image";
import { EnquiryForm } from "@/components/monograph/EnquiryForm";
import { RateList } from "@/components/monograph/RateList";
import { monograph, type Plate } from "@/content/monograph";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/utils";

const GEMS = ["#6E8BFF", "#3DBE8B", "#E0566A", "#F0A93E", "#A98BEF", "#4FC3E8"];

function PlateImage({
  plate,
  sizes,
  priority,
  lead,
}: {
  plate: Plate;
  sizes: string;
  priority?: boolean;
  lead?: boolean;
}) {
  return (
    <span className="mono-plate-frame">
      <Image
        src={withBasePath(plate.posterUrl)}
        alt={plate.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: plate.focus ?? "center" }}
      />
      <span className={lead ? "mono-plate-count mono-plate-count--lead" : "mono-plate-count"}>
        {plate.views}
        <em>M</em>
      </span>
    </span>
  );
}

export default function Home() {
  const { leadPlate } = monograph;

  return (
    <div className="mono">
      <header className="mono-header">
        <a href="#top" className="mono-wordmark">
          gru vlogs
        </a>
        <nav aria-label="Main">
          <a href="#plates">Plates</a>
          <a href="#commissions">Commissions</a>
          <a href="#enquire" className="mono-nav-cta">
            Enquire
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="mono-hero">
          <p className="mono-kicker">{monograph.kicker}</p>
          <h1>
            gru <em>vlogs</em>
          </h1>
          <p className="mono-intro">{monograph.intro}</p>
          <figure className="mono-lead">
            <a href={leadPlate.href} target="_blank" rel="noopener">
              <PlateImage plate={leadPlate} sizes="(min-width: 520px) 460px, 100vw" priority lead />
            </a>
            <figcaption className="mono-caption">
              <span>{leadPlate.label}</span>
              <span>views on a single film</span>
            </figcaption>
          </figure>
        </section>

        <section aria-label="Figures" className="mono-figures">
          <div>
            {monograph.figures.map((figure) => (
              <p key={figure.label}>
                <span>{figure.value}</span>
                {figure.label}
              </p>
            ))}
          </div>
        </section>

        <section id="plates" className="mono-plates">
          <h2>Plates</h2>
          <div className="mono-plate-grid">
            {monograph.plates.map((plate) => (
              <a key={plate.label} href={plate.href} target="_blank" rel="noopener">
                <PlateImage plate={plate} sizes="(min-width: 900px) 360px, 100vw" />
                <span className="mono-caption">
                  <span>{plate.label}</span>
                  <span>views</span>
                </span>
              </a>
            ))}
          </div>
          <div className="mono-total">
            <p>{monograph.totalViews}</p>
            <p className="mono-kicker">Views, and counting</p>
          </div>
        </section>

        <section id="commissions" className="mono-commissions">
          <div>
            <h2>Commissions</h2>
            <p className="mono-kicker">Artists and brands</p>
            <div className="mono-credits">
              {monograph.credits.map((credit, index) => (
                <a
                  key={credit.name}
                  href={credit.href}
                  target="_blank"
                  rel="noopener"
                  className="mono-credit"
                  style={{ "--gem": GEMS[index % GEMS.length] } as React.CSSProperties}
                >
                  <span>{credit.name}</span>
                  <span className="mono-credit-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
            <div className="mono-cases">
              {monograph.caseStudies.map((study) => (
                <div key={study.label}>
                  <p>{study.value}</p>
                  <p>{study.label}</p>
                </div>
              ))}
            </div>
            <RateList rates={monograph.rates} />
          </div>
        </section>

        <section id="enquire" className="mono-enquire">
          <h2>Enquire</h2>
          <p>
            For a new brand deal, sound integration or collaboration.
            <br />
            For anything else, write to <a href={`mailto:${monograph.email}`}>{monograph.email}</a>
          </p>
          <EnquiryForm />
        </section>
      </main>

      <footer className="mono-footer">
        <span>gru vlogs is an independent parody channel by Kane Rowe</span>
        <a href={site.secondaryCta.href} target="_blank" rel="noopener">
          TikTok
        </a>
      </footer>
    </div>
  );
}
