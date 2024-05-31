import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TitleSubtitle from "./components/TitleSubtitle";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        
        {children}
        
        <TitleSubtitle title="How it works?" subtitle={null} overtitle={null}/>

        <TitleSubtitle title="Customer testimonials" subtitle="Hear from some of our client" overtitle={null}/>
        
        <TitleSubtitle title="Don´t miss" subtitle="We are expanding rapidly, subscribe to our newsletter." overtitle="News"/>

        <TitleSubtitle title="Do you have a question?" subtitle="Here some common questions answered" overtitle="FAQ"/>
        </body>
    </html>
  );
}
