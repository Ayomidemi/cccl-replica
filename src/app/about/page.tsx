import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About LICF",
  description:
    "The Lagos International Chess Festival exists because a boy from the slums of Lagos learned to play chess — and decided every child deserves the same chance at the top.",
  openGraph: {
    title: `About LICF | ${SITE_NAME}`,
    description:
      "Learn what LICF is, why Lagos, and how chess brings together education, innovation, culture and social impact in Nigeria.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: "/images/coverlandscape.png",
        width: 1536,
        height: 1024,
        alt: `${SITE_NAME} — Lagos, Nigeria`,
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function About() {
  return <AboutPage />;
}
