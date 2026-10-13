"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SOCIAL } from "@/lib/site";

const JOST = "var(--font-jost), 'Jost', sans-serif";

const BUILDERS = [
  {
    src: "/images/avatar-1.png",
    name: "Olashile Ayobami",
    title: "Principal Product Designer",
    linkedin: "https://www.linkedin.com/in/olashile-ayobami-07a3ba1b3",
  },
  {
    src: "/images/avatar-2.jpg",
    name: "Pease Adeniji",
    title: "Snr. Software Engineer",
    linkedin: "https://www.linkedin.com/in/peaceadeniji/",
  },
  {
    src: "/images/avatar-3.png",
    name: "Kalu Chinonso",
    title: "Fullstack Dev.",
    linkedin: "https://www.linkedin.com/in/iamkaluchinonso",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative h-auto min-h-[290px] bg-[#151414] text-white lg:h-[290px]">
      {/*
        Figma: 271px skyline in a 290px footer (top: 19px).
        The PNG itself has ~105/750 transparent pixels under the ground bar,
        so we shift it down by that ratio and clip with overflow:hidden.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
        style={{ top: 19 }}
      >
        <img
          src="/images/footerbg.png"
          alt=""
          className="h-full w-full select-none opacity-40"
          style={{
            objectFit: "cover",
            objectPosition: "center bottom",
            transform: "translateY(14%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1235px] flex-col items-start gap-[38px] px-[31px] pt-[71px] pb-16 lg:h-full lg:min-h-[290px] lg:justify-between lg:gap-0 lg:px-0 lg:pt-0 lg:pb-0">
        {/* Mobile: one 38px stack. Desktop: logo / links / socials on one row. */}
        <div className="contents lg:mt-[84px] lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <Link
            href="/#"
            onClick={() => {
              sessionStorage.setItem("licf-entered", "1");
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src="/images/logos/logo.png"
              alt="Lagos International Chess Festival and Chess in Slums Africa"
              className="h-[49px] w-auto mix-blend-lighten"
            />
          </Link>
          <nav className="flex flex-col items-start gap-[22px] lg:flex-row lg:items-center lg:gap-8">
            {[
              ["Home", "/#"],
              ["About LICF", "/about"],
              ["FAQs", "/#be-part"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => {
                  if (href !== "/#") return;
                  sessionStorage.setItem("licf-entered", "1");
                  if (window.location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                style={{ fontFamily: JOST, fontWeight: 400, fontSize: "16px", lineHeight: "22px" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-[10px]">
            <span
              className="hidden lg:inline"
              style={{
                fontFamily: JOST,
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                color: "#8C8984",
              }}
            >
              Follow the journey:
            </span>
            <a href={SOCIAL.instagram} aria-label="Instagram" className="text-white">
              <Ig />
            </a>
            <a href={SOCIAL.x} aria-label="X" className="text-white">
              <XIcon />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-white">
              <InIcon />
            </a>
            <a
              href="mailto:info@lagosinternationalchessfestival.com"
              aria-label="Email"
              className="text-white"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="contents lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between lg:pb-8">
          <p
            className="order-2 max-w-[223px] text-left leading-[25px] lg:order-none lg:max-w-none lg:leading-[22px]"
            style={{ fontFamily: JOST, fontWeight: 400, fontSize: "16px" }}
          >
            © 2026 LICF. Brought to you by Chess in Slums Africa.
          </p>
          <div className="order-1 flex items-center gap-[6px] lg:order-none">
            <span style={{ fontFamily: JOST, fontWeight: 500, fontSize: "16px", lineHeight: "22px" }}>
              Built with ❤️
            </span>
            <BuilderAvatars />
          </div>
        </div>
      </div>
    </footer>
  );
}

function BuilderAvatars() {
  const [active, setActive] = useState<number | null>(null);
  const clusterRef = useRef<HTMLDivElement>(null);
  const avatarRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const coarseRef = useRef(false);
  const [box, setBox] = useState<{ left: number; tail: number; width: number } | null>(null);

  useEffect(() => {
    coarseRef.current = window.matchMedia("(hover: none)").matches;
  }, []);

  useEffect(() => {
    if (active == null) return;
    const place = () => {
      const cluster = clusterRef.current;
      const avatar = avatarRefs.current[active];
      if (!cluster || !avatar) return;
      const clusterBox = cluster.getBoundingClientRect();
      const avatarBox = avatar.getBoundingClientRect();
      const width = Math.min(295, window.innerWidth - 32);
      const center = avatarBox.left - clusterBox.left + avatarBox.width / 2;
      let left = center - width * (227 / 295);
      const minLeft = 16 - clusterBox.left;
      const maxLeft = window.innerWidth - 16 - width - clusterBox.left;
      left = Math.max(minLeft, Math.min(left, maxLeft));
      const tail = Math.min(width - 28, Math.max(8, center - left - 10.5));
      setBox({ left, tail, width });
    };
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [active]);

  const person = active == null ? null : BUILDERS[active];

  return (
    <div
      ref={clusterRef}
      className="relative h-[43px] w-[99px] shrink-0"
      onMouseLeave={() => {
        if (!coarseRef.current) setActive(null);
      }}
    >
      {BUILDERS.map((builder, index) => (
        <button
          key={builder.name}
          type="button"
          ref={(node) => {
            avatarRefs.current[index] = node;
          }}
          aria-label={`${builder.name}, ${builder.title}`}
          aria-expanded={active === index}
          className="absolute top-0 h-[43px] w-[43px] cursor-pointer overflow-hidden rounded-full border-[1.5px] border-[#FFA154] shadow-[0_10px_15px_rgba(255,173,95,0.25)]"
          style={{ left: `${index * 28}px`, zIndex: active === index ? 10 : index + 1 }}
          onMouseEnter={() => {
            if (!coarseRef.current) setActive(index);
          }}
          onFocus={() => setActive(index)}
          onClick={() => {
            if (!coarseRef.current) return;
            setActive((current) => (current === index ? null : index));
          }}
        >
          <img
            src={builder.src}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: index === 1 ? "center 18%" : "center" }}
          />
        </button>
      ))}

      {person && box && (
        <div
          className="absolute z-30"
          style={{ bottom: "100%", left: box.left, width: box.width, paddingBottom: 8 }}
        >
          <div className="relative min-h-[93px] rounded-[8px] bg-[#ED9248] px-5 pt-[15px] pb-[15px]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 flex-col items-start gap-[7px]">
                <p
                  className="text-white"
                  style={{
                    fontFamily: JOST,
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "23px",
                  }}
                >
                  {person.name}
                </p>
                <p
                  style={{
                    fontFamily: JOST,
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "23px",
                    color: "#EFEFEF",
                  }}
                >
                  {person.title}
                </p>
              </div>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} on LinkedIn`}
                className="mt-[2px] shrink-0 text-white"
              >
                <LinkedInMark />
              </a>
            </div>
            <span
              aria-hidden
              className="absolute h-0 w-0"
              style={{
                left: box.tail,
                bottom: -13,
                borderLeft: "10.5px solid transparent",
                borderRight: "10.5px solid transparent",
                borderTop: "14px solid #ED9248",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function LinkedInMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
    </svg>
  );
}

function Ig() {
  return (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" aria-hidden>
      <rect x="2" y="2" width="19" height="18" rx="5" stroke="white" strokeWidth="1.6" />
      <circle cx="11.5" cy="11" r="4" stroke="white" strokeWidth="1.6" />
      <circle cx="16.5" cy="6" r="1" fill="white" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="white" aria-hidden>
      <path d="M17.2 1.4h3.2L13.6 9.2 21.6 20.6h-5.6l-4.4-5.8-5 5.8H3.4l7.2-8.3L2 1.4h5.8l4 5.3 5.4-5.3Zm-1.1 17.2h1.8L7.2 3.1H5.3l10.8 15.5Z" />
    </svg>
  );
}

function InIcon() {
  return (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="white" aria-hidden>
      <path d="M5.2 8.2H2.2V20h3V8.2ZM3.7 2.2A1.8 1.8 0 1 0 3.7 5.8 1.8 1.8 0 0 0 3.7 2.2ZM20.8 20h-3v-6.1c0-1.7-.6-2.8-2.1-2.8-1.1 0-1.8.8-2.1 1.5-.1.3-.1.7-.1 1.1V20h-3s.04-9.7 0-10.7h3v1.5c.4-.6 1.1-1.6 2.8-1.6 2 0 3.5 1.3 3.5 4.2V20Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" aria-hidden>
      <rect x="2" y="4" width="19" height="14" rx="2" stroke="white" strokeWidth="1.6" />
      <path d="M3 6.5 11.5 12 20 6.5" stroke="white" strokeWidth="1.6" />
    </svg>
  );
}
