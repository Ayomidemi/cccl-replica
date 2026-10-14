"use client";

import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BePartSection } from "@/components/sections/BePartSection";
import { SocialsSection } from "@/components/sections/SocialsSection";
import { ColorStripes } from "@/components/sections/ColorStripes";

const DIN = "'DIN Next W1G', sans-serif";
const PATRICK = "'Patrick Hand SC', cursive";

const QUOTE =
  "THIS FESTIVAL EXISTS BECAUSE A BOY FROM THE SLUMS OF LAGOS LEARNED TO PLAY CHESS, AND DECIDED EVERY CHILD DESERVES THE SAME CHANCE AT THE TOP.";

const SECTIONS = [
  {
    title: "What Is LICF",
    body: "The Lagos International Chess Festival (LICF) is an upcoming annual festival, preluded by a series of year-long events, and the first international chess festival of its kind in Nigeria. Each event milestone builds toward the main festival in 2027, where children, professionals, celebrities, corporations and the global chess community share one stage.",
  },
  {
    title: "More Than a Festival",
    body: "LICF shows what chess can do in the world. Chess is a common language. Around it, LICF brings together education, innovation, culture and social impact in a way only Lagos can host. Follow the journey and come with us as every move builds toward October.",
  },
  {
    title: "Why Lagos?",
    body: "Lagos is where industries are born and futures are built. LICF brings chess to the place where transformation already happens, and invites the world to take part in it.",
  },
];

/* Figma collage — coords relative to 999×782 parent frame */
const COLLAGE: {
  src: string;
  alt: string;
  className: string;
  z: number;
  objectPosition?: string;
}[] = [
  {
    src: "/images/about/about1.jpg",
    alt: "Chess in Slums Africa team with the Nigerian flag",
    className:
      "left-[1%] top-[18%] w-[36%] aspect-[359/309] -rotate-[3.21deg]",
    z: 2,
  },
  {
    src: "/images/about/about2.jpg",
    alt: "Teaching chess in the community",
    className:
      "left-[40%] top-[23%] w-[47.5%] aspect-[474/211] rotate-[0.15deg]",
    z: 1,
  },
  {
    src: "/images/about/about4.jpg",
    alt: "Guinness World Record celebration",
    className: "left-0 top-[62%] w-[37%] aspect-[371/296]",
    objectPosition: "center top",
    z: 3,
  },
  {
    src: "/images/about/about3.jpg",
    alt: "Mentorship moment with school children",
    className:
      "left-[40%] top-[54%] w-[59%] aspect-[589/305] rotate-[1.78deg]",
    z: 2,
  },
];

export function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-[#F9F4ED] text-[#282828]">
      <SiteNav tone="light" />

      <main className="mx-auto w-full max-w-[1440px] px-4 pt-28 sm:px-8 lg:px-[220px] lg:pt-[133px]">
        {/* Quote + collage */}
        <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center">
          <p
            className="w-full max-w-[900px] text-left uppercase leading-[34px] sm:text-center sm:leading-[43px]"
            style={{
              fontFamily: PATRICK,
              fontWeight: 400,
              fontSize: "clamp(20px, 2.4vw, 35px)",
              color: "#282828",
            }}
          >
            {QUOTE}
          </p>

          <div className="relative -mx-4 -mt-6 aspect-[430/347] w-[calc(100%+2rem)] sm:-mx-8 sm:-mt-8 sm:w-[calc(100%+4rem)] md:mx-0 md:aspect-[999/782] md:w-full md:max-w-[1000px] lg:-mt-10">
            {COLLAGE.map((img) => (
              <div
                key={img.src}
                className={`absolute overflow-hidden rounded-[3px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] ${img.className}`}
                style={{ zIndex: img.z }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: img.objectPosition ?? "center" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copy blocks */}
        <div className="mx-auto mt-16 flex w-full max-w-[1006px] flex-col items-center gap-12 pb-24 sm:gap-16 lg:mt-[110px] lg:gap-[75px] lg:pb-32">
          {SECTIONS.map((block) => (
            <section
              key={block.title}
              className="flex w-full flex-col items-center gap-[20px] text-center"
            >
              <h2
                style={{
                  fontFamily: DIN,
                  fontWeight: 900,
                  fontSize: "clamp(36px, 5.5vw, 80px)",
                  lineHeight: 1.19,
                  letterSpacing: "0.05em",
                  color: "#282828",
                }}
              >
                {block.title}
              </h2>
              <p
                className="max-w-[1006px] leading-[1.45] sm:leading-[40px]"
                style={{
                  fontFamily: DIN,
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.7vw, 24px)",
                  color: "#282828",
                }}
              >
                {block.body}
              </p>
            </section>
          ))}
        </div>
      </main>

      <BePartSection />
      <SocialsSection />
      <ColorStripes />
      <SiteFooter />
    </div>
  );
}
