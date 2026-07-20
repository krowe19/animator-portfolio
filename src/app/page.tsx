import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Hero } from "@/components/hero/Hero";
import { CollaborationsSection } from "@/components/layout/CollaborationsSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/layout/Section";
import { TikTokSection } from "@/components/tiktok/TikTokSection";
import { about } from "@/content/about";
import { contact } from "@/content/contact";
import { tiktokProfile } from "@/content/tiktok";

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
        >
          <CollaborationsSection />
        </Section>
        <Section
          id="tiktok"
          heading="gru vlogs"
          headingId="tiktok-heading"
          headingClassName="text-4xl md:text-6xl"
          headerClassName="mb-6 md:mb-8"
          intro={
            <>
              <div>The character world behind the numbers.</div>
              <div>{tiktokProfile.bio}</div>
            </>
          }
        >
          <TikTokSection />
        </Section>
        <Section
          id="about"
          heading={about.heading}
          headingId="about-heading"
          className="!pb-12 md:!pb-16"
        >
          <AboutSection />
        </Section>
        <Section
          id="work-with-me"
          heading={contact.heading}
          headingId="work-with-me-heading"
          className="!pt-12 md:!pt-16"
        >
          <ContactSection />
        </Section>
      </main>
      <Footer />
    </>
  );
}
