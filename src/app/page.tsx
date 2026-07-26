import { SiteNav } from "@/components/site/site-nav";
import { Hero } from "@/components/site/hero";
import { BentoStats } from "@/components/site/bento-stats";
import { Work } from "@/components/site/work";
import { Experience } from "@/components/site/experience";
import { Skills } from "@/components/site/skills";
import { Education } from "@/components/site/education";
import { WorkAuthorisationBanner } from "@/components/site/work-authorisation-banner";
import { ContactFooter } from "@/components/site/contact-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen">
        <Hero />
        <BentoStats />
        <Work />
        <Experience />
        <Skills />
        <Education />
        <WorkAuthorisationBanner />
        <ContactFooter />
      </main>
    </>
  );
}
