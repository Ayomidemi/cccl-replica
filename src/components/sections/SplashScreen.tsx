"use client";

interface SplashScreenProps {
  onEnter: () => void;
}

function CornerBrackets() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {/* Vector 40 — top-left */}
      <span className="absolute left-0 top-0 h-[8px] w-[8px] border-l border-t border-white" />
      {/* Vector 41 — top-right */}
      <span className="absolute right-0 top-0 h-[8px] w-[8px] border-r border-t border-white" />
      {/* Vector 42 — bottom-left */}
      <span className="absolute bottom-0 left-0 h-[8px] w-[8px] border-b border-l border-white" />
      {/* Vector 43 — bottom-right */}
      <span className="absolute bottom-0 right-0 h-[8px] w-[8px] border-b border-r border-white" />
    </div>
  );
}

export function SplashScreen({ onEnter }: SplashScreenProps) {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      {/* PRE-LANDING PAGE — background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/prelanding.jpg)" }}
      />

      {/* DASHBOARD — rgba(0, 0, 0, 0.85) */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.85)]" />

      {/* Centered content (middle on all breakpoints, especially mobile) */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-3 sm:px-5 lg:px-8">
        {/*
          LAGOS, ARE YOU READY?
          font-family: 'Chunko Bold Demo'
          font-weight: 400
          font-size: 100px
          line-height: 130px
          letter-spacing: 0.04em
          text-align: center
          color: #FFFFFF
          Figma width was 883px — widened on web so line 2 stays one line
        */}
        <h1
          className="text-center text-white"
          style={{
            fontFamily: "'Chunko Bold Demo', sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "clamp(2.15rem, 8.5vw, 100px)",
            lineHeight: 1.3,
            letterSpacing: "0.04em",
            width: "min(100%, 1200px)",
          }}
        >
          <span className="block whitespace-nowrap">LAGOS,</span>
          <span className="block whitespace-nowrap">ARE YOU READY?</span>
        </h1>

        {/*
          Component 97 / CTA
          width: 290px; height: 57px
          fill: #EB6601
          button text: Impact / 17px / letter-spacing 0.03em / #FFFFFF
        */}
        <button
          type="button"
          onClick={onEnter}
          className="relative mt-8 h-[57px] w-[min(290px,85vw)] shrink-0 cursor-pointer sm:mt-10 md:mt-12"
          aria-label="Let's make history"
        >
          <CornerBrackets />

          {/* CTA inset: left/right 1.03%, top/bottom 5.26% */}
          <span className="absolute inset-x-[1.03%] inset-y-[5.26%] flex items-center justify-center gap-[7px] bg-[#EB6601] transition-colors hover:bg-[#d95c00] active:bg-[#c45300]">
            <span
              className="inline-flex items-center gap-[7px] uppercase text-white"
              style={{
                fontFamily: "'Impact', sans-serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "17px",
                lineHeight: "18px",
                letterSpacing: "0.03em",
              }}
            >
              LET&apos;S MAKE HISTORY
              {/* Filled chevron — heavier weight, optically level with Impact caps */}
              <svg
                className="shrink-0 -translate-y-[1px]"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M1.2 0.4L7.2 6L1.2 11.6L0 10.3L4.8 6L0 1.7L1.2 0.4Z" />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
