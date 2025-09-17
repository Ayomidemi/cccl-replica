"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/images/videos/chessboard.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Hero Content */}
      <div 
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:gap-10 gap-8 mt-10"
        style={{
          background: "rgba(0, 0, 0, 0.45)"
        }}
      >
        {/* Tagline */}
        <div className="text-center">
          <span
            className="text-[#E5792B] text-[35px] leading-tight tracking-[3%]"
            style={{
              fontFamily: "var(--font-caesar-dressing), serif",
              fontWeight: 400,
            }}
          >
            Beyond Strategy, Building Legacy.
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-center text-white px-4 text-[45px] sm:text-6xl md:text-[80px] max-w-7xl mx-auto leading-tight md:leading-[95px] tracking-normal"
          style={{
            fontFamily: "var(--font-jost), serif",
            fontWeight: 600,
          }}
        >
          Nigeria&apos;s First Corporate Chess Champions League?
        </h1>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full flex justify-center items-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative"
          >
            <Image
              src="/images/scroll-down.png"
              alt="Scroll Down"
              width={150}
              height={150}
              className="w-24 h-24 md:w-[188px] md:h-[188px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
