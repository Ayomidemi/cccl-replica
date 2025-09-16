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
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Tagline */}
        <div className="text-center mb-6 md:mb-8">
          <span
            className="text-[#E5792B] text-[35px] leading-tight md:leading-[50px] tracking-[0.03em]"
            style={{
              fontFamily: "var(--font-bogista), serif",
              fontWeight: 400,
            }}
          >
            Beyond Strategy, Building Legacy.
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-center text-white px-4 text-[45px] sm:text-6xl md:text-[80px] max-w-7xl mx-auto leading-tight md:leading-[100px] tracking-normal"
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
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
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
              className="w-24 h-24 md:w-[150px] md:h-[150px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
