"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { steps, Step } from "@/components/data/steps";
import { ShakeHandIcon } from "../ui/ChessIcons";

// Step Preview Component
const StepPreview = ({ step }: { step: Step }) => (
  <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-[#F4F0F0] p-8 rounded-[18px]">
    {/* Image Collage */}
    <div className="relative w-full h-[400px] md:h-[542px] flex-1">
      <Image
        src={step.image}
        alt={step.imageAlt}
        fill
        className="object-cover rounded-lg"
      />
    </div>

    {/* Content */}
    <div className="w-full md:w-[521px] space-y-4 md:space-y-6 flex-1">
      {/* Title */}
      <h2 className="text-[#282828] font-jost font-bold text-3xl md:text-4xl leading-tight">
        {step.title}
      </h2>

      {/* Step 1 Content */}
      {step.id === 1 && (
        <>
          {/* Team Composition */}
          <div className="space-y-1">
            {step.content.teamComposition?.map(
              (item: string, itemIndex: number) => (
                <p
                  key={itemIndex}
                  className={`text-[#282828] font-jost font-normal text-lg ${
                    itemIndex === 2 ? "leading-6" : "leading-7"
                  }`}
                >
                  {item}
                </p>
              )
            )}
          </div>

          {/* What Your Fee Supports */}
          <div className="space-y-2">
            <h3 className="text-[#282828] font-jost font-extrabold text-lg leading-8">
              {step.content.feeSupports?.title}
            </h3>
            <p className="text-[#282828] font-jost font-normal text-lg leading-6">
              {step.content.feeSupports?.description}
            </p>
          </div>

          {/* Live Arena Format */}
          <div className="space-y-2">
            <h3 className="text-[#282828] font-jost font-extrabold text-lg leading-8">
              {step.content.liveArena?.title}
            </h3>
            <p className="text-[#282828] font-jost font-normal text-lg leading-6">
              {step.content.liveArena?.description}
            </p>
          </div>

          {/* Participation Fee */}
          <div className="space-y-2">
            <h3 className="text-[#282828] font-jost font-bold text-lg leading-8">
              Participation Fee:
            </h3>
            <p className="text-[#282828] font-jost font-normal text-lg leading-6">
              {step.content.participationFee}
            </p>
          </div>

          {/* Register Button */}
          <Button
            variant="secondary"
            size="lg"
            className="flex items-center justify-center gap-1"
          >
            <ShakeHandIcon size={20} color="white" />
            {step.content.buttonText}
          </Button>
        </>
      )}

      {/* Step 2 Content */}
      {step.id === 2 && (
        <>
          <p className="text-[#282828] font-jost font-normal text-lg leading-6">
            {step.content.statistic}
          </p>

          <p className="text-[#282828] font-jost font-normal text-lg leading-6">
            {step.content.description}
          </p>

          <div className="space-y-2">
            <p className="text-[#282828] font-jost font-bold text-lg leading-6">
              {step.content.callToAction}
            </p>
          </div>

          <div className="space-y-2">
            {step.content.benefits?.map(
              (benefit: string, benefitIndex: number) => (
                <p
                  key={benefitIndex}
                  className="text-[#282828] font-jost font-normal text-lg leading-6"
                >
                  {benefit}
                </p>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {step.content.buttons?.map(
              (
                button: { text: string; variant: string },
                buttonIndex: number
              ) => (
                <Button
                  key={buttonIndex}
                  variant={
                    button.variant === "secondary" ? "secondary" : "outline"
                  }
                  size="lg"
                >
                  {button.text}
                </Button>
              )
            )}
          </div>
        </>
      )}

      {/* Step 3 Content */}
      {step.id === 3 && (
        <>
          <p className="text-[#282828] font-jost font-normal text-lg leading-6">
            {step.content.description}
          </p>

          <div className="space-y-4">
            <h3 className="text-[#282828] font-jost font-extrabold text-lg leading-8 uppercase">
              {step.content.benefitsTitle}
            </h3>

            <div className="space-y-2">
              {step.content.benefits?.map(
                (benefit: string, benefitIndex: number) => (
                  <p
                    key={benefitIndex}
                    className="text-[#282828] font-jost font-normal text-lg leading-6"
                  >
                    {benefit}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Register Button */}
          <Button
            variant="secondary"
            size="lg"
            className="flex items-center justify-center gap-1"
          >
            <ShakeHandIcon size={20} color="white" />
            {step.content.buttonText}
          </Button>
        </>
      )}
    </div>
  </div>
);

export function ParticipationSection() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Scrolling text data
  const scrollingText = "Corporate Impact Through Chess";

  return (
    <section
      className="relative w-full px-0 py-0 bg-white min-h-screen"
      data-section="participation"
    >
      {/* Scrolling Text Banner */}
      <div className="relative w-full my-32 h-28 md:h-32 overflow-hidden bg-white">
        <div
          className="absolute whitespace-nowrap flex items-center"
          style={{
            animation: "marquee 10s linear infinite",
          }}
        >
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="flex items-center">
              <Star size={50} color="#E5792B" />
              <span className="text-[#282828] uppercase mx-4 font-manrope font-medium text-6xl md:text-7xl lg:text-8xl leading-tight tracking-normal">
                {scrollingText}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Title Section */}
      <div className="flex flex-col items-center gap-2 py-8 bg-white">
        {/* Choose Your */}
        <div className="relative">
          <div className="sm:bg-[#E5792B] bg-transparent flex items-center justify-center w-full sm:w-72 lg:w-80 h-full sm:h-18 lg:h-20">
            <span className="sm:text-white text-[#E5792B] font-jost font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">
              Choose Your
            </span>
          </div>
        </div>

        {/* Level of Participation */}
        <div className="relative">
          <div className="sm:bg-[#E5792B] bg-transparent flex items-center justify-center w-full sm:w-96 lg:w-[481px] h-full sm:h-18 lg:h-20">
            <span className="sm:text-white text-[#E5792B] font-jost font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">
              Level of Participation
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full min-h-screen flex flex-col items-center bg-white py-8">
        {/* Main Content Row */}
        <div className="w-full max-w-7xl mx-auto flex items-center gap-4 md:gap-8 px-4 md:px-8">
          {/* Left Indicator Box */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-11 h-[410px] bg-[#EEEEEE] rounded-[18px]" />
          </div>

          {/* Step Content */}
          <div className="flex-1">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <StepPreview step={steps[activeStep]} />
            </motion.div>
          </div>

          {/* Right Indicator Box */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-11 h-[410px] bg-[#EEEEEE] rounded-[18px]" />
          </div>
        </div>

        {/* Navigation Section */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center mt-8 px-4 md:px-8">
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevStep}
              className="flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Image
                src={"/images/arrow-left.png"}
                alt="CCCL"
                width={50}
                height={50}
                className="object-cover cursor-pointer w-12 h-12 md:w-13 md:h-13"
              />
            </button>

            <div className="flex flex-row gap-2">
              {steps.map((step, index) => {
                const StepIcon = step.chessPiece;
                const isActive = activeStep === index;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className="flex items-center justify-center transition-all duration-300 p-3 cursor-pointer hover:scale-110"
                  >
                    <StepIcon
                      size={24}
                      color={isActive ? "#E5792B" : "#AFAFAF"}
                    />
                  </button>
                );
              })}
            </div>

            <button
              onClick={nextStep}
              className="flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Image
                src={"/images/arrow-left.png"}
                alt="CCCL"
                width={50}
                height={50}
                className="object-cover cursor-pointer w-12 h-12 md:w-13 md:h-13 transform scale-x-[-1]"
              />
            </button>
          </div>

          {/* Step Counter */}
          <div className="text-black px-4 rounded-full text-sm font-medium">
            <p className="text-[#282828] font-jost font-normal text-[15px] leading-6">
              {activeStep + 1} / {steps.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
