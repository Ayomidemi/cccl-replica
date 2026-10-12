"use client";

import { useEffect, useState } from "react";

const LINES = [
  "The Board is Set,",
  "The Game Changes Here,",
  "Africa, It's Time To Make Your Move.",
];

const CABINET = "'Cabinet Grotesk', sans-serif";
const TEXT = "#14DDBD";

type TypewriterLinesProps = {
  className?: string;
};

export function TypewriterLines({ className = "" }: TypewriterLinesProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "hold" | "erase">("typing");

  const current = LINES[lineIndex];
  const visible = current.slice(0, charCount);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charCount < current.length) {
        timer = setTimeout(() => setCharCount((c) => c + 1), 55);
      } else {
        timer = setTimeout(() => setPhase("hold"), 1600);
      }
    } else if (phase === "hold") {
      timer = setTimeout(() => setPhase("erase"), 400);
    } else if (phase === "erase") {
      if (charCount > 0) {
        timer = setTimeout(() => setCharCount((c) => c - 1), 28);
      } else {
        setLineIndex((i) => (i + 1) % LINES.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timer);
  }, [charCount, phase, current.length]);

  return (
    <div className={`relative min-h-[40px] w-full ${className}`}>
      <p
        className="inline-block whitespace-nowrap"
        style={{
          fontFamily: CABINET,
          fontStyle: "normal",
          fontWeight: 800,
          fontSize: "clamp(18px, 2.8vw, 45px)",
          lineHeight: "40px",
          color: TEXT,
        }}
        aria-live="polite"
      >
        {visible}
        <span
          className="ml-[2px] inline-block h-[0.85em] w-[3px] translate-y-[2px] align-baseline"
          style={{
            backgroundColor: TEXT,
            opacity: phase === "hold" ? 0.35 : 1,
          }}
          aria-hidden
        />
      </p>
    </div>
  );
}
