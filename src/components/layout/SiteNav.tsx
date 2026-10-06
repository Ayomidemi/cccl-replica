"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Hamburger } from "@/components/ui/Icons";
import { OffsetButton, ButtonArrow } from "@/components/ui/OffsetButton";

const JOST = "var(--font-jost), 'Jost', sans-serif";
const IMPACT = "'Impact', sans-serif";

function CornerFrame({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className="relative inline-flex h-[46px] w-[56px] shrink-0 items-center justify-center">
      <span className="absolute left-0 top-0 h-[6.5px] w-[6.5px] border-l border-t border-[#E5792B]" />
      <span className="absolute right-0 top-0 h-[6.5px] w-[6.5px] border-r border-t border-[#E5792B]" />
      <span className="absolute bottom-0 left-0 h-[6.5px] w-[6.5px] border-b border-l border-[#E5792B]" />
      <span className="absolute bottom-0 right-0 h-[6.5px] w-[6.5px] border-r border-b border-[#E5792B]" />
      <span
        className={`absolute inset-[2.5px] flex items-center justify-center ${dark ? "bg-black" : "bg-[#57595C]"}`}
      >
        {children}
      </span>
    </span>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M3 3L15 15M15 3L3 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SiteNav({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bePartHref = "/#be-part";
  const logoClass =
    tone === "light"
      ? "h-[34px] w-auto brightness-0 sm:h-[42px] lg:h-[49px]"
      : "h-[34px] w-auto mix-blend-lighten sm:h-[42px] lg:h-[49px]";

  return (
    <>
      {/* Sticky chrome — hamburger + logo left, CTA right (hidden while curtain is open) */}
      {!open && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
          <div className="pointer-events-auto flex items-center justify-between gap-3 px-4 pt-5 sm:px-8 lg:px-[85px] lg:pt-[23px]">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={false}
                onClick={() => setOpen(true)}
                className="cursor-pointer"
              >
                <CornerFrame>
                  <Hamburger size={31} />
                </CornerFrame>
              </button>
              {!scrolled && (
                <Link href="/">
                  <img
                    src="/images/logos/logo.png"
                    alt="Lagos International Chess Festival"
                    className={logoClass}
                  />
                </Link>
              )}
            </div>

            <div className="hidden md:block">
              <OffsetButton
                href={bePartHref}
                className="w-[223px]"
                face="#EB6601"
                shadow="#14DDBD"
              >
                <span
                  className="whitespace-nowrap text-[18px]"
                  style={{ fontFamily: JOST, fontWeight: 700, lineHeight: "18px" }}
                >
                  I&apos;d Love To Attend
                </span>
                <ButtonArrow />
              </OffsetButton>
            </div>
          </div>
        </div>
      )}

      {/* Curtain menu — slides down from the top */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="curtain"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-40 flex flex-col"
          >
            <div className="relative bg-white shadow-lg">
              <div className="relative mx-auto flex h-[95px] max-w-[1440px] items-center px-4 sm:px-8 lg:px-[85px]">
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="cursor-pointer"
                  >
                    <CornerFrame dark>
                      <CloseIcon />
                    </CornerFrame>
                  </button>
                  <Link href="/" onClick={() => setOpen(false)}>
                    <img
                      src="/images/logos/logo.png"
                      alt="Lagos International Chess Festival"
                      className="h-[40px] w-auto brightness-0 sm:h-[49px]"
                    />
                  </Link>
                </div>

                <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex">
                  {[
                    ["HOME", "/"],
                    ["ABOUT LICF", "/about"],
                  ].map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-center uppercase"
                      style={{
                        fontFamily: IMPACT,
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "25px",
                        letterSpacing: "0.02em",
                        color: "#282828",
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>

                <div className="ml-auto hidden md:block">
                  <OffsetButton
                    href={bePartHref}
                    className="w-[200px] lg:w-[223px]"
                    face="#EB6601"
                    shadow="#14DDBD"
                    onClick={() => setOpen(false)}
                  >
                    <span
                      className="whitespace-nowrap text-[16px] lg:text-[18px]"
                      style={{ fontFamily: JOST, fontWeight: 700, lineHeight: "18px" }}
                    >
                      Register To Attend
                    </span>
                    <ButtonArrow />
                  </OffsetButton>
                </div>
              </div>

              <div className="flex flex-col gap-5 border-t border-black/5 px-6 py-5 md:hidden">
                {[
                  ["HOME", "/"],
                  ["ABOUT LICF", "/about"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="uppercase"
                    style={{
                      fontFamily: IMPACT,
                      fontWeight: 400,
                      fontSize: "20px",
                      letterSpacing: "0.02em",
                      color: "#282828",
                    }}
                  >
                    {label}
                  </Link>
                ))}
                <OffsetButton
                  href={bePartHref}
                  className="w-full max-w-[240px]"
                  face="#EB6601"
                  shadow="#14DDBD"
                  onClick={() => setOpen(false)}
                >
                  <span
                    className="whitespace-nowrap text-[16px]"
                    style={{ fontFamily: JOST, fontWeight: 700, lineHeight: "18px" }}
                  >
                    Register To Attend
                  </span>
                  <ButtonArrow />
                </OffsetButton>
              </div>
            </div>

            <div
              className="flex h-[41px] w-[min(264px,85vw)] items-center gap-3 bg-black pl-[17px] pr-4"
              style={{
                clipPath: "polygon(0 0, 100% 0, calc(100% - 28px) 100%, 0 100%)",
              }}
            >
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: JOST,
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#FFFFFF",
                }}
              >
                Follow the journey:
              </span>
              <a
                href="https://twitter.com/chessinslums"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="shrink-0"
              >
                <XIconTeal />
              </a>
              <a
                href="https://instagram.com/chessinslums"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="shrink-0"
              >
                <IgIconTeal />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function XIconTeal() {
  return (
    <svg width="15" height="15" viewBox="0 0 23 22" fill="#14DDBD" aria-hidden>
      <path d="M17.2 1.4h3.2L13.6 9.2 21.6 20.6h-5.6l-4.4-5.8-5 5.8H3.4l7.2-8.3L2 1.4h5.8l4 5.3 5.4-5.3Zm-1.1 17.2h1.8L7.2 3.1H5.3l10.8 15.5Z" />
    </svg>
  );
}

function IgIconTeal() {
  return (
    <svg width="15" height="15" viewBox="0 0 23 22" fill="none" aria-hidden>
      <rect x="2" y="2" width="19" height="18" rx="5" stroke="#14DDBD" strokeWidth="1.6" />
      <circle cx="11.5" cy="11" r="4" stroke="#14DDBD" strokeWidth="1.6" />
      <circle cx="16.5" cy="6" r="1" fill="#14DDBD" />
    </svg>
  );
}
