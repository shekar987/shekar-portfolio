import { SiteNav } from "@/components/site/site-nav";
import { Hero } from "@/components/site/hero";
import { Work } from "@/components/site/work";
import { Experience } from "@/components/site/experience";
import { Skills } from "@/components/site/skills";
import { Education } from "@/components/site/education";
import { ContactFooter } from "@/components/site/contact-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Education />
        <ContactFooter />
      </main>
    </>
  );
}
