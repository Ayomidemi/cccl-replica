import { SOCIAL } from "@/lib/site";

const DIN = "'DIN Next W1G', sans-serif";
const CHUNKO = "'Chunko Bold Demo', sans-serif";

const socialLinks = [
  { href: SOCIAL.instagram, label: "Instagram", icon: InstagramIcon },
  { href: SOCIAL.x, label: "X", icon: XIcon },
  { href: SOCIAL.tiktok, label: "TikTok", icon: TikTokIcon },
  { href: SOCIAL.facebook, label: "Facebook", icon: FacebookIcon },
];

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
    <section className="bg-[#F9F4ED] pt-12 lg:pt-[91px]">
      <div className="mx-auto max-w-[540px] px-4 text-center sm:px-8">
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
        <div className="mt-[6px] flex items-center justify-center gap-[22px]">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#087361]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile: full-bleed composite, no side padding */}
      <div className="mt-8 w-full md:hidden">
        <img
          src="/images/mobilesocials.png"
          alt="Follow the journey on our socials"
          className="block h-auto w-full"
        />
      </div>

      {/* Mobile: previous stacked deck
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
      */}

      {/* Desktop / tablet — single composite image */}
      <div className="mx-auto mt-8 hidden w-full max-w-[1100px] items-end justify-center md:flex lg:mt-18">
        <img
          src="/images/groupsocials.png"
          alt="Follow the journey on our socials"
          className="h-auto w-full object-contain object-bottom"
        />
      </div>

      {/* Desktop / tablet — previous fan of individual cards
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
      */}
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="35" height="34" viewBox="0 0.5 35 34" fill="none" aria-hidden>
      <path d="M17.5 3.56283C22.1725 3.56283 22.7267 3.57983 24.5715 3.662C26.479 3.747 28.4433 4.16917 29.8331 5.51925C31.236 6.88208 31.6575 8.77192 31.745 10.6306C31.8296 12.4227 31.8471 12.961 31.8471 17.5C31.8471 22.039 31.8296 22.5773 31.745 24.3694C31.659 26.2125 31.2142 28.1392 29.8331 29.4808C28.4302 30.8436 26.4863 31.253 24.5715 31.338C22.7267 31.4202 22.1725 31.4372 17.5 31.4372C12.8275 31.4372 12.2733 31.4202 10.4285 31.338C8.54583 31.2544 6.53625 30.8124 5.16687 29.4808C3.77125 28.125 3.3425 26.2168 3.255 24.3694C3.17042 22.5773 3.15292 22.039 3.15292 17.5C3.15292 12.961 3.17042 12.4227 3.255 10.6306C3.34104 8.79458 3.79021 6.85658 5.16687 5.51925C6.56687 4.15925 8.51958 3.747 10.4285 3.662C12.2733 3.57983 12.8275 3.56283 17.5 3.56283ZM17.5 0.5C12.7473 0.5 12.1508 0.519833 10.2842 0.602C7.57896 0.722417 4.89271 1.45342 2.93708 3.35317C0.974167 5.26 0.228958 7.86383 0.105 10.4903C0.0204167 12.3037 0 12.8831 0 17.5C0 22.1169 0.0204167 22.6963 0.105 24.5097C0.228958 27.1347 0.984375 29.7513 2.93708 31.6468C4.89854 33.5522 7.58333 34.2776 10.2842 34.398C12.1508 34.4802 12.7473 34.5 17.5 34.5C22.2527 34.5 22.8492 34.4802 24.7158 34.398C27.4196 34.2776 30.1088 33.5452 32.0629 31.6468C34.0273 29.7386 34.771 27.1362 34.895 24.5097C34.9796 22.6963 35 22.1169 35 17.5C35 12.8831 34.9796 12.3037 34.895 10.4903C34.771 7.86242 34.0171 5.2515 32.0629 3.35317C30.1044 1.45058 27.4123 0.721 24.7158 0.602C22.8492 0.519833 22.2527 0.5 17.5 0.5Z" fill="currentColor" />
      <path d="M17.5019 8.77051C12.5392 8.77051 8.51562 12.6791 8.51562 17.5C8.51562 22.3209 12.5392 26.2295 17.5019 26.2295C22.4646 26.2295 26.4881 22.3209 26.4881 17.5C26.4881 12.6791 22.4646 8.77051 17.5019 8.77051ZM17.5019 23.1667C14.2804 23.1667 11.6685 20.6294 11.6685 17.5C11.6685 14.3706 14.2804 11.8333 17.5019 11.8333C20.7233 11.8333 23.3352 14.3706 23.3352 17.5C23.3352 20.6294 20.7233 23.1667 17.5019 23.1667Z" fill="currentColor" />
      <path d="M26.8422 10.4643C28.002 10.4643 28.9422 9.55094 28.9422 8.42428C28.9422 7.29762 28.002 6.38428 26.8422 6.38428C25.6824 6.38428 24.7422 7.29762 24.7422 8.42428C24.7422 9.55094 25.6824 10.4643 26.8422 10.4643Z" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="35" height="34" viewBox="57 0 35 34" fill="none" aria-hidden>
      <path d="M84.5625 2.13281H89.9321L78.2042 15.1506L92 32.8674H81.201L72.7369 22.1248L63.0623 32.8674H57.684L70.2256 18.9401L57 2.13281H68.0731L75.7162 11.9517L84.5625 2.13281ZM82.6769 29.7493H85.6504L66.4529 5.08798H63.2592L82.6769 29.7493Z" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="35" height="35" viewBox="116 0 35 35" fill="none" aria-hidden>
      <path d="M146.762 14.3879C143.643 14.3879 140.751 13.3904 138.391 11.6958V23.924C138.391 30.0315 133.423 34.9985 127.317 34.9985C124.957 34.9985 122.768 34.2548 120.97 32.9919C118.115 30.9867 116.242 27.6704 116.242 23.924C116.242 17.8165 121.211 12.8479 127.318 12.8479C127.826 12.8479 128.322 12.8902 128.81 12.9558V14.3806V19.0983C128.338 18.951 127.839 18.865 127.318 18.865C124.53 18.865 122.261 21.1342 122.261 23.924C122.261 25.8665 123.363 27.5538 124.973 28.401C125.675 28.77 126.472 28.9815 127.32 28.9815C130.044 28.9815 132.266 26.8144 132.368 24.1135L132.373 0H138.39C138.39 0.522083 138.441 1.03104 138.531 1.52688C138.956 3.81938 140.316 5.78667 142.202 7.01604C143.514 7.87208 145.081 8.37229 146.761 8.37229L146.762 14.3879Z" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="35" height="35" viewBox="171 0 35 35" fill="none" aria-hidden>
      <path d="M206 17.6064C206 26.3404 199.592 33.581 191.227 34.895V22.6989H195.294L196.069 17.6531H191.227V14.3792C191.227 12.9981 191.904 11.6535 194.071 11.6535H196.271V7.35728C196.271 7.35728 194.274 7.01603 192.365 7.01603C188.378 7.01603 185.773 9.43249 185.773 13.806V17.6517H181.341V22.6975H185.773V34.8935C177.409 33.5781 171 26.3389 171 17.6064C171 7.94207 178.836 0.106445 188.5 0.106445C198.164 0.106445 206 7.94061 206 17.6064Z" fill="currentColor" />
    </svg>
  );
}
