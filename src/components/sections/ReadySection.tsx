"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { ChessBishop } from "@/components/ui/ChessIcons";
import { useRef, useEffect, useState } from "react";

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start, isInView]);

  return { count, ref };
}

// Individual stat component to fix hook usage
function StatItem({ stat }: { stat: { number: number; label: string; suffix: string; prefix: string } }) {
  const { count, ref } = useCountUp(stat.number, 2000);
  
  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-2 sm:px-4"
    >
      {/* Number with stroke outline */}
      <div className="mb-3 sm:mb-4">
        <div
          className="flex items-center justify-center text-8xl lg:text-9xl"
          style={{
            fontFamily: "var(--font-raleway), sans-serif",
            fontWeight: 800,
            lineHeight: "1",
            textAlign: "center",
            color: "transparent",
            WebkitTextStroke: "1px #9E4505",
            WebkitTextFillColor: "transparent",
          }}
        >
          {stat.prefix}{count}{stat.suffix}
        </div>
      </div>

      {/* Label */}
      <p
        className="text-[#9E4505] text-base leading-tight sm:leading-normal"
        style={{
          fontFamily: "var(--font-jost), sans-serif",
          fontWeight: 400,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export function ReadySection() {
  const stats = [
    { number: 20, label: "PARTICIPATING COMPANIES", suffix: "", prefix: "" },
    { number: 1, label: "TEAM CHAMPION", suffix: "", prefix: "" },
    { number: 60, label: "ONLINE & PHYSICAL INTERACTION", suffix: "k", prefix: "+" },
    { number: 20, label: "PRIZE POOL", suffix: "M", prefix: "" },
  ];

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(122.05deg, #F6F6F6 -16.92%, #FEF1E1 118.08%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/background-pattern.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Radial Gradient Mask */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(52.19% 100% at 50% 0%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 95.31%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full max-w-6xl mx-auto text-center"
        >
          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <ChessBishop />
            </div>
            <div className="flex flex-col items-center space-y-2">
              {["ARE", "YOU", "READY", "to Make", "Your Move", "?"].map(
                (word, index) => (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="text-[#E5792B] font-bold"
                    style={{
                      fontFamily: "var(--font-bogista), serif",
                      fontWeight: 400,
                      fontSize: "clamp(2.5rem, 8vw, 5rem)",
                      lineHeight: "1.1",
                      textAlign: "center",
                    }}
                  >
                    {word}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Video Section */}
          <div className="mb-20">
            <div className="relative max-w-5xl sm:h-full h-[400px] mx-auto">
              {/* Video Thumbnail */}
              <div className="relative aspect-video rounded-2xl h-full w-full overflow-hidden shadow-2xl">
                {/* Video Background Image */}
                <Image
                  src="/images/video-bg.png"
                  alt="Chess in Slums Video Background"
                  fill
                  className="object-cover"
                />

                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Chess in Slums Logo */}
                <div className="absolute sm:top-6 top-4 sm:left-6 left-4">
                  <Image
                    src="/images/logo-white.png"
                    alt="Chess in Slums Africa"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex sm:flex-col flex-col-reverse items-center justify-center text-center px-8">
                  <div className="text-white">
                    <p
                      className="text-xl md:text-2xl font-semibold mb-2"
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Watch the full story;
                    </p>
                    <p
                      className="text-lg md:text-xl"
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      behind this first edition of the Corporate Chess Champions
                      League!
                    </p>
                  </div>

                  {/* Play Button */}
                  <motion.a
                    href="https://www.youtube.com/watch?v=yXvyJDqqQec"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-flex items-center justify-center"
                  >
                    <div className="sm:w-20 sm:h-20 sm:mb-0 mb-4 w-12 h-12 mt-8 bg-gradient-to-r from-[#E5792B] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="sm:w-8 sm:h-8 w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-col flex-wrap lg:flex-nowrap sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-16 max-w-7xl mx-auto">
            {stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
