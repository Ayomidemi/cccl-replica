"use client";

import { useEffect, useState } from "react";
import { SplashScreen } from "@/components/sections/SplashScreen";
import { LandingPage } from "@/components/landing/LandingPage";

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

  if (!ready) return null;

  if (!showMainContent) {
    return (
      <SplashScreen
        onEnter={() => {
          sessionStorage.setItem("licf-entered", "1");
          setShowMainContent(true);
        }}
      />
    );
  }

  return <LandingPage />;
}
