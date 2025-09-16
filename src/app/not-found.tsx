"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ChessBishop,
  ChessKnight,
  ChessQueen,
} from "@/components/ui/ChessIcons";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";

export default function NotFound() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const chessPieces = [
    { icon: ChessBishop, name: "Pawn" },
    { icon: ChessKnight, name: "Knight" },
    { icon: ChessQueen, name: "Rook" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content */}
      <div className="pt-24 px-4 flex flex-col items-center justify-center min-h-screen">
        {/* Tournament Information Section */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Still cooking...
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Sign up and Registration for this tournament is still ongoing. The
            team and player reveal will be featured on this page before the
            tournament begins.
          </p>
        </div>

        {/* Interactive Chess Piece Cards */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Chess Board Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
              {Array.from({ length: 64 }).map((_, index) => (
                <div
                  key={index}
                  className={`${
                    Math.floor(index / 8) % 2 === index % 2
                      ? "bg-white"
                      : "bg-gray-800"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Chess Piece Cards */}
          <div className="relative flex justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {chessPieces.map((piece, index) => {
              const IconComponent = piece.icon;
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-500 transform ${
                    index === 0
                      ? "-rotate-3 scale-105"
                      : index === 2
                      ? "rotate-3 scale-105"
                      : "scale-105"
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="bg-white rounded-2xl p-8 border-2 border-[#E5792B] shadow-2xl hover:shadow-3xl transition-all duration-300 min-w-[200px] min-h-[250px] flex flex-col items-center justify-center">
                    {/* Chess Piece Icon */}
                    <div className="mb-6 text-[#E5792B]">
                      <IconComponent size={60} color="#E5792B" />
                    </div>

                    {/* Hover Text */}
                    <p className="text-black font-medium text-center">
                      {isHovered
                        ? "Starting a Conversation..."
                        : "Hover to start a Conversation"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-16">
          <Button
            variant="primary"
            size="lg"
            className="px-8 py-4"
            onClick={() => (window.location.href = "/")}
          >
            Return to Home
          </Button>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
