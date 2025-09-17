import React from "react";
import Image from "next/image";
import { GoogleDriveIcon, PDFIcon } from "../ui/Icons";

export function PartnersSection() {
  const partners = [
    { name: "BBC", logo: "/images/logos/bbc.png", tagline: null },
    { name: "CNN", logo: "/images/logos/cnn.png", tagline: null },
    {
      name: "PUNCH",
      logo: "/images/logos/punch.png",
      tagline: "Nigeria's most widely read newspaper",
    },
    {
      name: "The Guardian",
      logo: "/images/logos/guardian.png",
      tagline: "Nurtured by Truth",
    },
    { name: "REUTERS", logo: "/images/logos/reuters.png", tagline: null },
    { name: "FRANCE 24", logo: "/images/logos/france.png", tagline: null },
    { name: "piggyvest", logo: "/images/logos/piggyvest.png", tagline: null },
    { name: "THE TIMES", logo: "/images/logos/times.png", tagline: null },
  ];

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Section - Want more detailed info */}
        <div className="text-center sm:mb-16 mb-8">
          <h2
            className="text-[#282828] mb-4 sm:text-4xl text-3xl"
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontWeight: 600,
              lineHeight: "100%",
            }}
          >
            Want more detailed info?
          </h2>
          <p
            className="text-[#666666] sm:mb-8 mb-4 sm:text-2xl text-xl"
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontWeight: 400,
              lineHeight: "100%",
            }}
          >
            See the full tournament structure and participation guidelines for
            brands:
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16">
            <button className="flex items-center justify-center gap-2.5 px-2.5 py-2.5 w-full max-w-[329px] h-[43px] bg-[#EBEBEB] rounded-[22px] hover:bg-[#E0E0E0] transition-colors duration-300">
              <PDFIcon />
              <span className="text-[#282828] font-jost font-medium text-base">
                Proposal & Tournament Details
              </span>
            </button>

            <button className="flex items-center justify-center gap-2.5 px-2.5 py-2.5 w-full max-w-[329px] h-[43px] bg-[#EBEBEB] rounded-[22px] hover:bg-[#E0E0E0] transition-colors duration-300">
              <GoogleDriveIcon />
              <span className="text-[#282828] font-jost font-medium text-base">
                Sponsors & Partners Assets
              </span>
            </button>
          </div>
        </div>

        {/* Contact Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 gap-4 mb-16">
          {/* Sponsorship Card */}
          <div className="bg-[#F3F3F3] rounded-lg sm:p-6 p-4  flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="w-full mx-auto flex items-start justify-start">
                <Image
                  src="/images/black-bishop.png"
                  alt="Black Bishop"
                  width={70}
                  height={70}
                  className="w-16 h-16"
                />
              </div>
              <h3
                className="text-[#282828] sm:mb-6 mb-4 text-left sm:text-[28px] text-xl"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 600,
                }}
              >
                TO SPONSOR THE TOURNAMENT & LIBRARY PROJECT
              </h3>
            </div>

            <div className="text-left flex flex-col gap-0.5">
              <span
                className="text-[#0F3D8D] block font-normal text-base"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                }}
              >
                Email:
              </span>
              <a
                href="mailto:partnerships@tundeonakoyachessclub.com"
                className="text-[#0F3D8D] hover:underline break-all text-lg"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 600,
                  wordBreak: "break-all",
                }}
              >
                partnerships@tundeonakoyachessclub.com
              </a>
            </div>
          </div>

          {/* General Contact Card */}
          <div className="bg-[#F3F3F3] rounded-lg sm:p-6 p-4 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="w-full mx-auto flex items-start justify-start">
                <Image
                  src="/images/black-knight.png"
                  alt="Black Knight"
                  width={70}
                  height={70}
                  className="w- h-16"
                />
              </div>
              <h3
                className="text-[#282828] sm:mb-6 mb-4 text-left sm:text-[28px] text-xl"
                style={{
                  fontFamily: "var(--font-jost), sans-serif ",
                  fontWeight: 600,
                }}
              >
                TO GET IN TOUCH WITH US FOR MORE DETAILS
              </h3>
            </div>

            <div className="text-left flex flex-col gap-0.5">
              <span
                className="text-[#0F3D8D] block font-normal text-base"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                }}
              >
                Contact:
              </span>
              <a
                href="mailto:to@tundeonakoyachessclub.com"
                className="text-[#0F3D8D] hover:underline break-all text-lg"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 600,
                  wordBreak: "break-all",
                }}
              >
                to@tundeonakoyachessclub.com
              </a>
            </div>
          </div>
        </div>

        {/* Sponsors & Partners Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[#282828]  mb-4 sm:text-4xl text-3xl"
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontWeight: 600,
              lineHeight: "100%",
            }}
          >
            Sponsors & Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap sm:gap-8 gap-4 items-center justify-center overflow-hidden">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform duration-300"
            >
              {/* Logo */}
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
