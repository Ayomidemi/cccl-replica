"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { SplashScreen } from "@/components/sections/SplashScreen";
import { Hero } from "@/components/sections/Hero";
import { ReadySection } from "@/components/sections/ReadySection";
import { ParticipationSection } from "@/components/sections/ParticipationSection";
import { OrganizersSection } from "@/components/sections/OrganizersSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleEnter = () => {
    setShowMainContent(true);
  };

  if (!showMainContent) {
    return <SplashScreen onEnter={handleEnter} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <ReadySection />
        <section id="participation">
          <ParticipationSection />
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
