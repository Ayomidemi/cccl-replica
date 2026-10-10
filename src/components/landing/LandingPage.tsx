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
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4362_1706)">
        <path
          d="M0 20.5833C0 23.5701 2.42992 26 5.41667 26H20.5833C23.5701 26 26 23.5701 26 20.5833V10.8333H0V20.5833ZM3.25 16.25C3.25 15.0551 4.22175 14.0833 5.41667 14.0833H7.58333C8.77825 14.0833 9.75 15.0551 9.75 16.25V18.4167C9.75 19.6116 8.77825 20.5833 7.58333 20.5833H5.41667C4.22175 20.5833 3.25 19.6116 3.25 18.4167V16.25ZM7.58442 18.4167H5.41667V16.25H7.58333L7.58442 18.4167ZM26 7.58333V8.66667H0V7.58333C0 4.59658 2.42992 2.16667 5.41667 2.16667H6.5V1.08333C6.5 0.485333 6.98533 0 7.58333 0C8.18133 0 8.66667 0.485333 8.66667 1.08333V2.16667H17.3333V1.08333C17.3333 0.485333 17.8187 0 18.4167 0C19.0147 0 19.5 0.485333 19.5 1.08333V2.16667H20.5833C23.5701 2.16667 26 4.59658 26 7.58333Z"
          fill="#6FD9E5"
        />
      </g>
      <defs>
        <clipPath id="clip0_4362_1706">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
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
          className="absolute inset-0 h-full w-full object-cover md:hidden"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/prelanding.jpg"
        >
          <source src="/images/videos/heromobile.mp4" type="video/mp4" />
        </video>
        <video
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
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
              className="award-roll absolute top-0 right-0 hidden h-[110px] w-[110px] object-contain sm:block lg:-top-2 lg:h-[120px] lg:w-[120px]"
            />
          </div>

          <div className="mt-10 flex items-center gap-2 lg:mt-18">
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
              DECEMBER, 2026 SCHEDULE
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
