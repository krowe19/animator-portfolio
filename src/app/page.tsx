import { AboutSection } from "@/components/about/AboutSection";
import { Hero } from "@/components/hero/Hero";
import { CollaborationsSection } from "@/components/layout/CollaborationsSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/layout/Section";
import { TikTokSection } from "@/components/tiktok/TikTokSection";
import { about } from "@/content/about";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Section
          id="work"
          heading="Selected collaborations"
          headingId="work-heading"
          intro="Proof of brand-ready 3D — not just views."
        >
          <CollaborationsSection />
        </Section>
        <Section
          id="tiktok"
          heading="gru vlogs"
          headingId="tiktok-heading"
          intro="The character world behind the numbers."
        >
          <TikTokSection />
        </Section>
        <Section id="about" heading={about.heading} headingId="about-heading">
          <AboutSection />
        </Section>
      </main>
      <Footer />
    </>
  );
}
