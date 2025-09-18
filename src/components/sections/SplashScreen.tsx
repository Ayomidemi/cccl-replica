"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onEnter: () => void;
}

export function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
        {/* TOCC Title */}
        <h1 
          className="text-white font-candal text-6xl sm:text-8xl md:text-9xl lg:text-[250px] leading-tight m-0 p-0"
          style={{
            fontFamily: "var(--font-candal), serif",
            fontWeight: 400,
          }}
        >
          TOCC
        </h1>

        {/* PRESENTS TO YOU */}
        <p 
          className="text-white font-sf-pro text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[60px] tracking-[0.9em] m-0 p-0"
          style={{
            fontFamily: "SF Pro, sans-serif",
            fontWeight: 510,
          }}
        >
          PRESENTS TO YOU
        </p>

        {/* CTA Button */}
        <motion.button
          className="relative border mt-16 cursor-pointer border-[#E5792B] rounded-[30px] flex items-center justify-center gap-1.5 px-8 py-4 bg-transparent hover:bg-white hover:border-transparent transition-all duration-300 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onEnter}
        >
          {/* Grid Icon Container */}
          <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
            {/* Main Grid Icon */}
            <motion.div 
              className="w-4 h-4 flex flex-col gap-0 opacity-100"
              animate={{
                y: isHovered ? -16 : 0,
                opacity: isHovered ? 0 : 1
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex gap-0">
                <div className="w-2 h-2 bg-[#F9F6F6]" />
                <div className="w-2 h-2 bg-[#828282]" />
              </div>
              <div className="flex gap-0">
                <div className="w-2 h-2 bg-[#828282]" />
                <div className="w-2 h-2 bg-[#F9F6F6]" />
              </div>
            </motion.div>
            
            {/* Hidden Grid Icon that slides in from below */}
            <motion.div 
              className="absolute w-4 h-4 flex flex-col gap-0 opacity-0"
              animate={{
                y: isHovered ? 0 : 16,
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex gap-0">
                <div className="w-2 h-2 bg-[#828282]" />
                <div className="w-2 h-2 bg-[#F9F6F6]  border-[0.5px] border-[#828282]" />
              </div>
              <div className="flex gap-0">
                <div className="w-2 h-2 bg-[#F9F6F6]  border-[0.5px] border-[#828282]" />
                <div className="w-2 h-2 bg-[#828282]" />
              </div>
            </motion.div>
          </div>

          {/* Button Text Container */}
          <div className="relative overflow-hidden h-6 flex items-center">
            <motion.span 
              className="font-impact text-sm sm:text-base lg:text-lg leading-tight tracking-[0.015em] whitespace-nowrap mt-1 text-white"
              style={{
                fontFamily: "Impact, sans-serif",
                fontWeight: 600,
              }}
              animate={{
                y: isHovered ? -24 : 0,
                color: isHovered ? "#282828" : "#FFFFFF",
                opacity: isHovered ? 0 : 1
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              CLICK TO ENTER
            </motion.span>
            
            {/* Hidden text that slides in from below */}
            <motion.span 
              className="absolute font-impact text-sm sm:text-base lg:text-lg leading-tight tracking-[0.015em] whitespace-nowrap text-[#282828] opacity-0"
              style={{
                fontFamily: "Impact, sans-serif",
                fontWeight: 600,
              }}
              animate={{
                y: isHovered ? 0 : 24,
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              CLICK TO ENTER
            </motion.span>
          </div>
        </motion.button>
      </div>
    </section>
  );
}
