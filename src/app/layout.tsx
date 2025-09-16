import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Jost,
  Raleway,
  Manrope,
  Caesar_Dressing
} from "next/font/google";
import localFont from "next/font/local";
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

const caesarDressing = Caesar_Dressing({
  variable: "--font-caesar-dressing",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Chess in Slums | Corporate Chess Champions League",
  description:
    "Join Nigeria's first Corporate Chess Champions League. Corporate teams compete while supporting education through Chess in Slums Africa. Register your company team today!",
  keywords: [
    "corporate chess",
    "chess tournament",
    "nigeria chess",
    "corporate league",
    "chess champions",
    "chess in slums",
    "tunde onakoya",
    "corporate competition",
    "chess nigeria",
    "business chess",
    "corporate team building",
    "chess education",
    "social impact",
    "chess sponsorship",
    "corporate chess league"
  ],
  authors: [{ name: "Chess in Slums Africa" }],
  creator: "Chess in Slums Africa",
  publisher: "Chess in Slums Africa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Chess in Slums | Corporate Chess Champions League",
    description: "Join Nigeria's first Corporate Chess Champions League. Corporate teams compete while supporting education through Chess in Slums Africa.",
    type: "website",
    locale: "en_NG",
    siteName: "Corporate Chess Champions League",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Chess Champions League - Nigeria's Premier Corporate Chess Tournament",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chess in Slums | Corporate Chess Champions League",
    description: "Join Nigeria's first Corporate Chess Champions League. Corporate teams compete while supporting education through Chess in Slums Africa.",
    images: ["/images/og-image.jpg"],
    creator: "@chessinslums",
  },
  alternates: {
    canonical: "https://cccl.chessinslums.org",
  },
  category: "sports",
  classification: "Chess Tournament",
  other: {
    "contact:email": "info@chessinslums.org",
    "contact:phone": "+234-XXX-XXX-XXXX",
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${jost.variable} ${raleway.variable} ${manrope.variable} ${bogista.variable} ${impact.variable} ${caesarDressing.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
