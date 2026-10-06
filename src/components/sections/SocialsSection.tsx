const DIN = "'DIN Next W1G', sans-serif";
const CHUNKO = "'Chunko Bold Demo', sans-serif";

/* L→R order from Figma; bottoms share one baseline */
const socials = [
  { src: "/images/socials/social6.jpg", rot: -18, z: 1, h: 300 },
  { src: "/images/socials/social4.png", rot: -12, z: 2, h: 330 },
  { src: "/images/socials/social2.jpg", rot: -6, z: 3, h: 360 },
  { src: "/images/socials/social1.jpg", rot: 0, z: 5, h: 408 },
  { src: "/images/socials/social3.jpg", rot: 6, z: 3, h: 360 },
  { src: "/images/socials/social5.png", rot: 12, z: 2, h: 330 },
  { src: "/images/socials/social7.png", rot: 18, z: 1, h: 300 },
];

export function SocialsSection() {
  return (
    <section className="bg-[#F9F4ED] px-4 pt-12 sm:px-8 lg:pt-[91px]">
      <div className="mx-auto max-w-[540px] text-center">
        <p
          style={{
            fontFamily: DIN,
            fontWeight: 300,
            fontSize: "clamp(22px, 3vw, 35px)",
            lineHeight: "42px",
          }}
        >
          FOLLOW THE JOURNEY
        </p>
        <h2
          style={{
            fontFamily: CHUNKO,
            fontWeight: 400,
            fontSize: "clamp(28px, 4vw, 45px)",
            lineHeight: "54px",
            letterSpacing: "0.04em",
            color: "#087361",
          }}
        >
          ON OUR SOCIALS
        </h2>
      </div>

      {/* Mobile: stacked deck */}
      <div className="relative mx-auto mt-10 h-[300px] w-[220px] md:hidden">
        {socials.map((card, i) => {
          const n = socials.length;
          const mid = (n - 1) / 2;
          const offset = i - mid;
          return (
            <div
              key={`m-${card.src}`}
              className="social-card social-card--stack absolute bottom-0 left-1/2 overflow-hidden rounded-t-[24px]"
              style={{
                width: 200,
                height: 270,
                zIndex: 10 + i,
                marginLeft: -100 + offset * 7,
                ["--rot" as string]: `${offset * 2.5}deg`,
              }}
            >
              <img src={card.src} alt="" className="h-full w-full object-cover" />
            </div>
          );
        })}
      </div>

      {/* Desktop / tablet */}
      <div className="mx-auto mt-8 hidden h-[300px] w-full items-end justify-center md:flex md:h-[380px] lg:mt-10 lg:h-[430px]">
        <div className="flex origin-bottom scale-[0.7] items-end justify-center md:scale-[0.85] lg:scale-100">
          {socials.map((card) => (
            <div
              key={card.src}
              className="social-card social-card--fan relative -mx-11 w-[225px] shrink-0 overflow-hidden rounded-t-[40px]"
              style={{
                height: card.h,
                zIndex: card.z,
                ["--rot" as string]: `${card.rot}deg`,
              }}
            >
              <img src={card.src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
