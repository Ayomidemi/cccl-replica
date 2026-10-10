import Link from "next/link";

const JOST = "var(--font-jost), 'Jost', sans-serif";

export function SiteFooter() {
  return (
    <footer className="relative h-auto min-h-[290px] overflow-hidden bg-[#151414] text-white lg:h-[290px]">
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
          className="h-full w-full select-none"
          style={{
            objectFit: "cover",
            objectPosition: "center bottom",
            transform: "translateY(14%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full min-h-[290px] w-full max-w-[1235px] flex-col justify-between px-4 py-10 sm:px-8 lg:px-0 lg:py-0">
        {/* Figma top ~84px */}
        <div className="flex flex-col items-center justify-between gap-6 lg:mt-[84px] lg:flex-row lg:gap-8">
          <Link href="/">
            <img
              src="/images/logos/logo.png"
              alt="Lagos International Chess Festival and Chess in Slums Africa"
              className="h-[42px] w-auto mix-blend-lighten lg:h-[49px]"
            />
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              ["Home", "/"],
              ["About LICF", "/about"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                style={{ fontFamily: JOST, fontWeight: 400, fontSize: "16px", lineHeight: "22px" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-[10px]">
            <span
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
            <a href="https://instagram.com/chessinslums" aria-label="Instagram" className="text-white">
              <Ig />
            </a>
            <a href="https://twitter.com/chessinslums" aria-label="X" className="text-white">
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

        {/* Figma copyright ~204px / built-with ~191px from top */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 pb-6 sm:flex-row lg:mt-0 lg:pb-8">
          <p
            className="text-center sm:text-left"
            style={{ fontFamily: JOST, fontWeight: 400, fontSize: "16px", lineHeight: "22px" }}
          >
            © 2026 LICF. Brought to you by Chess in Slums Africa.
          </p>
          <div className="flex items-center gap-[6px]">
            <span style={{ fontFamily: JOST, fontWeight: 500, fontSize: "16px", lineHeight: "22px" }}>
              Built with ❤️
            </span>
            <div className="flex items-center pl-1">
              {["/images/avatar-1.png", "/images/avatar-2.png", "/images/avatar-3.png"].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="-ml-3 h-[43px] w-[43px] rounded-full border-[1.5px] border-[#FFA154] object-cover shadow-[0_10px_15px_rgba(255,173,95,0.25)] first:ml-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
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
