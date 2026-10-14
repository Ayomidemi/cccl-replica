"use client";

import { OffsetButton, ButtonArrow } from "@/components/ui/OffsetButton";
import { TypewriterLines } from "@/components/ui/TypewriterLines";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BePartSection } from "@/components/sections/BePartSection";
import { SocialsSection } from "@/components/sections/SocialsSection";
import { ColorStripes } from "@/components/sections/ColorStripes";
import { StorySection } from "@/components/sections/StorySection";

const DIN = "'DIN Next W1G', sans-serif";
const JOST = "var(--font-jost), 'Jost', sans-serif";
const ATTEND_FORM = "https://forms.gle/N1hhTjS6UcCFZ9p86";
const CABINET = "'Cabinet Grotesk', sans-serif";
const CHUNKO = "'Chunko Bold Demo', sans-serif";
const PATRICK = "'Patrick Hand SC', cursive";

const events = [
  {
    kicker: "✦ The Experience",
    title: "Chess on a Yacht (Exclusive)",
    body: "This is where the journey begins. Chess meets the Lagos creative and social scene, with an exclusive evening of chess on a yacht.",
    image: "/images/miss/one.jpg",
    imageLeft: false,
  },
  {
    kicker: "✦ The Experience 2.0",
    title: "Chess & Art Exhibition (Public)",
    body: "This is a Chess and Art Exhibition event for the public, where the game and art share the same walls.",
    image: "/images/miss/two.jpg",
    imageLeft: true,
  },
  {
    kicker: "✦ Schools Chess Competition",
    title: "Primary & Secondary School Tournaments",
    body: "Young players and schools from across Lagos compete over two tournament days. This is a key step on the journey to the main festival.",
    image: "/images/miss/three.jpg",
    imageLeft: false,
  },
  {
    kicker: "✦ The Corporate Challenge",
    title: "Corporate Chess Tournaments",
    body: "Professionals from corporate organisations across different industries will meet over the board to play each other in a tournament designed for them. Colleagues become teammates, and the boardroom moves to the chessboard.",
    image: "/images/miss/four.png",
    imageLeft: true,
  },
  {
    kicker: "✦ The Main Festival",
    title: "Lagos International Chess Festival (LICF)",
    body: "The main festival brings local and international players, children, corporates, creatives, celebrities, delegates and the wider public for the grand finale of the entire journey.",
    image: "/images/miss/five.jpg",
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
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 shrink-0 md:h-[26px] md:w-[26px]"
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
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/prelanding.jpg"
        >
          <source
            src="/images/videos/heromobile.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
          <source
            src="/images/videos/herovideo.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
        </video>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />

        <div className="relative z-10 flex h-full max-w-[1100px] flex-col items-start justify-center gap-6 px-[20px] pt-16 sm:px-8 lg:gap-[55px] lg:px-[88px] lg:pt-[40px]">
          <h1
            className="text-[min(65px,calc((100vw-40px)/6.52))] leading-[1.08] font-[800] text-white md:text-[clamp(72px,9.375vw,135px)] md:leading-[0.96] md:font-[900]"
            style={{
              fontFamily: DIN,
            }}
          >
            <span className="block whitespace-nowrap">Lagos</span>
            <span className="block whitespace-nowrap">International</span>
            <span className="block whitespace-nowrap">Chess Festival</span>
          </h1>
          <TypewriterLines />
          <div className="mt-2 flex w-full max-w-[372px] flex-col gap-8 md:hidden">
            <OffsetButton
              href={ATTEND_FORM}
              className="w-full"
              face="#EB6601"
              shadow="#14DDBD"
            >
              <span
                className="whitespace-nowrap text-[18px]"
                style={{
                  fontFamily: JOST,
                  fontWeight: 700,
                  lineHeight: "18px",
                }}
              >
                I&apos;d Love To Attend
              </span>
              <ButtonArrow />
            </OffsetButton>
            <OffsetButton
              href="#be-part"
              className="w-full"
              face="#FFFFFF"
              shadow="#FEE8A8"
              textColor="#282828"
            >
              <span
                className="whitespace-nowrap text-[18px]"
                style={{
                  fontFamily: JOST,
                  fontWeight: 700,
                  lineHeight: "18px",
                }}
              >
                Become A Sponsor
              </span>
              <ButtonArrow />
            </OffsetButton>
          </div>
        </div>
      </header>

      <ColorStripes />

      <StorySection />

      {/* WHY — headline + schedule share one column width */}
      <section
        id="about"
        className="relative bg-[#1D1C1B] px-[27px] pt-[65px] pb-16 text-white md:px-8 md:pt-14 lg:px-[178px] lg:pt-[140px] lg:pb-[140px]"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="relative flex flex-col items-start gap-7 pr-0 md:gap-[25px] md:pr-[100px] lg:pr-[140px]">
            <div className="flex items-center gap-[10px]">
              <span className="hidden h-px w-5 bg-white md:block" />
              <p
                className="w-[233px] text-[18px] leading-[24px] md:w-auto md:text-[clamp(16px,2vw,22px)]"
                style={{
                  fontFamily: PATRICK,
                  fontWeight: 400,
                }}
              >
                a year-long festival of Experience, Culture, and Innovation
              </p>
              <span className="hidden h-px w-5 bg-white md:block" />
            </div>
            <h2
              className="max-w-[339px] text-[65px] leading-[70px] font-[750] md:flex md:w-full md:max-w-[1046px] md:flex-wrap md:gap-x-[0.28em] md:text-[clamp(32px,8.5vw,100px)] md:leading-none md:font-[900]"
              style={{ fontFamily: DIN }}
            >
              <span className="md:hidden">
                You Don&apos;t
                <br />
                Want To
                <br />
                Miss Out,
                <br />
                Here&apos;s Why
              </span>
              <span className="hidden md:contents">
                {"You Don't Want To Miss Out, Here's Why"
                  .split(" ")
                  .map((word, i) => (
                    <span key={`${word}-${i}`}>{word}</span>
                  ))}
              </span>
            </h2>
            <img
              src="/images/award.png"
              alt=""
              className="award-roll absolute top-[2px] right-[22px] h-[70px] w-[70px] object-contain md:top-0 md:right-0 md:h-[110px] md:w-[110px] lg:-top-2 lg:h-[120px] lg:w-[120px]"
            />
          </div>

          <div className="mt-10 flex items-center gap-[10px] lg:mt-18">
            <CalendarIcon />
            <p
              className="whitespace-nowrap"
              style={{
                fontFamily: CHUNKO,
                fontWeight: 400,
                fontSize: "clamp(18px, 5.2vw, 35px)",
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
                  <div className="mt-8 mb-8 flex items-center gap-[10px] lg:mt-14">
                    <CalendarIcon />
                    <p
                      className="whitespace-nowrap"
                      style={{
                        fontFamily: CHUNKO,
                        fontWeight: 400,
                        fontSize: "clamp(18px, 5.2vw, 35px)",
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
                      {event.body}
                    </p>
                    <div className="mt-4 sm:mt-6 lg:mt-8">
                      <ComingSoon />
                    </div>
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
