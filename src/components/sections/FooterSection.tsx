"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  SmallMail,
  SmallLinkedIn,
  SmallInstagram,
  SmallTwitter,
} from "@/components/ui/Icons";

export function FooterSection() {
  const [hoveredAvatar, setHoveredAvatar] = useState<number | null>(null);

  const avatarData = [
    {
      name: "Olashile Ayobami",
      title: "Principal Product Designer",
      linkedin: "https://linkedin.com/in",
    },
    {
      name: "Pease Adeniji",
      title: "Snr. Software Engineer",
      linkedin: "https://linkedin.com/in",
    },
    {
      name: "Kalu Chinonso",
      title: "Fullstack Dev.",
      linkedin: "https://linkedin.com/in",
    },
  ];

  return (
    <section className="relative w-full bg-black">
      {/* Call-to-Action Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 sm:text-center text-left">
        <h2 className="text-white mb-4 font-jost font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
          Ready to Make Your Move?
        </h2>
        <p className="text-white mb-6 md:mb-8 font-jost font-semibold text-xl md:text-3xl lg:text-5xl leading-tight">
          Spots are limited. The clock ⏰ is ticking.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span className="text-lg">🤝</span>
            SIGN UP YOUR COMPANY
          </Button>
          <Button
            variant="outlineWhite"
            size="lg"
            className="w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span className="text-lg">🎫</span>
            BUY TICKETS
          </Button>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-full h-px max-w-6xl mx-auto  px-4 bg-gray-600"></div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          {/* Left Side - Logos */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* CCCL Logo */}
            <div className="flex items-center gap-4">
              <span className="text-white font-caesar-dressing text-2xl">
                CCCL
              </span>
              <div className="w-px h-8 bg-gray-400"></div>
              <div className="flex items-center gap-3">
                <div className="rounded-full flex items-center justify-center">
                  <Image
                    src="/images/logo-white-2.png"
                    alt="Chess in Slums Africa"
                    width={32}
                    height={32}
                    className="w-20 h-8"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {[
              "Live Streams",
              "Team Unveiling",
              "Contests & Giveaways",
              "Match Day Tickets",
            ].map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href="#"
                  className="text-white hover:text-[#E5792B] transition-colors duration-300 font-jost font-normal text-sm md:text-base"
                >
                  {link}
                </a>
              </React.Fragment>
            ))}
          </div>

          {/* Right Side - Social Media & Credits */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-center gap-4">
              <span className="text-[#8C8984] font-jost font-normal text-base">
                Follow the journey:
              </span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-white hover:text-[#E5792B] transition-colors duration-300"
                >
                  <SmallTwitter size={23} color="white" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#E5792B] transition-colors duration-300"
                >
                  <SmallInstagram size={23} color="white" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#E5792B] transition-colors duration-300"
                >
                  <SmallLinkedIn size={23} color="white" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#E5792B] transition-colors duration-300"
                >
                  <SmallMail size={23} color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Built with */}
        <div className="mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
          <p className="text-white font-jost font-normal sm:text-base text-sm">
            © 2025 CCCL. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-white font-jost font-medium sm:text-base text-sm">
              Built with ❤️
            </span>
            <div className="flex -space-x-2 relative">
              {avatarData.map((person, index) => (
                <div key={index} className="relative">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onMouseEnter={() => setHoveredAvatar(index)}
                    onMouseLeave={() => setHoveredAvatar(null)}
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-[#FFA154] overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-200">
                      <Image
                        src={`/images/avatar-${index + 1}.png`}
                        alt={`Avatar ${index + 1}`}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Hover Card */}
                    {hoveredAvatar === index && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 pointer-events-none">
                        <div className="relative bg-[#E5792B] rounded-lg px-4 py-3 shadow-lg min-w-[200px] hover:bg-[#D66A1F] transition-colors duration-200">
                          {/* Speech bubble tail */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#E5792B]"></div>

                          {/* Content */}
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="text-white font-jost font-bold text-sm leading-tight">
                                {person.name}
                              </h4>
                              <p className="text-white/90 font-jost font-normal text-xs leading-tight mt-1">
                                {person.title}
                              </p>
                            </div>
                            <div className="ml-3">
                              <SmallLinkedIn size={16} color="white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
