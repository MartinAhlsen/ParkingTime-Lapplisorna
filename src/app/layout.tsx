import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import TitleSubtitle from "./components/TitleSubtitle";
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
      <body className={""}>
        
        {children}
        
        <TitleSubtitle title="How it works?" subtitle={null} overtitle={null}/>

        <TitleSubtitle title="Customer testimonials" subtitle="Hear from some of our client" overtitle={null}/>
        
        <TitleSubtitle title="Don´t miss" subtitle="We are expanding rapidly, subscribe to our newsletter." overtitle="News"/>

        <TitleSubtitle title="Do you have a question?" subtitle="Here some common questions answered" overtitle="FAQ"/>
        <Statistics />
        </body>
    </html>
  );
}
