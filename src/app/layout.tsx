import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Lato, Roboto, MedievalSharp } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

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
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
