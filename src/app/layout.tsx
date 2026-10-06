import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Jost,
  Raleway,
  Manrope,
  Caesar_Dressing,
  Candal,
} from "next/font/google";
import localFont from "next/font/local";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const bogista = localFont({
  src: "../assets/fonts/Bogista.ttf",
  variable: "--font-bogista",
  display: "swap",
});

const impact = localFont({
  src: "../assets/fonts/Impact.ttf",
  variable: "--font-impact",
  display: "swap",
});

const chunko = localFont({
  src: "../assets/fonts/ChunkoBoldDemo.ttf",
  variable: "--font-chunko",
  display: "swap",
});

const caesarDressing = Caesar_Dressing({
  variable: "--font-caesar-dressing",
  subsets: ["latin"],
  weight: ["400"],
});

const candal = Candal({
  variable: "--font-candal",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Chess in Slums Africa`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "Chess in Slums Africa", url: "https://chessinslums.org" }],
  creator: "Chess in Slums Africa",
  publisher: "Chess in Slums Africa",
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_NG",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: "/images/prelanding.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Lagos, Nigeria`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/prelanding.jpg"],
    creator: "@chessinslums",
    site: "@chessinslums",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "events",
  other: {
    "contact:email": CONTACT_EMAIL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${jost.variable} ${raleway.variable} ${manrope.variable} ${bogista.variable} ${impact.variable} ${chunko.variable} ${caesarDressing.variable} ${candal.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
