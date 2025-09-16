"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Star } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { steps, Step } from "@/components/data/steps";

// Step Preview Component
const StepPreview = ({ step }: { step: Step }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="w-full h-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-24 px-0 md:px-6 lg:px-0"
  >
    {/* Image Collage */}
    <div className="relative w-full h-[542px] flex-1 md:flex hidden">
      <Image
        src={step.image}
        alt={step.imageAlt}
        fill
        className="object-cover"
      />
    </div>

    {/* Timeline */}
    <div className="flex flex-row lg:flex-col items-center justify-center lg:justify-start gap-4 lg:gap-0">
      {steps.map((timelineStep) => {
        const TimelineChessPiece = timelineStep.chessPiece;
        const isTimelineActive = timelineStep.id === step.id;

        return (
          <div
            key={timelineStep.id}
            className="flex flex-col lg:flex-col items-center"
          >
            <div
              className={`w-px h-8 lg:h-20 border-l ${
                isTimelineActive ? "border-[#E5792B]" : "border-[#AFAFAF]"
              } hidden lg:block`}
            ></div>
            <div
              className={`w-14 h-14 lg:w-[80px] lg:h-[80px] border rounded-full flex items-center justify-center ${
                isTimelineActive ? "border-[#E5792B]" : "border-[#AFAFAF]"
              }`}
            >
              <TimelineChessPiece
                size={24}
                color={isTimelineActive ? "#E5792B" : "#AFAFAF"}
              />
            </div>
            <div
              className={`w-px h-8 lg:h-20 border-l ${
                isTimelineActive ? "border-[#E5792B]" : "border-[#AFAFAF]"
              } hidden lg:block`}
            ></div>
          </div>
        );
      })}
      {/* Bottom line */}
      <div className="w-px h-8 lg:h-20 border-l border-[#AFAFAF] hidden lg:block"></div>
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
                  className={`text-[#282828] font-jost font-normal text-sm ${
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
            <p className="text-[#282828] font-jost font-normal text-base leading-6">
              {step.content.feeSupports?.description}
            </p>
          </div>

          {/* Live Arena Format */}
          <div className="space-y-2">
            <h3 className="text-[#282828] font-jost font-extrabold text-lg leading-8">
              {step.content.liveArena?.title}
            </h3>
            <p className="text-[#282828] font-jost font-normal text-base leading-6">
              {step.content.liveArena?.description}
            </p>
          </div>

          {/* Participation Fee */}
          <div className="space-y-2">
            <h3 className="text-[#282828] font-jost font-bold text-lg leading-8">
              Participation Fee:
            </h3>
            <p className="text-[#282828] font-jost font-normal text-base leading-6">
              {step.content.participationFee}
            </p>
          </div>

          {/* Register Button */}
          <Button variant="secondary" size="lg">
            {step.content.buttonText}
          </Button>
        </>
      )}

      {/* Step 2 Content */}
      {step.id === 2 && (
        <>
          <p className="text-[#282828] font-jost font-normal text-base leading-6">
            {step.content.statistic}
          </p>

          <p className="text-[#282828] font-jost font-normal text-base leading-6">
            {step.content.description}
          </p>

          <div className="space-y-2">
            <p className="text-[#282828] font-jost font-bold text-base leading-6">
              {step.content.callToAction}
            </p>
          </div>

          <div className="space-y-2">
            {step.content.benefits?.map(
              (benefit: string, benefitIndex: number) => (
                <p
                  key={benefitIndex}
                  className="text-[#282828] font-jost font-normal text-sm leading-6"
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
          <p className="text-[#282828] font-jost font-normal text-base leading-6">
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
                    className="text-[#282828] font-jost font-normal text-sm leading-6"
                  >
                    {benefit}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Register Button */}
          <Button variant="secondary" size="lg">
            {step.content.buttonText}
          </Button>
        </>
      )}
    </div>
  </motion.div>
);

export function ParticipationSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useScroll().scrollY.onChange(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { top } = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const progress = Math.abs(top) / (container.offsetHeight - viewportHeight);

    // Ensure first step is visible earlier and transitions are smoother
    const adjustedProgress = Math.max(0, Math.min(1, progress * 1.1));
    const stepIndex = Math.floor(adjustedProgress * (steps.length - 1));

    setActiveStep(Math.max(0, Math.min(stepIndex, steps.length - 1)));
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.99, 1],
    [1, 1, 1, 0]
  );

  // Scrolling text data
  const scrollingText = "Corporate Impact Through Chess";

  return (
    <section
      ref={containerRef}
      className="relative w-full px-0 py-0 bg-white"
      style={{
        minHeight: `${(steps.length + 1) * 100}vh`,
      }}
      data-section="participation"
    >
      {/* Scrolling Text Banner */}
      <div className="relative w-full mt-8 h-28 md:h-32 overflow-hidden bg-white">
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
      <div className="flex flex-col items-center md:gap-4 gap-2 py-8 md:py-16 bg-white">
        {/* Choose Your */}
        <div className="relative">
          <div className="sm:bg-[#E5792B] bg-transparent rounded-lg flex items-center justify-center w-full sm:w-72 lg:w-80 h-full sm:h-18 lg:h-20">
            <span className="sm:text-white text-[#E5792B] font-jost font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">
              Choose Your
            </span>
          </div>
        </div>

        {/* Level of Participation */}
        <div className="relative">
          <div className="sm:bg-[#E5792B] bg-transparent rounded-lg flex items-center justify-center w-full sm:w-96 lg:w-[481px] h-full sm:h-18 lg:h-20">
            <span className="sm:text-white text-[#E5792B] font-jost font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">
              Level of Participation
            </span>
          </div>
        </div>
      </div>

      {/* Main Scroll Container */}
      <motion.div
        ref={sectionRef}
        className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden bg-white"
        style={{
          opacity,
        }}
      >
        <div className="w-full py-8 px-6 md:px-10 h-screen flex flex-col justify-center items-center">
          <div className="relative z-10 w-full">
            <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-start md:justify-center items-center gap-16">
              {/* Step Content */}
              <div className="w-full relative flex">
                <div className="w-full">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      className="absolute top-0 left-0 w-full -translate-y-1/2"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: activeStep === index ? 1 : 0,
                        y: activeStep === index ? 0 : 50,
                        zIndex: activeStep === index ? 10 : 0,
                      }}
                      transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <StepPreview step={step} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
