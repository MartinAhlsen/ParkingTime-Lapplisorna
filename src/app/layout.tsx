

import React from "react";
import ReactDOM from "react-dom/client";
import { Lato, Roboto, MedievalSharp } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { trustedByOne, trustedByTwo } from "@/../public/data/trustedByData";
import type { Metadata } from "next";
import "./globals.css";
import TitleSubtitle from "./components/TitleSubtitle";
import WhyParkingTime from "./components/WhyParkingTime";
import Statistics from "./components/Statistics";
import FAQ from "./components/FAQ";
import SmartParkingSolution from "./components/Statistics/SmartParkingSolution";
import TrustedBy from "./components/TrustedBy";

import MatildaCEO from "./components/MatildaCEO";
import Footer from "./components/Footer";


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
      
        
          {children}
          
        <Footer/>
      </body>
    </html>
  );
}
