"use client";

import React from "react";
import Image from "next/image";

interface Organizer {
  id: number;
  name: string;
  title: string;
  image: string;
}

export function OrganizersSection() {
  const organizers: Organizer[] = [
    {
      id: 1,
      name: "TUNDE ONAKOYA",
      title: "Founder, Chess in Slums Africa",
      image: "/images/organizers/tunde.png",
    },
    {
      id: 2,
      name: "NGOZI EZE",
      title: "Educator & Youth Development Advocate",
      image: "/images/organizers/ngozi.jpg",
    },
    {
      id: 3,
      name: "CHUKA OKOYE",
      title: "Former National Chess Champion",
      image: "/images/organizers/chuka.jpg",
    },
    {
      id: 4,
      name: "IJEOMA UDEH",
      title: "Social Impact Strategist, UNICEF",
      image: "/images/organizers/ijeoma.jpg",
    },
    {
      id: 5,
      name: "TUNDE ONAKOYA",
      title: "Founder, Chess in Slums Africa",
      image: "/images/organizers/tunde.png",
    },
    {
      id: 6,
      name: "NGOZI EZE",
      title: "Educator & Youth Development Advocate",
      image: "/images/organizers/ngozi.jpg",
    },
    {
      id: 7,
      name: "CHUKA OKOYE",
      title: "Former National Chess Champion",
      image: "/images/organizers/chuka.jpg",
    },
    {
      id: 8,
      name: "IJEOMA UDEH",
      title: "Social Impact Strategist, UNICEF",
      image: "/images/organizers/ijeoma.jpg",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white py-12 md:py-20 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 mb-8 md:mb-16">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          {/* Main Title */}
          <h2 className="text-[#00432C] text-center font-jost font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            Meet The Tournament Organisers
          </h2>

          {/* Subtitle */}
          <p className="text-black text-center font-raleway font-normal text-lg md:text-2xl lg:text-3xl leading-tight tracking-tight">
            Beyond Strategy. Building Legacy
          </p>
        </div>
      </div>

      {/* Organizers Grid */}
      <div className="max-w-6xl mx-auto px-4 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          {organizers.map((organizer) => (
            <div
              key={organizer.id}
              className="w-full h-[400px] bg-white shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {/* Profile Image */}
              <div className="w-full h-[300px] relative">
                <Image
                  src={organizer.image}
                  alt={organizer.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name Section with Background */}
              <div
                className="w-full h-[100px] flex flex-col justify-center items-center px-2 md:px-4"
                style={{
                  backgroundImage: "url('/images/organizers/bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-black uppercase text-center mb-1 md:mb-2 font-mona-sans font-bold text-sm md:text-base lg:text-lg leading-tight">
                  {organizer.name}
                </h3>
                <p className="text-black text-center font-mona-sans font-medium text-xs md:text-sm leading-tight">
                  {organizer.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
