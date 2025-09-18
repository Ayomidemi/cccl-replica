"use client";

import React from "react";

interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
}

export function PlatformSection() {
  const features: Feature[] = [
    {
      id: 1,
      number: "01",
      title: "BRAND POSITIONING",
      description:
        "Project your company as fun, intelligent, and purpose-driven. La prima fase di recruiting si terrà dal 1 Marzo al 30 Aprile 2025, termine per le iscrizioni. Le selezionate riceveranno una mail di convocazione",
    },
    {
      id: 2,
      number: "02",
      title: "IMPACT STORYTELLING",
      description:
        "Be part of a legacy, helping build literacy one move at a time. Prima fase di recruiting si terrà dal 1 Marzo al 30 Aprile 2025, termine per le iscrizioni. Le selezionate riceveranno una mail di convocazione",
    },
    {
      id: 3,
      number: "03",
      title: "CROSS-INDUSTRY COLLABORATION",
      description:
        "Connect with forward-thinking brands in an exciting, meaningful way. Prima fase di recruiting si terrà dal 1 Marzo al 30 Aprile 2025, termine per le iscrizioni. Le selezionate riceveranno una mail di convocazione",
    },
    {
      id: 4,
      number: "04",
      title: "MENTORSHIP & EXPOSURE",
      description:
        "Support and elevate young talents from underserved communities. Prima fase di recruiting si terrà dal 1 Marzo al 30 Aprile 2025, termine per le iscrizioni. Le selezionate riceveranno una mail di convocazione",
    },
  ];

  return (
    <section className="relative w-full bg-white py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-2 py-8 md:pb-20 bg-white">
          <div className="relative">
            <div className="sm:bg-black bg-transparent flex items-center justify-center w-full sm:w-72 lg:w-80 h-full sm:h-18 lg:h-20">
              <span className="sm:text-white text-black font-jost font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">
                A Platform
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="sm:bg-black bg-transparent flex items-center justify-center w-full sm:w-96 lg:w-[481px] h-full sm:h-18 lg:h-20">
              <span className="sm:text-white text-black font-jost font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">
                Like No Other
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16 gap-8 items-center">
          {/* Left Column - Features */}
          <div className="space-y-12">
            {/* Features List */}
            <div className="sm:space-y-8 space-y-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex sm:gap-6 gap-4">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span
                      className="text-[#00432C] sm:text-2xl text-xl"
                      style={{
                        fontFamily: "var(--font-caesar-dressing), sans-serif",
                        fontWeight: 700,
                        lineHeight: "100%",
                      }}
                    >
                      {feature.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-[#00432C] sm:mb-3 mb-2 sm:text-3xl text-xl"
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontWeight: 700,
                        lineHeight: "120%",
                        textTransform: "uppercase",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-black text-base sm:text-[20px]"
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] sm:h-[600px]">
              <video
                src="/images/videos/audience.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
