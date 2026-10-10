"use client";

import { useRef, useState } from "react";

const DIN = "'DIN Next W1G', sans-serif";
const CABINET = "'Cabinet Grotesk', sans-serif";

export function StorySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setPlaying(true);
  };

  return (
    <section className="bg-[#F9F4ED] px-4 pt-16 pb-16 sm:px-8 lg:pt-[167px] lg:pb-[167px]">
      <div className="mx-auto w-full max-w-[1068px]">
      <h2
        className="w-full text-left uppercase"
        style={{
          fontFamily: DIN,
          fontWeight: 900,
          fontSize: "min(90px, calc((100vw - 32px) / 11.91))",
          lineHeight: "1.222",
          letterSpacing: "0.06em",
          color: "#282828",
          WebkitTextStroke: "0.133em #EBE0D1",
          paintOrder: "stroke fill",
        }}
      >
        <span className="block whitespace-nowrap">The Story Behind the</span>
        <span className="block whitespace-nowrap">First Edition ;</span>
      </h2>

      <div className="relative mt-8 aspect-[1070/543] w-full overflow-hidden rounded-[18px] max-md:aspect-auto max-md:h-[calc((100vw-2rem)*543/1070+60px)] sm:max-md:h-[calc((100vw-4rem)*543/1070+60px)] lg:mt-[50px]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster="/images/storybg.png"
          playsInline
          controls={playing}
          onEnded={() => setPlaying(false)}
        >
          <source src="/images/videos/story.mp4" type="video/mp4" />
        </video>

        {!playing && (
          <>
            <img
              src="/images/storybg.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.29)]" />
            <div className="absolute top-1/2 left-1/2 flex w-[290px] max-w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 min-[720px]:top-[31.12%] min-[720px]:translate-y-0 min-[720px]:gap-[21px]">
              <p
                className="w-full text-center text-[14px] leading-[20px] min-[720px]:text-[20px] min-[720px]:leading-[35px]"
                style={{
                  fontFamily: CABINET,
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                <span className="block">
                  <span style={{ fontWeight: 800 }}>— Tunde Onakoya</span>
                  , Founder CISA
                </span>
                <span className="block">& Guinness World Record Holder</span>
              </p>
              <button
                type="button"
                onClick={play}
                aria-label="Play the story behind the first edition"
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full min-[720px]:h-[70px] min-[720px]:w-[70px]"
                style={{
                  background:
                    "linear-gradient(160deg, #FFC14A 0%, #F08A1A 45%, #EB6601 100%)",
                }}
              >
                <svg
                  viewBox="0 0 22 26"
                  fill="white"
                  aria-hidden
                  className="ml-0.5 h-4 w-3.5 min-[720px]:ml-1 min-[720px]:h-[26px] min-[720px]:w-[22px]"
                >
                  <path d="M0 0v26l22-13L0 0z" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
      </div>
    </section>
  );
}
