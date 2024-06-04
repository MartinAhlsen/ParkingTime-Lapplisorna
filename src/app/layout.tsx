import type { Metadata } from "next";
import "./globals.css";
import TitleSubtitle from "./components/TitleSubtitle";

import WhyParkingTime from "./components/WhyParkingTime";
import Statistics from "./components/Statistics";
import { Lato, Roboto, MedievalSharp } from "next/font/google";

import FAQ from "./components/FAQ";
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import SmartParkingSolution from "./components/Statistics/SmartParkingSolution";
import TrustedBy from "./components/TrustedBy";
import { trustedByOne, trustedByTwo } from "@/../public/data/trustedByData";
import MatildaCEO from "./components/MatildaCEO";

const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Parking Time",
  description:
    "Digital parking disc - directly on your mobile. A winning concept in a new, digitalized format.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${lato.variable}`}>
        <NextUIProvider>
          {children}
          <SmartParkingSolution />
          <TitleSubtitle
            title="How it works?"
            subtitle={null}
            overtitle={null}
          />
          <WhyParkingTime />
          <TitleSubtitle
            title="Customer testimonials"
            subtitle="Hear from some of our client"
            overtitle={null}
          />

          <TitleSubtitle
            title="Don´t miss"
            subtitle="We are expanding rapidly, subscribe to our newsletter."
            overtitle="News"
          />

          <TrustedBy arrayOne={trustedByOne} arrayTwo={trustedByTwo} />
          <Statistics />
          <MatildaCEO />
          <TitleSubtitle
            title="Do you have a question?"
            subtitle="Here some common questions answered"
            overtitle="FAQ"
          />
          <FAQ />
        </NextUIProvider>
        </body>

    </html>
  );
}
