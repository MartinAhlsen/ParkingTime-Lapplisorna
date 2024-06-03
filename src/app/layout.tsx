import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import WhyParkingTime from "./components/WhyParkingTime";
import Statistics from "./components/Statistics";
import TrustedBy from "./components/TrustedBy";
import { trustedByOne, trustedByTwo } from "@/../public/data/trustedByData";

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
      <body>
        {children}

        <WhyParkingTime />

        <Statistics />
        <TrustedBy arrayOne={trustedByOne} arrayTwo={trustedByTwo} />
      </body>
    </html>
  );
}
