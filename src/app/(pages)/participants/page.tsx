"use client";

import React from "react";
import {
  ChessBishop,
  ChessKnight,
  ChessQueen,
} from "@/components/ui/ChessIcons";

export default function Participants() {
  const chessPieces = [
    { icon: ChessBishop, name: "Pawn" },
    { icon: ChessKnight, name: "Knight" },
    { icon: ChessQueen, name: "Rook" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="pt-24 px-4 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-16 max-w-2xl">
          <p
            className="text-[18px] md:text-[26px] text-white leading-relaxed"
            style={{
              fontFamily: "var(--font-raleway), serif",
            }}
          >
            Sign up and Registration for this tournament is still ongoing. The
            team and player reveal will be featured on this page before the
            tournament begin.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative flex gap-8 md:gap-12 lg:gap-24">
            {chessPieces.map((piece, index) => {
              const IconComponent = piece.icon;

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-500 transform bg-white rounded-[18px] ${
                    index === 0
                      ? "-rotate-[3.32deg] scale-105"
                      : index === 2
                      ? "rotate-[4.64deg] scale-105"
                      : "-rotate-[0.64deg] scale-105"
                  }`}
                >
                  <div
                    className="rounded-[18px] border-r-[7px] border-b-[7px] border-[#E5792B] shadow-2xl hover:shadow-3xl transition-all duration-300 min-w-[320px] min-h-[350px] relative overflow-hidden"
                    style={{
                      backgroundImage: "url('/images/chessboard.png')",
                      backgroundSize: "contain",
                      backgroundPosition: "bottom",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className={`flex flex-col absolute top-0 left-0 w-full h-full  p-8 bg-white/90`}
                    >
                      <div className="mb-6 text-[#E5792B]">
                        <IconComponent size={60} color="#E5792B" />
                      </div>

                      <p className="text-black font-jost text-[18px] leading-[28px] max-w-1/2">
                        Hover to start a Conversation
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
