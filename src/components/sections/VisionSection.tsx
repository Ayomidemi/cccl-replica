"use client";

import React from "react";

export function VisionSection() {
  return (
    <section className="relative w-full mt-16 md:mt-0 bg-white py-16 md:py-32 overflow-hidden min-h-[30vh] md:h-screen">
      <div>
        {/* Mobile: Simple rectangular background */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-br from-[#593E22] to-[#111925]" />

        {/* Desktop: Background with gradient and rotated elements */}
        <div className="hidden md:block absolute inset-0">
          {/* Main background gradient - larger to show the slant */}
          <div
            className="absolute w-[120%] h-full md:h-[450px]"
            style={{
              background:
                "linear-gradient(81.99deg, #593E22 -32.84%, #111925 74.76%)",
              boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.08)",
              transform: "rotate(-8.36deg)",
              transformOrigin: "center",
              left: "-10%",
              top: "25%",
            }}
          />

          {/* Orange accent bands - properly slanted */}
          <div
            className="absolute w-[15%] h-[10%] bg-[#F07C39]"
            style={{
              right: "-18px",
              top: "520px",
              transform: "rotate(-10deg)",
            }}
          />
          <div
            className="absolute w-[15%] h-[10%] bg-[#F07C39]"
            style={{
              left: "-18px",
              top: "32%",
              transform: "rotate(-10deg)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-0 top-0 md:top-[17vh]">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
            {/* The Vision Label */}
            <div className="flex items-center justify-center">
              <div className="bg-[#FAEEE6] rounded-[22px] px-4 md:px-6 py-2 md:py-2.5 flex items-center gap-2 md:gap-2.5">
                <div className="w-2 h-2 bg-[#F07C39] rounded-full"></div>
                <span className="text-[#F07C39] font-space-grotesk font-medium text-base md:text-lg leading-6 md:leading-7">
                  The Vision
                </span>
              </div>
            </div>

            {/* Main Quote */}
            <div className="max-w-4xl mx-auto text-center px-4">
              <blockquote className="text-white font-jost font-medium text-xl md:text-2xl lg:text-4xl leading-7 md:leading-8 lg:leading-12">
                &quot;This isn&apos;t just a tournament. It&apos;s how we build
                a new Nigeria—through intellect, equity, and belief in every
                child&apos;s potential.&quot; — <strong>Tunde Onakoya</strong>,{" "}
                <strong>
                  Guinness World Record Holder & Founder, Chess in Slums Africa
                </strong>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
