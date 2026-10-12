const DIN = "'DIN Next W1G', sans-serif";
const JOST = "var(--font-jost), 'Jost', sans-serif";

export function BePartSection() {
  return (
    <section id="be-part" className="bg-[#FCFCFC] px-4 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto flex max-w-[977px] flex-col items-start text-left sm:items-center sm:text-center">
        <h2
          style={{
            fontFamily: DIN,
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 55px)",
            lineHeight: 1.36,
          }}
        >
          Want to be a part of history?
          <br />
          <span className="inline-flex flex-wrap items-center justify-start gap-3 sm:justify-center">
            Spots are limited, the clock is ticking.
            <span className="inline-flex h-[39px] w-[54px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-[#ECECEC] bg-white">
              <img
                src="/images/videos/clock.gif"
                alt=""
                className="h-full w-full object-cover"
              />
            </span>
          </span>
        </h2>
      </div>

      <div className="mx-auto mt-10 flex max-w-[620px] flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
        {["Request Sponsorship Deck", "Request Vendor Deck"].map((label) => (
          <button
            key={label}
            type="button"
            className="flex h-[43px] w-full items-center justify-center gap-[5px] rounded-[22px] bg-[#E4EDFD] px-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d7e5fc] hover:shadow-md active:translate-y-0 sm:w-[300px]"
          >
            <img src="/images/pdf.png" alt="" className="h-6 w-6 object-contain" />
            <span
              style={{
                fontFamily: JOST,
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "25px",
                color: "#282828",
              }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 grid max-w-[839px] gap-5 lg:grid-cols-2">
        {[
          {
            title: "TO SPONSOR THE FESTIVAL EVENTS, TOURNAMENTS & PROJECTS",
            flip: true,
            src: "/images/black-knight.png",
            email: "partnerships@lagosinternationalchessfestival.com",
          },
          {
            title: "TO BECOME AN EXHIBITOR OR SECURE A SPOT FOR YOUR BRAND",
            flip: false,
            src: "/images/black-bishop.png",
            email: "info@lagosinternationalchessfestival.com",
          },
        ].map(({ title, flip, src, email }) => (
          <article
            key={title}
            className="relative min-h-[330px] rounded-[18px] bg-[#E8E8E8] px-6 pt-6 pb-8"
          >
            <img
              src={src}
              alt=""
              className={`h-[70px] w-[70px] object-contain ${flip ? "-scale-x-100" : ""}`}
            />
            <h3
              className="mt-4 max-w-[361px]"
              style={{
                fontFamily: DIN,
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "35px",
              }}
            >
              {title}
            </h3>
            <div
              className="mt-6"
              style={{
                fontFamily: JOST,
                fontSize: "16px",
                lineHeight: "23px",
                letterSpacing: "-0.02em",
                color: "#0F3D8D",
              }}
            >
              <p style={{ fontWeight: 400 }}>Contact:</p>
              <a href={`mailto:${email}`} className="break-all" style={{ fontWeight: 600 }}>
                {email}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
