import Link from "next/link";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BePartSection } from "@/components/sections/BePartSection";
import { SocialsSection } from "@/components/sections/SocialsSection";
import { ColorStripes } from "@/components/sections/ColorStripes";
import { OffsetButton, ButtonArrow } from "@/components/ui/OffsetButton";

const DIN = "'DIN Next W1G', sans-serif";
const JOST = "var(--font-jost), 'Jost', sans-serif";
const PATRICK = "'Patrick Hand SC', cursive";

export default function NotFound() {
  return (
    <div className="overflow-x-hidden bg-[#F9F4ED] text-[#282828]">
      <SiteNav tone="light" />

      <main className="mx-auto flex min-h-[70svh] w-full max-w-[900px] flex-col items-center justify-center px-4 pt-32 pb-20 text-center sm:px-8 lg:pt-40 lg:pb-28">
        <p
          className="uppercase"
          style={{
            fontFamily: PATRICK,
            fontWeight: 400,
            fontSize: "clamp(18px, 2vw, 24px)",
            lineHeight: 1.2,
            color: "#087361",
          }}
        >
          Wrong square
        </p>
        <h1
          className="mt-3"
          style={{
            fontFamily: DIN,
            fontWeight: 900,
            fontSize: "clamp(72px, 14vw, 160px)",
            lineHeight: 0.95,
            letterSpacing: "0.04em",
            color: "#282828",
          }}
        >
          404
        </h1>
        <p
          className="mt-6 max-w-[520px]"
          style={{
            fontFamily: DIN,
            fontWeight: 400,
            fontSize: "clamp(18px, 2vw, 24px)",
            lineHeight: 1.5,
            color: "#282828",
          }}
        >
          This page isn&apos;t on the board. Head home or learn more about the
          festival while you&apos;re here.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <OffsetButton href="/#" className="w-[200px]" face="#EB6601" shadow="#14DDBD">
            <span
              className="whitespace-nowrap text-[16px]"
              style={{ fontFamily: JOST, fontWeight: 700, lineHeight: "18px" }}
            >
              Back Home
            </span>
            <ButtonArrow />
          </OffsetButton>
          <Link
            href="/about"
            className="inline-flex h-[52px] items-center justify-center px-2 underline-offset-4 transition-opacity hover:opacity-70"
            style={{
              fontFamily: JOST,
              fontWeight: 600,
              fontSize: "16px",
              color: "#282828",
            }}
          >
            About LICF
          </Link>
        </div>
      </main>

      <BePartSection />
      <SocialsSection />
      <ColorStripes />
      <SiteFooter />
    </div>
  );
}
