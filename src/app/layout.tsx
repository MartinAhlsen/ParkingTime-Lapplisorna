import type { Metadata } from "next";
import { Lato, Roboto, MedievalSharp } from "next/font/google";
import "./globals.css";
import Statistics from "./components/Statistics";

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

const medieval = MedievalSharp({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Medieval",
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
      <body>
        {children}
        <Statistics />
      </body>
    </html>
  );
}
