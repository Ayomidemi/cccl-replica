"use client";

import { useEffect, useState } from "react";
import { SplashScreen } from "@/components/sections/SplashScreen";
import { LandingPage } from "@/components/landing/LandingPage";

const HERO_VIDEOS = {
  mobile: "/images/videos/heromobile.mp4",
  desktop: "/images/videos/herovideo.mp4",
} as const;

function HeroVideoPreload() {
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const warm = document.createElement("video");
    warm.preload = "auto";
    warm.muted = true;
    warm.playsInline = true;
    warm.setAttribute("aria-hidden", "true");
    warm.style.cssText =
      "position:fixed;width:0;height:0;opacity:0;pointer-events:none";
    warm.src = mobile ? HERO_VIDEOS.mobile : HERO_VIDEOS.desktop;
    document.body.appendChild(warm);
    warm.load();
    return () => {
      warm.pause();
      warm.removeAttribute("src");
      warm.load();
      warm.remove();
    };
  }, []);

  return (
    <>
      <link
        rel="preload"
        as="video"
        href={HERO_VIDEOS.mobile}
        type="video/mp4"
        media="(max-width: 767px)"
      />
      <link
        rel="preload"
        as="video"
        href={HERO_VIDEOS.desktop}
        type="video/mp4"
        media="(min-width: 768px)"
      />
    </>
  );
}

export default function Home() {
  const [ready, setReady] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const hasHash = Boolean(window.location.hash);
    const entered = sessionStorage.getItem("licf-entered") === "1";
    setShowMainContent(hasHash || entered);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!showMainContent) return;
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [showMainContent]);

  return (
    <>
      <HeroVideoPreload />
      {!ready ? null : showMainContent ? (
        <LandingPage />
      ) : (
        <SplashScreen
          onEnter={() => {
            sessionStorage.setItem("licf-entered", "1");
            setShowMainContent(true);
          }}
        />
      )}
    </>
  );
}
