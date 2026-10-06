"use client";

import { OffsetButton } from "@/components/ui/OffsetButton";
import { TypewriterLines } from "@/components/ui/TypewriterLines";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BePartSection } from "@/components/sections/BePartSection";
import { SocialsSection } from "@/components/sections/SocialsSection";
import { ColorStripes } from "@/components/sections/ColorStripes";

const DIN = "'DIN Next W1G', sans-serif";
const CABINET = "'Cabinet Grotesk', sans-serif";
const CHUNKO = "'Chunko Bold Demo', sans-serif";
const PATRICK = "'Patrick Hand SC', cursive";

const BLURB =
  "An exclusive, high-level fundraising dinner designed for high-net-worth individuals, partners, and philanthropic leaders. Directly funds Project Castle.";

const events = [
  {
    kicker: "✦ The Experience",
    title: "Chess on a Yacht (Exclusive)",
    image: "/images/yatch.png",
    imageLeft: false,
  },
  {
    kicker: "✦ The Experience VOL.2",
    title: "Chess & Art Exhibition (Public)",
    image: "/images/girl.jpg",
    imageLeft: true,
  },
  {
    kicker: "✦ Schools Chess Competition",
    title: "Primary & Secondary School Tournaments",
    image: "/images/yatch.png",
    imageLeft: false,
  },
  {
    kicker: "✦ The Corporate Challenge",
    title: "Corporate Chess Tournaments",
    image: "/images/girl.jpg",
    imageLeft: true,
  },
  {
    kicker: "✦ The Main Festival",
    title: "Lagos International Chess Festival (LICF)",
    image: "/images/yatch.png",
    imageLeft: false,
  },
];

function ComingSoon() {
  return (
    <OffsetButton
      face="#FFFFFF"
      shadow="#1D1D1D"
      textColor="#5A5A5A"
      className="w-[180px] sm:w-[223px]"
    >
      <span
        className="uppercase"
        style={{
          fontFamily: DIN,
          fontWeight: 700,
          fontSize: "19px",
          lineHeight: "19px",
        }}
      >
        Coming Soon!
      </span>
    </OffsetButton>
  );
}

function CalendarIcon() {
  return (
    <svg width="31" height="31" viewBox="0 0 26 26" fill="none" aria-hidden>
      <rect x="2" y="4" width="22" height="20" rx="3" fill="#6FD9E5" />
      <path d="M2 9.5h22" stroke="#1D1C1B" strokeWidth="1.5" />
      <path
        d="M8 2.5v4M18 2.5v4"
        stroke="#6FD9E5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="6.5" y="13" width="3.2" height="3.2" rx="0.4" fill="#1D1C1B" />
      <rect x="11.4" y="13" width="3.2" height="3.2" rx="0.4" fill="#1D1C1B" />
      <rect x="16.3" y="13" width="3.2" height="3.2" rx="0.4" fill="#1D1C1B" />
    </svg>
  );
}

export function LandingPage() {
  return (
    <div className="overflow-x-hidden bg-[#FCFCFC] text-[#282828]">
      <SiteNav />

      {/* HERO */}
      <header className="relative h-[100svh] min-h-[640px] w-full overflow-hidden lg:h-[722px] lg:min-h-[722px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/prelanding.jpg"
        >
          <source src="/images/videos/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />

        <div className="relative z-10 flex h-full max-w-[1100px] flex-col items-start justify-center gap-6 px-4 pt-16 sm:px-8 lg:gap-[55px] lg:px-[88px] lg:pt-[40px]">
          <h1
            className="text-white"
            style={{
              fontFamily: DIN,
              fontWeight: 900,
              fontSize: "clamp(34px, 9.375vw, 135px)",
              lineHeight: 0.96,
            }}
          >
            <span className="block whitespace-nowrap">Lagos</span>
            <span className="block whitespace-nowrap">International</span>
            <span className="block whitespace-nowrap">Chess Festival</span>
          </h1>
          <TypewriterLines />
        </div>
      </header>

      <ColorStripes />

      {/* WHY — headline + schedule share one column width */}
      <section
        id="about"
        className="relative bg-[#1D1C1B] px-4 pt-14 pb-16 text-white sm:px-8 lg:px-[178px] lg:pt-[140px] lg:pb-[140px]"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="relative flex flex-col items-start gap-[25px] pr-0 sm:pr-[100px] lg:pr-[140px]">
            <div className="flex items-center gap-[10px]">
              <span className="h-px w-5 bg-white" />
              <p
                style={{
                  fontFamily: PATRICK,
                  fontWeight: 400,
                  fontSize: "clamp(16px, 2vw, 22px)",
                  lineHeight: "24px",
                }}
              >
                a year-long festival of Experience, Culture, and Innovation
              </p>
              <span className="h-px w-5 bg-white" />
            </div>
            <h2
              className="flex w-full max-w-[1046px] flex-wrap gap-x-[0.28em]"
              style={{
                fontFamily: DIN,
                fontWeight: 900,
                fontSize: "clamp(32px, 8.5vw, 100px)",
                lineHeight: 1,
              }}
            >
              {"You Don't Want To Miss Out, Here's Why"
                .split(" ")
                .map((word, i) => (
                  <span key={`${word}-${i}`}>{word}</span>
                ))}
            </h2>
            <img
              src="/images/award.png"
              alt=""
              className="absolute top-0 right-0 hidden h-[110px] w-[110px] rotate-[11deg] object-contain sm:block lg:-top-2 lg:h-[120px] lg:w-[120px]"
            />
          </div>

          <div className="mt-10 flex items-center gap-2 lg:mt-14">
            <CalendarIcon />
            <p
              style={{
                fontFamily: CHUNKO,
                fontWeight: 400,
                fontSize: "clamp(22px, 3vw, 35px)",
                letterSpacing: "0.04em",
                color: "#6FD9E5",
                lineHeight: "31px",
                paddingTop: "5px",
              }}
            >
              DECEMBER 2026
            </p>
          </div>

          <div className="mt-8 flex w-full flex-col gap-4 lg:gap-14">
            {events.map((event, index) => (
              <div key={event.title} className="w-full">
                {index === 2 && (
                  <div className="mt-8 flex items-center gap-2 lg:mt-14 mb-8">
                    <CalendarIcon />
                    <p
                      style={{
                        fontFamily: CHUNKO,
                        fontWeight: 400,
                        fontSize: "clamp(20px, 2.6vw, 35px)",
                        letterSpacing: "0.04em",
                        color: "#6FD9E5",
                        lineHeight: "31px",
                        paddingTop: "5px",
                      }}
                    >
                      2027 SCHEDULE OF EVENTS
                    </p>
                  </div>
                )}
                <article className="flex w-full flex-col items-stretch gap-6 rounded-[30px] border-[8px] border-[#C29F6E] bg-[#F9F4ED] p-4 text-[#282828] sm:p-5 lg:flex-row lg:items-center lg:gap-[45px] lg:p-6">
                  <div
                    className={`order-1 w-full lg:w-[434px] lg:shrink-0 ${event.imageLeft ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <img
                      src={event.image}
                      alt=""
                      className="h-[220px] w-full rounded-[20px] object-cover sm:h-[280px] lg:h-[307px]"
                    />
                  </div>
                  <div
                    className={`order-2 flex w-full min-w-0 flex-col items-start gap-[19px] lg:flex-1 ${event.imageLeft ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <p
                      className="uppercase"
                      style={{
                        fontFamily: CABINET,
                        fontWeight: 800,
                        fontSize: "clamp(16px, 2vw, 25px)",
                        letterSpacing: "0.03em",
                        color: "#A98148",
                        lineHeight: 1,
                      }}
                    >
                      {event.kicker}
                    </p>
                    <h3
                      style={{
                        fontFamily: DIN,
                        fontWeight: 700,
                        fontSize: "clamp(20px, 2vw, 25px)",
                        lineHeight: "28px",
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: DIN,
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "25px",
                      }}
                    >
                      {BLURB}
                    </p>
                    <ComingSoon />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BePartSection />
      <SocialsSection />
      <ColorStripes />
      <SiteFooter />
    </div>
  );
}
