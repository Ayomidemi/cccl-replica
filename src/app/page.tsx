import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { ReadySection } from "@/components/sections/ReadySection";
import { ParticipationSection } from "@/components/sections/ParticipationSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { OrganizersSection } from "@/components/sections/OrganizersSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <ReadySection />
        <section id="participation">
          <ParticipationSection />
        </section>
        <section id="vision">
          <VisionSection />
        </section>
        <section id="organizers">
          <OrganizersSection />
        </section>
        <section id="platform">
          <PlatformSection />
        </section>
        <section id="partners">
          <PartnersSection />
        </section>
        <FooterSection />
      </main>
    </div>
  );
}
